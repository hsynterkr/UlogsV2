import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash';
import DiscoverUser from './DiscoverUser';
import Loading from '../components/Icon/Loading';
import steemAPI from '../steemAPI';

@withRouter
class DiscoverUloggers extends React.Component {
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
        const users = _.sortBy(result, 'following')
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
      })
     .then(() => {
        const uloggers = this.state.users.map(user => {
            return user.name;
          });
        steemAPI.sendAsync('get_accounts', [uloggers]).then(users =>
          this.setState({
            users,
          }),
        );
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
      <div>
        {users.map(user => <DiscoverUser key={user.name} user={user} />)}
      </div>
    );
  }
}

export default DiscoverUloggers;
