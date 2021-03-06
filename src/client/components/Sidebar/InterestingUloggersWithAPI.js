import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Collapse } from 'antd';
import _ from 'lodash';
import User from './User';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
class InterestingUloggersWithAPI extends React.Component {
  static propTypes = {
    isFetchingFollowingList: PropTypes.bool.isRequired,
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
      userNames: [],
      loading: true,
      noUsers: false,
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
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
      .sendAsync('call', ['condenser_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {
        const userNames = _.sortBy(result, 'following')
          .map(user => {
            let name = _.get(user, 0);

            if (_.isEmpty(name)) {
              name = _.get(user, 'following');
            }
            return {
              name,
            };
          });
        if (userNames.length > 0) {
          this.setState({
            userNames,
          });
        } else {
          this.setState({
            noUsers: true,
          });
        }
      })
      .then(() => {
        const uloggers = this.state.userNames.map(user => {
            return user.name;
          });
        steemAPI.sendAsync('get_accounts', [uloggers]).then(users =>
          this.setState({
            users,
            loading: false,
            noUsers: false,
          })
        );
     })
     .catch(() => {
        this.setState({
          noUsers: true,
        });
      });
  }

  render() {
    const { users, loading, noUsers } = this.state;

    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <Collapse defaultActiveKey={['1']}>
        <Collapse.Panel
          header={
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
              <FormattedMessage id="interesting_uloggers" defaultMessage="Interesting Uloggers" />
              <button
                onClick={this.getCertifiedUloggers}
                className="InterestingPeople__button-refresh"
              >
                <i
                  className="iconfont icon-refresh"
                  style={{
                    marginRight: 15,
                  }}
                />
              </button>
            </div>
          }
          key="1"
        >
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowY: 'auto', height: '300px', paddingLeft: 0 }}
          >
            {users && users.map(user => <User key={user.name} user={user} />)}
            <h4 className="InterestingPeople__more">
              <Link to={'/discover'}>
                <FormattedMessage
                  id="discover_more_people"
                  defaultMessage="Discover More Uloggers"
                />
              </Link>
            </h4>
          </div>
        </Collapse.Panel>
      </Collapse>
    );
  }
}

export default InterestingUloggersWithAPI;
