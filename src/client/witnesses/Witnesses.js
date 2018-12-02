import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { injectIntl, FormattedMessage } from 'react-intl';
import {
  getIsAuthenticated,
  getAuthenticatedUser,
  getIsAuthFetching,
  getFollowingList,
  getIsFetchingFollowingList,
} from '../reducers';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import DiscoverUloggers from './DiscoverWitnesses';
import Affix from '../components/Utils/Affix';
import './Witnesses.less';

@injectIntl
@connect(
  state => ({
    authenticated: getIsAuthenticated(state),
    authenticatedUser: getAuthenticatedUser(state),
    isAuthFetching: getIsAuthFetching(state),
    followingList: getFollowingList(state),
    isFetchingFollowingList: getIsFetchingFollowingList(state),
  })
)
class Witnesses extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    authenticated: PropTypes.bool.isRequired,
    authenticatedUser: PropTypes.shape().isRequired,
    isAuthFetching: PropTypes.bool.isRequired,
    followingList: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFetchingFollowingList: PropTypes.bool.isRequired,
  };

  render() {
    const {
      intl,
      authenticated,
      authenticatedUser,
      isAuthFetching,
      followingList,
      isFetchingFollowingList,
    } = this.props;

    return (
      <div className="shifted">
        <Helmet>
          <title>
            {intl.formatMessage({ id: 'discover_more_people', defaultMessage: 'discover_more_people' })}{' '}
            - Ulogs
          </title>
        </Helmet>
        <div className="feed-layout container">
          <Affix className="leftContainer" stickPosition={77}>
            <div className="left">
              <LeftSidebar />
            </div>
          </Affix>
          <div className="Discover">
            <div className="Discover__title">
              <h1>
                <FormattedMessage id="vote_ulog_witnesses" defaultMessage="Vote On Your Ulog-Witnesses" />
              </h1>
              <FormattedMessage
                id="vote_ulog_witnesses_description"
                defaultMessage="Ulog-Witnesses are also 'Certified Uloggers'. On ulogs.org, we want to celebrate these witnesses, drawing in 'true fans' their way. You can vote for as many as 30 witnesses. This page will constantly populate with more of these ulog-witnesses over the course of time. Visit regularly to support these ones."
              />
            </div>
            <div className="Discover__content">
              <DiscoverUloggers
                authenticatedUser={authenticatedUser}
                followingList={followingList}
                isFetchingFollowingList={isFetchingFollowingList}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Witnesses;
