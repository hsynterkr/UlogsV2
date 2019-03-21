import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import ReactDOM from 'react-dom';
import { withRouter, Link } from 'react-router-dom';
import classNames from 'classnames';
import { injectIntl, FormattedMessage } from 'react-intl';
import _ from 'lodash';
import readingTime from 'reading-time';
import { Checkbox, Form, Input, Select, Button, Collapse, Menu, Dropdown, Icon } from 'antd';
import { rewardsValues } from '../../../common/constants/rewards';
import Action from '../Button/Action';
import requiresLogin from '../../auth/requiresLogin';
import withEditor from './withEditor';
import EditorInput from './EditorInput';
import UlogDropdown from './UlogDropdown';
import { remarkable } from '../Story/Body';
import BodyContainer from '../../containers/Story/BodyContainer';
import './Editor.less';

@injectIntl
@requiresLogin
@Form.create()
@withEditor
class EditorUlogHowto extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    form: PropTypes.shape().isRequired,
    title: PropTypes.string,
    topics: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.string,
    reward: PropTypes.string,
    upvote: PropTypes.bool,
    loading: PropTypes.bool,
    isUpdating: PropTypes.bool,
    saving: PropTypes.bool,
    draftId: PropTypes.string,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func,
    onError: PropTypes.func,
    onImageUpload: PropTypes.func,
    onImageInvalid: PropTypes.func,
    handleExtraMonetization: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    topics: [],
    body: '',
    reward: rewardsValues.half,
    upvote: true,
    recentTopics: [],
    popularTopics: [],
    loading: false,
    isUpdating: false,
    saving: false,
    draftId: null,
    onUpdate: () => {},
    onDelete: () => {},
    onSubmit: () => {},
    onError: () => {},
    onImageUpload: () => {},
    onImageInvalid: () => {},
    handleExtraMonetization: () => {},
  };

  constructor(props) {
    super(props);

    this.state = {
      body: '',
      bodyHTML: '',
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.onHashtagUpdate = this.onHashtagUpdate.bind(this)
    this.setValues = this.setValues.bind(this);
    this.setBodyAndRender = this.setBodyAndRender.bind(this);
    this.throttledUpdate = this.throttledUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setValues(this.props);
    this.props.form.setFieldsValue({
      title: 'ULOG (HOWTO): ',
      topics: ['ulog', 'ulog-howto'],
    });

    // eslint-disable-next-line react/no-find-dom-node
    const select = ReactDOM.findDOMNode(this.select);
    if (select) {
      const selectInput = select.querySelector('input,textarea,div[contentEditable]');
      if (selectInput) {
        selectInput.setAttribute('autocorrect', 'off');
        selectInput.setAttribute('autocapitalize', 'none');
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const { title, topics, body, reward, upvote, draftId } = this.props;
    if (
      title !== nextProps.title ||
      !_.isEqual(topics, nextProps.topics) ||
      body !== nextProps.body ||
      reward !== nextProps.reward ||
      upvote !== nextProps.upvote ||
      (draftId && nextProps.draftId === null)
    ) {
      this.setValues(nextProps);
    }
  }

  onUpdate() {
    _.throttle(this.throttledUpdate, 200, { leading: false, trailing: true })();
  }

  onHashtagUpdate(value) {
    console.log(value);
  }

  setValues(post) {
    // NOTE: Used to rollback damaged drafts - https://github.com/busyorg/busy/issues/1412
    // Might be deleted after a while.
    let reward = rewardsValues.half;
    if (
      post.reward === rewardsValues.all ||
      post.reward === rewardsValues.half ||
      post.reward === rewardsValues.none
    ) {
      reward = post.reward;
    }

    this.props.form.setFieldsValue({
      title: post.title,
      topics: post.topics,
      body: post.body,
      reward,
      upvote: post.upvote,
    });

    this.setBodyAndRender(post.body);
  }

  setBodyAndRender(body) {
    this.setState({
      body,
      bodyHTML: remarkable.render(body),
    });
  }

  checkTopics = intl => (rule, value, callback) => {
    if (value[0] !== 'ulog') {
      callback(
        intl.formatMessage({
          id: 'ulog_not_topic',
          defaultMessage: '#ulog must be the first tag for posts.',
        })
      )
    }

    if (!value || value.length < 1 || value.length > 5) {
      callback(
        intl.formatMessage({
          id: 'topics_error_count',
          defaultMessage: 'You must add 1 to 4 topics with #ulog as the first.',
        }),
      );
    }

    value
      .map(topic => ({ topic, valid: /^[a-z0-9]+(-[a-z0-9]+)*$/.test(topic) }))
      .filter(topic => !topic.valid)
      .map(topic =>
        callback(
          intl.formatMessage(
            {
              id: 'topics_error_invalid_topic',
              defaultMessage: 'Topic {topic} is invalid.',
            },
            {
              topic: topic.topic,
            },
          ),
        ),
      );

    callback();
  };

  throttledUpdate() {
    const { form } = this.props;

    const values = form.getFieldsValue();
    this.setBodyAndRender(values.body);

    if (Object.values(form.getFieldsError()).filter(e => e).length > 0) return;

    this.props.onUpdate(values);
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, values) => {
      if (err) this.props.onError();
      else this.props.onSubmit(values);
    });
  }

  handleDelete(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.onDelete();
  }

  render() {
    const { intl, form, loading, isUpdating, saving, draftId } = this.props;
    const { getFieldDecorator } = form;
    const { body, bodyHTML } = this.state;
    const { words, minutes } = readingTime(bodyHTML);
    const Panel = Collapse.Panel;

    return (
      <div>
        <div>
          <Collapse defaultActiveKey={['1']}>
            <Panel header='The "#ulog-howto" Editor' key="1">
              <p>
              We like to reward #ulogging contributions born solely out of <span className="bold-italic">"your experience" (per day)</span>. We seek to incentivize you to learn something new <span className="bold-italic">(per day)</span>, for the sake of #ulogging. This way, <span className="bold-italic">"not a day slips emptily by" and not a day aren't you capable of reshaping the INTERNET; touching your "true fans" and attaining "true celebrity-hood" etc</span>

              <br/> It's simple. <a href="https://steemit.com/@ulogs/can-ulogging-and-ulogs-org-reshape-the-entire-internet-what-if-we-re-fresh-every-existing-hashtag-birthing-fresh-ulog-based">When you add #ulog to any existing concept etc an existing concept suddenly turns out all fresh</a>. Simply use this editor to contribute to the Ulog-KnowledgeBank, <span className="bold-italic">freshly-made #ulog-HOWTO(s) born solely out of your experience (per day)</span> <br/>.

              Become "<span className="bold-italic">true fans</span>"! Visit #ulog-howto daily. Join its community on <a href="https://discord.gg/EkynDXt">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>.
              </p>
            </Panel>
          </Collapse>
        </div>
        <div>
          <Collapse>
            <Panel header='When/How/Why use the "#ulog-howto" editor?/?/?' key="1">
              In the course of today and your activities in it, did you learn "how to do something; anything"?
              Are you learning "how to do something; anything" as we speak?
              Did you learn "how to do something; anything" for the sake of doing a #ulog-howto post?

              <blockquote style={{'border-left':'3px solid #a9a9a9', 'padding' : '0 10px', 'color' : '#a9a9a9'}}>Teach us step by step, in your own perspective "how to". Remember to insert images and videos that you have freshly-created where necessary.</blockquote>

              <br/>

              <blockquote style={{'border-left':'3px solid #a9a9a9', 'padding' : '0 10px', 'color' : '#a9a9a9'}}>Don't let this knowledge stay redundant. The world and your entire audience of "true fans" needs to hear it!_**</blockquote>
            </Panel>
          </Collapse>
          <Collapse>
            <Panel header="Tips To Prowess" key="1">
              <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
                <li>Be yourself and as expressive as possible. <span className="bold-italic">The world and generations yet unborn will come here to dig from your ulog-experience</span>.</li>
                <li>In the art of #ulogging under #ulog-howto, there is no need to resource from the internet. <span className="bold-italic">Keep all videos, images, sound, avatars fresh. Let's gift to internet and re-shape it, with "YOU"</span>!</li>
                <li>Relegate reservations, attempt out-of-the-boxness; "<span className="bold-italic">flaws allowed</span>"!</li>
                <li>Every #ulog-howto post that you write here appears on the decentralized steem blockchain and can earn you a variety of rewards, steem, opportunities etc. <span className="bold-italic">Make the most of each post</span>.</li>
                <li>Remember that you have "<span className="bold-italic">you</span>" as your first audience, an <span className="bold-italic">audience of "true fans"</span>, an <span className="bold-italic">audience in the search engines and an audience of generations yet unborn</span>. Use each #ulog-howto post <span className="bold-italic">to leave your #ulogacies in lights</span>.</li>
                <li><span className="bold-italic">Be "true fans" on #ulog-howto, get inspired, grow your "true fan-base".</span></li>
                <li>Grow each time!</li>
                <li><span className="bold-italic">Join the #ulog-howto community on <a href="https://discord.gg/EkynDXt">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>.</span></li>
                <li>etc</li>
              </ul>
            </Panel>
          </Collapse>
        </div>
      <Form className="Editor" layout="vertical" onSubmit={this.handleSubmit}>
        <Helmet>
          <title>
            {intl.formatMessage({ id: 'write_post', defaultMessage: 'Write post' })} - Ulog
          </title>
        </Helmet>
        <Form.Item
          label={
            <span className="Editor__label">
              <FormattedMessage id="title" defaultMessage="Title" />
            </span>
          }
        >
          {getFieldDecorator('title', {
            initialValue: '',
            rules: [
              {
                required: true,
                message: intl.formatMessage({
                  id: 'title_error_empty',
                  defaultMessage: 'title_error_empty',
                }),
              },
              {
                max: 255,
                message: intl.formatMessage({
                  id: 'title_error_too_long',
                  defaultMessage: "Title can't be longer than 255 characters.",
                }),
              },
            ],
          })(
            <Input
              ref={title => {
                this.title = title;
              }}
              onChange={this.onUpdate}
              className="Editor__title"
              placeholder={intl.formatMessage({
                id: 'title_placeholder',
                defaultMessage: 'ULOG (HOWTO): ',
              })}
            />,
          )}
        </Form.Item>
        <Form.Item
          label={
            <span className="Editor__label">
              <FormattedMessage id="topics" defaultMessage="Topics" />
            </span>
          }
        >
          {getFieldDecorator('topics', {
            initialValue: [],
            rules: [
              {
                required: true,
                message: intl.formatMessage({
                  id: 'topics_error_empty',
                  defaultMessage: 'Please enter topics',
                }),
                type: 'array',
              },
              { validator: this.checkTopics(intl) },
            ],
          })(
            <Select
              ref={ref => {
                this.select = ref;
              }}
              onChange={this.onUpdate}
              className="Editor__topics"
              mode="tags"
              placeholder={intl.formatMessage({
                id: 'topics_placeholder',
                defaultMessage: 'Add story topics here',
              })}
              dropdownStyle={{ display: 'none' }}
              tokenSeparators={[' ', ',']}
            />,
          )}
        </Form.Item>
        <div style={{ color : 'purple' }}>
          <span className="bold-italic">Ulogs.org allows you to enjoy the entire steem ecosystem.</span> So, incase you change your mind and want to do a steemit post like normal, that's easy!!! Simply remove the default <span className="bold-italic">"ULOG (howto):"</span> from Title above and kindly remove the default <span className="bold-italic">"#ulog & #ulog-howto"</span> from among the tags in the Hashtags box. <span className="bold-italic">(Please help us as we try to reserve #ulog, only for ULOGS.)</span><br/><br/>
          Want to <span className="bold-italic">"mine the human"</span> some more? You can also try one of our specialized editors above!!!<b>If you encounter any issues, drop us feedback on <a href="https://discord.gg/EkynDXt">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a></b>
        </div>
        <Form.Item>
          {getFieldDecorator('body', {
            rules: [
              {
                required: true,
                message: intl.formatMessage({
                  id: 'story_error_empty',
                  defaultMessage: "Story content can't be empty.",
                }),
              },
            ],
          })(
            <EditorInput
              rows={12}
              addon={
                <FormattedMessage
                  id="reading_time"
                  defaultMessage={'{words} words / {min} min read'}
                  values={{
                    words,
                    min: Math.ceil(minutes),
                  }}
                />
              }
              onChange={this.onUpdate}
              onImageUpload={this.props.onImageUpload}
              onImageInvalid={this.props.onImageInvalid}
              inputId={'editor-inputfile'}
            />,
          )}
        </Form.Item>
        {body && (
          <Form.Item
            label={
              <span className="Editor__label">
                <FormattedMessage id="preview" defaultMessage="Preview" />
              </span>
            }
          >
            <BodyContainer full body={body} />
          </Form.Item>
        )}
        <Form.Item
          className={classNames({ Editor__hidden: isUpdating })}
          label={
            <span className="Editor__label">
              <FormattedMessage id="reward" defaultMessage="Reward" />
            </span>
          }
        >
          {getFieldDecorator('reward')(
            <Select onChange={this.onUpdate} disabled={isUpdating}>
              <Select.Option value={rewardsValues.all}>
                <FormattedMessage id="reward_option_100" defaultMessage="100% Steem Power" />
              </Select.Option>
              <Select.Option value={rewardsValues.half}>
                <FormattedMessage id="reward_option_50" defaultMessage="50% SBD and 50% SP" />
              </Select.Option>
              <Select.Option value={rewardsValues.none}>
                <FormattedMessage id="reward_option_0" defaultMessage="Declined" />
              </Select.Option>
            </Select>,
          )}
        </Form.Item>
        <Form.Item className={classNames({ Editor__hidden: isUpdating })}>
          {getFieldDecorator('upvote', { valuePropName: 'checked', initialValue: true })(
            <Checkbox onChange={this.onUpdate} disabled={isUpdating}>
              <FormattedMessage id="like_post" defaultMessage="Like this post" />
            </Checkbox>,
          )}
          <Checkbox onChange={this.props.handleExtraMonetization} disabled={isUpdating}>
            <FormattedMessage id="extra_monetization" πdeefaultMessage="Extra Monitezation" />
          </Checkbox>
        </Form.Item>
        <div className="Editor__bottom">
          <span className="Editor__bottom__info">
            <i className="iconfont icon-markdown" />{' '}
            <FormattedMessage
              id="markdown_supported"
              defaultMessage="Styling with markdown supported"
            />
          </span>
          <div className="Editor__bottom__right">
            {saving && (
              <span className="Editor__bottom__right__saving">
                <FormattedMessage id="saving" defaultMessage="Saving..." />
              </span>
            )}
            <Form.Item className="Editor__bottom__cancel">
              {draftId && (
                <Button type="danger" size="large" disabled={loading} onClick={this.handleDelete}>
                  <FormattedMessage id="draft_delete" defaultMessage="Delete this draft" />
                </Button>
              )}
            </Form.Item>
            <Form.Item className="Editor__bottom__submit">
              {isUpdating ? (
                <Action primary big loading={loading} disabled={loading}>
                  <FormattedMessage
                    id={loading ? 'post_send_progress' : 'post_update_send'}
                    defaultMessage={loading ? 'Submitting' : 'Update post'}
                  />
                </Action>
              ) : (
                <Action primary big loading={loading} disabled={loading}>
                  <FormattedMessage
                    id={loading ? 'post_send_progress' : 'post_send'}
                    defaultMessage={loading ? 'Submitting' : 'Post'}
                  />
                </Action>
              )}
            </Form.Item>
          </div>
        </div>
      </Form>
      </div>
    );
  }
}

export default EditorUlogHowto;
