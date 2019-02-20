import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Input, Modal, Collapse } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import _ from 'lodash';
import ChatUser from './ChatUser';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';
import { getIsAuthenticated } from '../../reducers';

@withRouter
class ChatBar extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    isFetchingFollowingList: PropTypes.bool.isRequired,
    intl: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    authenticatedUser: {
      name: '',
    },
  };

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
      noUsers: false,
      allUsers: [],
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
    this.handleSearchForInput = this.handleSearchForInput.bind(this);
    this.handleUserAccountClick = this.handleUserAccountClick.bind(this);
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

  getCertifiedUloggers() {
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 1000]])
      .then(result => {
        const users = _.shuffle(result)
          // .slice(0, 5)
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
          this.setState({
            users,
            allUsers: result,
            loading: false,
            noUsers: false,
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

  handleUserAccountClick(event) {
    const { authenticated } = this.props;
    event.preventDefault();
    Modal.info({
      content: (
        <div>
          {authenticated ? (
            <p>This DM feature is coming soon</p>
          ) : (
            <p>This features requires login, else sign-up</p>
          )}
        </div>
      ),
      onOk() {},
    });
  }

  handleSearchForInput(event) {
    const value = event.target.value;
    const users = this.state.allUsers
      .map(user => {
        let name = _.get(user, 0);
        if (_.isEmpty(name)) {
          name = _.get(user, 'following');
        }
        return {
          name,
        };
      })
      .filter(user => (value ? user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 : true));
    this.setState({ users });
  }

  render() {
    const { users, loading, noUsers } = this.state;
    const { intl } = this.props;
    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel
          header={<FormattedMessage id="direct_messaging" defaultMessage="Direct Messaging" />}
          key="1"
        >
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowY: 'auto', height: '300px', paddingLeft: 0 }}
          >
            {users &&
              users.map(user => (
                <ChatUser
                  key={user.name}
                  user={user}
                  handleUserAccountClick={this.handleUserAccountClick}
                />
              ))}
          </div>
          <div className="Search_input">
            <Input
              ref={ref => {
                this.searchInputRef = ref;
              }}
              onChange={this.handleSearchForInput}
              placeholder={intl.formatMessage({
                id: 'search_in_uloggers',
                defaultMessage: 'Search in uloggers',
              })}
              autoCapitalize="off"
              autoCorrect="off"
            />{' '}
            <i className="iconfont icon-search" />
          </div>
        </Collapse.Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(injectIntl(ChatBar));
