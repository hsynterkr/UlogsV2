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
            <Panel header="The General-Purpose Editor" key="1">
              <p>
                <b>Ulogs.org has a bunch of specialized editors for posting Ulogs,</b> whether you are ulogging under <a href="https://ulogs.org/created/ulog">#ulog</a> or under a #ulog-subtag (e.g <a href="https://ulogs.org/created/ulography">#ulography</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>, <a href="https://ulogs.org/created/ulog-hugot">#ulog-hugot</a> etc.). You can explore these editors by clicking the <b>"PEN Icon"</b> on the top right area across our website. <br/> 
                Alternatively though, <b><i>if you have found yourself here</i></b>, you can always use this <b>"General-Purpose Editor"</b> to post your <b>Ulogs, normal blogs etc</b>, after following a few guidelines. <b>Make sure to expand (read) the Style-Guide just below</b>, before you post, to be sure you are posting correctly. <br/><br/>
                <b>The general principle</b> when posting under <a href="https://ulogs.org/created/ulog">#ulog</a> or under any #ulog-subtag is; <b><i>[the more popular "<a href="https://ulogs.org/created/ulog">#ulog</a>" should be your first hashtag, while the "#ulog-subtag" should be the 2nd hashtag]</i></b>. <br/><br/> 
                Note that, <b>you are allowed to birth fresh ulog-subtags along with the "communities" these bring!</b> Inanycase, <b>(for Ulogs)</b> always maintain "<a href="https://ulogs.org/created/ulog">#ulog</a>" as your first hashtag, <b>whenever your post is Ulog-related.</b> <br/>
                <b>Special Note:</b> You can also post on steemit like normal <b>e.g blogs etc</b>, using the <b>"General-Purpose" editor below.</b> In this case, <b>you have no need to use <a href="https://ulogs.org/created/ulog">#ulog</a></b>. Simply chose 5 hashtags related to your subject and chose a Catch Title. <br/><br/>
                <div style={{ color : 'purple' }}>
                  <b><i>Kindly expand the Style-Guide below for QUICK INSIGHT!!!</i></b>
                </div>     
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
            <u><b>Ulog-KnowledgeBank:</b></u>
            <div style={{ color : 'purple' }}>
              <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulography">#ulography</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulography">#ulography</a> etc] <b>IN-TITLE:</b> [add "(ULOG + Photography):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-gratefulvibes">#ulog-gratefulvibes</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-gratefulvibes">#ulog-gratefulvibes</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + GratefulVibes):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Resolutions):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-memes">#ulog-memes</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-memes">#ulog-memes</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Memes):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a> etc] <b>IN-TITLE:</b> [add "(ULOG + Blocktrades):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-podcasts">#ulog-podcasts</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-podcasts">#ulog-podcasts</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Podcasts):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + ShowerThoughts):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-snookmademedoit">#ulog-snookmademedoit</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-snookmademedoit">#ulog-snookmademedoit</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + SnookMadeMeDoIt):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-terrysays">#ulog-terrysays</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-terrysays">#ulog-terrysays</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + TerrySays):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-recipes">#ulog-recipes</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-recipes">#ulog-recipes</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Recipes):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-hugot">#ulog-hugot</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-hugot">#ulog-hugot</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Hugot):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-steem">#ulog-steem</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steem">#ulog-steem</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Steem):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-steemit">#ulog-steemit</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steemit">#ulog-steemit</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Steemit):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-cryptocurrency">#ulog-cryptocurrency</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-cryptocurrency">#ulog-cryptocurrency</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Cryptocurrency):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-poetry">#ulog-poetry</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-poetry">#ulog-poetry</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Poetry):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-steemstem">#ulog-steemstem</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steemstem">#ulog-steemstem</a>, <a href="https://ulogs.org/created/steemstem">#steemstem</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + SteemStem):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a>, <a href="https://ulogs.org/created/utopian-io">#utopian-io</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Utopian.io):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-macrohard">#ulog-macrohard</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-macrohard">#ulog-macrohard</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + MacroHard):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulogifs">#ulogifs</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulogifs">#ulogifs</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + GIFs):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-exchange">#ulog-exchange</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-exchange">#ulog-exchange</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Exchange):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-wiki">#ulog-wiki</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-wiki">#ulog-wiki</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Wiki):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-freebies">#ulog-freebies</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-freebies">#ulog-freebies</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Freebies):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-curated">#ulog-curated</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-curated">#ulog-curated</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Curated):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-pets">#ulog-pets</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-pets">#ulog-pets</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Pets):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-books">#ulog-books</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-books">#ulog-books</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Books):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-funny">#ulog-funny</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-funny">#ulog-funny</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Funny):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-savetheday">#ulog-savetheday</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-savetheday">#ulog-savetheday</a> etc] <b>IN-TITLE:</b> [add "(ULOG + SaveTheDay):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-zoo">#ulog-zoo</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-zoo">#ulog-zoo</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Zoo):" etc.]</font></li>
                <li><font size="2"><b>etc</b></font></li>
              </ul>
            </div>  
            <u><b>Ulog-FanLove (BeLikeTerry):</b></u>
            <div style={{ color : 'purple' }}>
              <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-curie">#ulog-curie</a>:</b> <b>TAGS-Order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-curie">#ulog-curie</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + Curie):" etc.]</font></li>
                <li><font size="2"><b>Ulogging_<a href="https://ulogs.org/created/ulog-ocd">#ulog-ocd</a>:</b> <b>TAGS-order:</b> [<a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-ocd">#ulog-ocd</a> etc.] <b>IN-TITLE:</b> [add "(ULOG + OCD):" etc.]</font></li>
              </ul>
            </div>     
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