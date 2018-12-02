import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import DiscoverWitness from './DiscoverWitness';
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
            witnesses: users,
            loading: true,
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
        const uloggers = this.state.witnesses.map(user => {
            return user.name;
          });
        console.log(uloggers);
          
        steemAPI.sendAsync('get_accounts', [uloggers]).then(users => {
          console.log(users);
          
          this.setState({
            witnesses: users,
          })
        })
        .then(() => {
          let witnesses = [];
          this.state.witnesses.map(user => {
            console.log(user);
            
            steemAPI.sendAsync('get_witness_by_account', [user.name]).then(info => {
              if(info) {
                console.log(user);
                
                witnesses.push(user)
                this.setState({
                  users: witnesses,
                  loading: false
                })
              }
              
            })
            .catch(error => {
              console.log(error);
              
            });
         });
        })       
     })
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
        {users.map(user => <DiscoverWitness key={user.name} user={user} />)}
      </div>
    );
  }
}

export default DiscoverUloggers;
