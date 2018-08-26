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
class Editor extends React.Component {
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
    if (value === 'ulog' || value === 'surpassinggoogle') {
      this.props.form.setFieldsValue({
        title: 'ULOG: ',
        topics: ['ulog', 'surpassinggoogle'],
      });
    } else if (value === 'teardrops') {
      this.props.form.setFieldsValue({
        title: 'TEARDROPS: ',
        topics: ['ulog', 'teardrops'],
      });
    } else if (value === 'untalented') {
      this.props.form.setFieldsValue({
        title: 'UNTALENTED: ',
        topics: ['ulog', 'untalented'],
      });
    } else if (value === 'philippines') {
      this.props.form.setFieldsValue({
        topics: ['ulog', 'philippines'],
      });
    }
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
    if (!value || value.length < 1 || value.length > 5) {
      callback(
        intl.formatMessage({
          id: 'topics_error_count',
          defaultMessage: 'You have to add 1 to 5 topics.',
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
            <Panel header="About ULOGS" key="1">
              <p>
                Ulogs.org has a bunch of specialized editors for posting Ulogs, whether you are ulogging under #ulog or under a #ulog-subtag etc. You can explore these editors by clicking the "PEN Icon" on the top right area across our website. Alternatively though, if you have found yourself here, you can always use this "General-Purpose Editor" to post your Ulogs, normal blogs etc, after following a few guidelines. Make sure to expand (read) the Style-Guide just below, before you post, to be sure you are posting correctly. 
                The general principle when posting under #ulog or under any #ulog-subtag is; <b>[the more popular "#ulog" should be your first hashtag, while the "#ulog-subtag" should be the 2nd hashtag]</b>. Note that, you are allowed to birth fresh ulog-subtags along with the "communities" these bring! Inanycase, (for Ulogs) always maintain "#ulog" as your first hashtag, whenever your post is Ulog-related <br/>
                <b>Special Note:</b> You can also post on steemit like normal, using the "General-Purpose" editor below. In this case, [you have no need to use #ulog] simply chose 5 hashtags related to your subject and chose a Catch Title. <br/><br/>
                <b>Kindly expand the Style-Guide below for QUICK INSIGHT!!!</b>   
              </p>
            </Panel>
          </Collapse>
        </div>
        <div className="hashtags">
          <UlogDropdown />
        </div>
        <div>
          <Collapse>
            <Panel header="The General-Purpose Editor (Style-Guide For #ulog/#ulog-subtags)" key="1">
              <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulography">#ulography</a>:</b> [<b>TAGS:</b> #ulog, #ulography etc] [<b>IN-TITLE:</b> add "<b>(ULOG + Photography):</b>" etc]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-gratefulvibes">#ulog-gratefulvibes</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-gratefulvibes</b> etc] [IN-TITLE: add <b>"(ULOG + GratefulVibes):"</b> etc.]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-resolutions</b> etc] [IN-TITLE: add <b>"(ULOG + Resolutions):"</b> etc.]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-memes">#ulog-memes</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-memes</b> etc] [IN-TITLE: add <b>"(ULOG + Memes):"</b> etc.]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-blocktrades</b> etc] [IN-TITLE: add <b>"(ULOG + Blocktrades):"</b> etc.]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-podcasts">#ulog-podcasts</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-podcasts</b> etc] [IN-TITLE: add <b>"(ULOG + Podcasts):"</b> etc.]</li>
                <li><b>Ulogging under <a href="https://ulogs.org/created/ulog-savetheday">#ulog-savetheday</a>:</b> [TAGS: <b>#ulog</b>, <b>#ulog-savetheday</b> etc] [IN-TITLE: add <b>"(ULOG + SaveTheDay):"</b> etc.]</li>
                <li><b>etc</b></li>
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
                defaultMessage: 'Add title',
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
                defaultMessage: 'Add hashtags here',
              })}
              dropdownStyle={{ display: 'none' }}
              tokenSeparators={[' ', ',']}
            />,
          )}
        </Form.Item>
        <div className="Editor__hashtags">
          <p>
            Choose 5 hashtags closely related to your content. These will make your post searchable by readers, rank them better in the search engines and expose your posts to better curation, accruing you a "true-fanbase". <br/>
            Want to "mine the human" some more? Try one of our #ulogging editors from the drop-down just above. <br/>
          </p>
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

export default Editor;