import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
/* import {
  getPostContent,
  getIsPostEdited,
  getIsPostFetching,
  getIsPostLoaded,
  getIsPostFailed,
  getUser,
  getIsAuthFetching,
} from '../../reducers'; */
// import { getContent } from '../../post/postActions';
// import { getAccount } from '../../user/usersActions';
import Story from './Story';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import ModalEditor from '../ModalEditor/ModalEditor';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
/* @connect(
  (state, ownProps) => ({
    edited: getIsPostEdited(state, ownProps.match.params.permlink),
    content: getPostContent(state, ownProps.match.params.author, ownProps.match.params.permlink),
    isAuthFetching: getIsAuthFetching(state),
    fetching: getIsPostFetching(
      state,
      ownProps.match.params.author,
      ownProps.match.params.permlink,
    ),
    loaded: getIsPostLoaded(state, ownProps.match.params.author, ownProps.match.params.permlink),
    failed: getIsPostFailed(state, ownProps.match.params.author, ownProps.match.params.permlink),
    user: getUser(state, ownProps.match.params.author),
  }),
  { getContent, getAccount },
) */
class UlogStories extends React.Component {
  static propTypes = {
    authenticatedUser: PropTypes.shape({
      name: PropTypes.string,
    }),
    // match: PropTypes.shape().isRequired,
    isFetchingFollowingList: PropTypes.bool.isRequired,
    isAuthFetching: PropTypes.bool.isRequired,
    user: PropTypes.shape(),
    /* edited: PropTypes.bool,
    content: PropTypes.shape(),
    fetching: PropTypes.bool,
    loaded: PropTypes.bool,
    failed: PropTypes.bool,
    getContent: PropTypes.func,
    getAccount: PropTypes.func, */
  };

  static defaultProps = {
    authenticatedUser: {
      name: '',
    },
    user: {},
    /* edited: false,
    content: undefined,
    fetching: false,
    loaded: false,
    failed: false,
    getContent: () => {},
    getAccount: () => {}, */
  };

  /* static fetchData({ store, match }) {
    const { author, permlink } = match.params;
    return Promise.all([
      store.dispatch(getAccount(author)),
      store.dispatch(getContent(author, permlink)),
    ]);
  } */

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      noUsers: false,
      showModal: false,
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
  }

  componentDidMount() {
    this.isMount = true;
    if (!this.props.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }

    /* const { match, edited, fetching, loaded, failed, content } = this.props;
    const { author, permlink } = match.params;

    const shouldUpdate = (!loaded && !failed) || edited;
    if (shouldUpdate && !fetching) {
      this.props.getContent(author, permlink);
      this.props.getAccount(author);
    }

    if (!!content && match.params.category && typeof window !== 'undefined') {
      window.history.replaceState(
        {},
        '',
        `/@${content.author}/${content.permlink}${window.location.hash}`,
      );
    } */
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetchingFollowingList) {
      this.getCertifiedUloggers();
    }

    /* const { author, permlink } = nextProps.match.params;
    const { author: prevAuthor, permlink: prevPermlink } = this.props.match.params;

    const shouldUpdate = author !== prevAuthor || permlink !== prevPermlink;
    if (shouldUpdate && !nextProps.fetching) {
      this.setState({ commentsVisible: false }, () => {
        this.props.getContent(author, permlink);
        this.props.getAccount(author);
      });
    } */
  }

  componentWillUnmount() {
    this.isMount = false;
  }


  getCertifiedUloggers() {
    // const stories = [];
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {
        /* result.forEach(user => {
          steemAPI.sendAsync('call', ['follow_api', 'get_blog', [_.get(user, 0), 500000, 1]])
            .then(res => {
              stories.push(res.blog[0]);
            })
        })

        stories.sort((a,b) => b.created - a.created); */
        const users = _.shuffle(result)
          .slice(0, 3)
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
          if (this.isMount) {
            this.setState({
              users,
              loading: false,
              noUsers: false,
            });
          }
        } else if (this.isMount) {
          this.setState({
            noUsers: true,
          });
        }
      })
      .catch(() => {
        if (this.isMount) {
          this.setState({
            noUsers: true,
          });
        }
      });
  }

  handleClickAdd = e => {
    e.preventDefault();
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = e => {
    e.preventDefault();
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { users, loading, noUsers } = this.state;

    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    // users.includes(this.props.authenticateduser.name);
    const cert = users.includes(this.props.authenticatedUser.name);

    return (
      <div>
        <ModalEditor show={this.state.showModal} closeModal={this.handleCloseModal} certified={cert}/>
        <div className="SidebarContentBlock">
          <h4 className="SidebarContentBlock__title">
            <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
            <FormattedMessage id="ulog_stories" defaultMessage="Ulog Stories" />
            <button onClick={this.getCertifiedUloggers} className="InterestingPeople__button-refresh">
              <i className="iconfont icon-refresh" />
            </button>
          </h4>
          <div className="SidebarContentBlock__content" style={{ textAlign: 'center' }} >
          <Button type="primary" shape="circle" icon="plus-circle" size={'large'} style={{ float: 'left' }} onClick={this.handleClickAdd}/>

            <div style={{ fontWeight: 'bold', paddingTop: 10 }}>Add A Ulog-Story</div>
            <br/>
            <div style={{ textAlign: 'left', padding: 3 }}>
              Share images, ulography, graphics, ulog-news, ulog-arts plain text etc freshly-created by you, today.
            </div>
            {users && users.map(user => <Story key={user.name} user={user} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default UlogStories;
