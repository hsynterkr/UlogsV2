import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Input, Icon } from 'antd';
import {
  getIsAuthenticated,
  getAuthenticatedUser,
  getIsAuthFetching,
  getRecommendations,
  getFollowingList,
  getIsFetchingFollowingList,
} from '../../reducers';
import Loading from '../../components/Icon/Loading';
import Avatar from '../../components/Avatar';
import Chat from '../../components/Sidebar/Chat';

const { Search } = Input;

@withRouter
@connect(
  state => ({
    authenticated: getIsAuthenticated(state),
    authenticatedUser: getAuthenticatedUser(state),
    isAuthFetching: getIsAuthFetching(state),
    recommendations: getRecommendations(state),
    followingList: getFollowingList(state),
    isFetchingFollowingList: getIsFetchingFollowingList(state),
  }),{})

export default class ChatBar extends React.PureComponent {
  static propTypes = {
    isAuthFetching: PropTypes.bool.isRequired,
    followingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  getChatList(max) {
    const users = _.shuffle(this.props.followingList)
      .slice(0, max);
    return users;
  }

  render() {
    const { isAuthFetching } = this.props;

    if (isAuthFetching) {
      return <Loading />;
    }

    return (
      <div className='chatbar' style={{ float: 'right', width: '95%', backgroundColor: '#fff', 
                    position: 'absolute', marginLeft: '107%', borderColor: '#e9e7e7',
                    borderWidth: 1, borderStyle: 'solid', borderRadius: 4, height: '98.75%', paddingTop: 5
                }}>
        <span style={{ fontWeight: 'bold', paddingLeft: 5 }} >Ulog-Games</span>
        <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', msOverflowX: 'auto' }} >
          { this.getChatList(5).map(username => (
              <div style={{ display: 'inline-block', margin: 5 }} >
                <Avatar username={username} size={48} />
              </div>
            )
          ) }
        </div>
        <span style={{ fontWeight: 'bold', paddingLeft: 5 }} >UloggersTV</span>
        <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', msOverflowX: 'auto' }} >
          { this.getChatList(5).map(username => (
              <div style={{ display: 'inline-block', margin: 5 }} >
                <Avatar username={username} size={48} />
              </div>
            )
          ) }
        </div>
        <span style={{ fontWeight: 'bold', paddingLeft: 5 }} >Buy/Sell Steem</span>
        <div style={{ whiteSpace: 'nowrap', overflowX: 'auto', msOverflowX: 'auto' }} >
          { this.getChatList(5).map(username => (
              <div style={{ display: 'inline-block', margin: 5 }} >
                <Avatar username={username} size={48} />
              </div>
            )
          ) }
        </div>
        <br/>
        <span style={{ fontWeight: 'bold',  paddingLeft: 5 }} >Direct Messaging</span>
        <br/>
        <div style={{ padding: 20, overflow: 'scroll', maxHeight: 445 }} >
          { this.getChatList(10).map(username => {
            const user = { name: username }
              return (
                <Chat user={user} />
              )
            }) }
        </div>
        <Search
          placeholder="Search in uloggers..."
          onSearch={value => console.log(value)}
          style={{ width: '100%' }}
        />
      </div>
    );
  }
}
