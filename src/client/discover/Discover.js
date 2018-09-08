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
import DiscoverUloggers from './DiscoverUloggers';
import Affix from '../components/Utils/Affix';
import './Discover.less';

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
class Discover extends React.Component {
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
            - Busy
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
                <FormattedMessage id="discover_more_people" defaultMessage="Discover more people" />
              </h1>
              <FormattedMessage
                id="discover_more_people_info"
                defaultMessage="Discover the most reputable users of this platform"
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

export default Discover;
