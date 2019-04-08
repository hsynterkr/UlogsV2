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
      users: [],
      certifiedUloggers: [],
      ulogStoriesObj: {},
      loading: true,
      noUsers: false,
      showModalLogin: false
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
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
    if (!this.props.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }
  }

  async getCertifiedUloggers() {
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {
        const users = _.sortBy(result, 'following')
          .slice(0, 5)
          .map(user => {
            let name = _.get(user, 0);

            if (_.isEmpty(name)) {
              name = _.get(user, 'following');
            }
            return {
              name,
            };
          });
        if (users.length > 0) {
          users.forEach(user => {
            var query = {
              tag: user.name, // This tag is used to filter the results by a specific post tag
              limit: 1, // This limit allows us to limit the overall results returned to 5
            };

            steemAPI
              .sendAsync('get_discussions_by_blog', [query])
              .then(result  => {
                let { ulogStoriesObj } = this.state;
                ulogStoriesObj[result[0].author] = result[0].permlink;
                this.setState({
                  ulogStoriesObj,
                });
              })
              .then(() => {
                this.setState({
                  loading: false,
                  noUsers: false,
                });
              });
              
          });

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
    const displayLimit = 5;
    const { certifiedUloggers } = this.props;
    const { users } = this.state;
    const moreUsersStartIndex = users.length;
    const moreUsers = certifiedUloggers.sort()
      .slice(moreUsersStartIndex, moreUsersStartIndex + displayLimit);

    steemAPI.sendAsync('get_accounts', [moreUsers]).then(moreUsersResponse =>
      this.setState({
        users: users.concat(moreUsersResponse),
      }),
    );
  };

  render() {
    const { users, ulogStoriesObj, loading, noUsers, showModalLogin } = this.state;
    const { authenticated, location } = this.props;
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
          <button onClick={this.getCertifiedUloggers} className="InterestingPeople__button-refresh">
            <i className="iconfont icon-refresh" />
          </button>
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
          {Object.entries(ulogStoriesObj).map(story => 
            <UlogStory key={story[0]} story={{author: story[0], permlink: story[1]}} />
          )}
          <Button onClick={this.handleLoadMore} type="primary">
            View More
          </Button>
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
