import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, Modal, Select } from 'antd';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import {
  getUloggersFollowingList,
} from '../../reducers';
import UlogStory from './UlogStory';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import SteemConnect from '../../steemConnectAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';
import UlogStoryEditor from '../UlogStoryEditor/UlogStoryEditor';

@withRouter
@connect(
  state => ({
    certifiedUloggers: getUloggersFollowingList(state),
  }),
)
class UlogStories extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    authenticatedUser: PropTypes.shape({
      name: PropTypes.string,
    }),
    location: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    isFetchingFollowingList: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    authenticated: false,
    authenticatedUser: {
      name: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      certifiedUloggerNames: [],
      certifiedUloggers: [],
      ulogStoriesObj: {},
      ulogStoriesArr: [],
      loading: true,
      noUsers: false,
      showModalLogin: false,
      displayStories: 0,
    };

    this.getUlogStories = this.getUlogStories.bind(this);
    this.showModal = this.showModal.bind(this);
    this.modalHandleOk = this.modalHandleOk.bind(this);
  }

  showModal(){
    const {showModalLogin} = this.state;
    this.setState({
      showModalLogin: !showModalLogin
    })
  }

  componentDidMount() {
    this.getUlogStories();
  }

  getUlogStories() {
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {

        // get certified ulogger names
        const certifiedUloggerNames = _.sortBy(result, 'following')
          .map(user => {
            let name = _.get(user, 0);

            if (_.isEmpty(name)) {
              name = _.get(user, 'following');
            }
            return name;
          });
        
        // if there are certified uloggers
        if (certifiedUloggerNames.length > 0) {

          // get the first post of each certified ulogger
          certifiedUloggerNames.forEach(userName => {
            var query = {
              tag: userName, // This tag is used to filter the results by a specific post tag
              limit: 1, // This limit allows us to limit the overall results returned to 5
            };

            steemAPI
              .sendAsync('call', ['condenser_api', 'get_discussions_by_blog', [query]])
              .then(result  => {
                // filter-out posts from non-certified users
                if(certifiedUloggerNames.indexOf(result[0].author) < 0) return;

                // push post to ulog stories array
                let { ulogStoriesArr } = this.state;
                ulogStoriesArr.push(
                  { 
                    author: result[0].author, 
                    permlink: result[0].permlink, 
                    created: result[0].created
                  }
                );

                // sort ulog stories by descending created date
                ulogStoriesArr.sort((a, b) => {
                  var keyA = new Date(a.created),
                      keyB = new Date(b.created);
                  if(keyA > keyB) return -1;
                  if(keyA < keyB) return 1;
                  return 0;
                });

                // set ulog stories to state
                this.setState({
                  ulogStoriesArr,
                });
              })
              // set loading and no users to false to display ulog stories
              .then(() => {
                this.setState({
                  loading: false,
                  noUsers: false,
                });
              });
              
          });

          this.setState({ displayStories: 5 });

        } else {
          this.setState({
            noUsers: true,
          });
        }
      })
      .catch(() => {
        this.setState({
          noUsers: true,
        });
      });
  }

  modalHandleOk(){
    const showModalLogin = this.state;
    this.setState({
      showModalLogin : !showModalLogin
    })
  }

  handleLoadMore = () => {
    const { displayStories } = this.state;
    this.setState({ displayStories: displayStories + 5 });
  };

  render() {
    const { ulogStoriesArr, loading, noUsers, showModalLogin, displayStories } = this.state;
    const slicedUlogStories = ulogStoriesArr.slice(0, displayStories);
    const { authenticated, location } = this.props;
    const hasMoreStories = (displayStories < ulogStoriesArr.length);
    const next = location.pathname.length > 1 ? location.pathname : '';

    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="SidebarContentBlock">
        <h4 className="SidebarContentBlock__title">
          <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
          <FormattedMessage id="ulog_stories" defaultMessage="Ulog Stories" />
        </h4>
        <div className="SidebarContentBlock__content" style={{ textAlign: 'center' }} >
          {authenticated ? (
            <Button onClick={this.showModal} type="primary" shape="circle" icon="plus-circle" size={'large'} style={{ float: 'left' }} />
          ) : (
            <Button href={SteemConnect.getLoginURL(next)} type="primary" shape="circle" icon="plus-circle" size={'large'} style={{ float: 'left' }} />
          )}
          <div style={{ fontWeight: 'bold', paddingTop: 10 }}>Add A Ulog-Story</div>
          <br/>
          <div style={{ textAlign: 'left', padding: 3 }}>
            Share images, ulography, graphics, ulog-news, ulog-arts plain text etc freshly-created by you, today.
          </div>
          {slicedUlogStories.map(story => 
            <UlogStory key={story.permlink} story={{ author: story.author, permlink: story.permlink }} />
          )}
          {hasMoreStories && 
            <Button onClick={this.handleLoadMore} type="primary" disabled>
              View More
            </Button>
          }
        </div>
        <Modal
          title={
            <FormattedMessage
              id="ulog_story_quick_post_title"
              defaultMessage="Ulog Story - Save the day! Tell us what you see; what is on your mind; what's going on around you currently..."
            />
          }
          visible={showModalLogin}
          onOk={this.modalHandleOk}
          onCancel={this.modalHandleOk}
          footer={null}
        >
          <UlogStoryEditor />
        </Modal>
      </div>
    );
  }
}

export default UlogStories;
