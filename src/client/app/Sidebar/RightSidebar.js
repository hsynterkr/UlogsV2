import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {
  getIsAuthenticated,
  getAuthenticatedUser,
  getIsAuthFetching,
  getRecommendations,
  getFollowingList,
  getIsFetchingFollowingList,
} from '../../reducers';
import { checkWitnessVote } from '../../helpers/voteHelpers';
import { updateRecommendations } from '../../user/userActions';
import InterestingUloggersWithAPI from '../../components/Sidebar/InterestingUloggersWithAPI';
import OverseeingUloggers from '../../components/Sidebar/OverseeingUloggers';
import UlogStories from '../../components/Sidebar/UlogStories';
import SignUp from '../../components/Sidebar/SignUp';
import WitnessVote from '../../components/Sidebar/WitnessVote';
import PostRecommendation from '../../components/Sidebar/PostRecommendation';
import Loading from '../../components/Icon/Loading';
import UserActivitySearch from '../../activity/UserActivitySearch';
import WalletSidebar from '../../components/Sidebar/WalletSidebar';
import FeedSidebar from '../../components/Sidebar/FeedSidebar';
import ChatBar from '../../components/Sidebar/ChatBar';
import UlogGamesExchanges from '../../components/Sidebar/UlogGamesExchanges';

@withRouter
@connect(
  state => ({
    authenticated: getIsAuthenticated(state),
    authenticatedUser: getAuthenticatedUser(state),
    isAuthFetching: getIsAuthFetching(state),
    recommendations: getRecommendations(state),
    followingList: getFollowingList(state),
    isFetchingFollowingList: getIsFetchingFollowingList(state),
  }),
  {
    updateRecommendations,
  },
)
export default class RightSidebar extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    authenticatedUser: PropTypes.shape().isRequired,
    isAuthFetching: PropTypes.bool.isRequired,
    showPostRecommendation: PropTypes.bool,
    updateRecommendations: PropTypes.func,
    followingList: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFetchingFollowingList: PropTypes.bool.isRequired,
    match: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    showPostRecommendation: false,
    updateRecommendations: () => {},
  };

  handleInterestingPeopleRefresh = () => this.props.updateRecommendations();

  render() {
    const {
      authenticated,
      authenticatedUser,
      showPostRecommendation,
      isAuthFetching,
      followingList,
      isFetchingFollowingList,
      match,
    } = this.props;

    if (isAuthFetching) {
      return <Loading />;
    }

    /*eslint-disable */
    function checkVote() {
      if (authenticated === true) {
        return checkWitnessVote(authenticatedUser.witness_votes);
      } else if (authenticated === false) {
        return false;
      }
    }
    const isWitnessVoted = checkVote();
    const { category } = match.params;
    const displayUlogCaption =
      category &&
      category.match(
        /^(ulog-quotes|ulog-howto|ulog-diy|ulog-surpassinggoogle|teardrops|untalented|ulog-ned|ulography|ulog-gratefulvibes|ulog-resolutions|ulog-memes|ulog-blocktrades|ulog-showerthoughts|ulog-snookmademedoit|ulog-utopian|ulog-thejohalfiles|ulogifs|ulog-surfyogi|ulog-bobbylee|ulog-stellabelle|ulog-sweetsssj|ulog-dimimp|ulog-teamsteem|ulog-kusknee|ulog-papapepper|ulog-steemjet)$/,
      );

    return (
      <div>
        {!authenticated && <SignUp />}
        {displayUlogCaption &&
          !authenticated && <UlogGamesExchanges isFetchingFollowingList={false} />}
        {displayUlogCaption &&
          !authenticated && (
            <ChatBar isFetchingFollowingList={false} authenticated={authenticated} />
          )}
        <Switch>
          <Route path="/activity" component={UserActivitySearch} />
          <Route path="/@:name/activity" component={UserActivitySearch} />
          <Route path="/@:name/transfers" render={() => <WalletSidebar />} />
          <Route path="/trending/:tag" component={FeedSidebar} />
          <Route path="/created/:tag" component={FeedSidebar} />
          <Route path="/hot/:tag" component={FeedSidebar} />
          <Route path="/promoted/:tag" component={FeedSidebar} />
          <Route
            path="/@:name"
            render={() =>
              authenticated && (
                <InterestingUloggersWithAPI
                  authenticatedUser={authenticatedUser}
                  followingList={followingList}
                  isFetchingFollowingList={isFetchingFollowingList}
                />
              )
            }
          />
          <Route
            path="/"
            render={() => (
              <div>
                {authenticated && !showPostRecommendation ? (
                  <div>
                    <UlogStories
                      authenticatedUser={authenticatedUser}
                      followingList={followingList}
                      isFetchingFollowingList={isFetchingFollowingList}
                    />
                    <InterestingUloggersWithAPI
                      authenticatedUser={authenticatedUser}
                      followingList={followingList}
                      isFetchingFollowingList={isFetchingFollowingList}
                    />
                  </div>
                ) : (
                  <div>
                    <UlogStories
                      authenticatedUser={authenticatedUser}
                      followingList={followingList}
                      isFetchingFollowingList={isFetchingFollowingList}
                    />
                  </div>
                )}
                {authenticated && !isWitnessVoted ? <WitnessVote /> : ''}
              </div>
            )}
          />
        </Switch>
        {showPostRecommendation && <PostRecommendation isAuthFetching={isAuthFetching} />}
      </div>
    );
  }
}
