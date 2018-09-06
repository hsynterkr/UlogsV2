import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import User from './User';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
class InterestingUloggersWithAPI extends React.Component {
  static propTypes = {
    authenticatedUser: PropTypes.shape({
      name: PropTypes.string,
    }),
    match: PropTypes.shape().isRequired,
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
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {
        const users = _.shuffle(result)
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
          this.setState({
            users,
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

  render() {
    const { users, loading, noUsers } = this.state;

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
          <FormattedMessage id="interesting_people" defaultMessage="Interesting Uloggers" />
          <button onClick={this.getCertifiedUloggers} className="InterestingPeople__button-refresh">
            <i className="iconfont icon-refresh" />
          </button>
        </h4>
        <div className="SidebarContentBlock__content">
          {users && users.map(user => <User key={user.name} user={user} />)}
          <h4 className="InterestingPeople__more">
            <Link to={'/discover'}>
              <FormattedMessage id="discover_more_people" defaultMessage="Discover More Uloggers" />
            </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default InterestingUloggersWithAPI;
