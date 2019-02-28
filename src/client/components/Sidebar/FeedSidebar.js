import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  getIsAuthenticated,
  getRecommendations,
  getAuthenticatedUser,
} from '../../reducers';
import { getCryptoDetails } from '../../helpers/cryptosHelper';
import { updateRecommendations } from '../../user/userActions';
import OverseeingUloggers from './OverseeingUloggers';
import CryptoTrendingCharts from './CryptoTrendingCharts';
import ChatBar from '../../components/Sidebar/ChatBar';
import UlogGamesExchanges from '../../components/Sidebar/UlogGamesExchanges';
import UlogCaption from '../../feed/UlogCaption';
import VideoExample from './VideoExample';

@connect(
  state => ({
    authenticated: getIsAuthenticated(state),
    authenticatedUser: getAuthenticatedUser(state),
    recommendations: getRecommendations(state),
  }),
  { updateRecommendations },
)
class FeedSidebar extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    authenticatedUser: PropTypes.shape().isRequired,
    recommendations: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })).isRequired,
    updateRecommendations: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
  };

  constructor(props) {
    super(props);
    this.handleInterestingPeopleRefresh = this.handleInterestingPeopleRefresh.bind(this);
  }

  handleInterestingPeopleRefresh() {
    this.props.updateRecommendations();
  }

  render() {
    const { authenticated, authenticatedUser, recommendations, match } = this.props;
    const isAuthenticated = authenticated && recommendations.length > 0;
    const currentTag = _.get(this.props, 'match.params.tag', '');
    const currentCrypto = getCryptoDetails(currentTag);
    const { tag } = match.params;
    const displayUlogCaption =
      tag &&
      tag.match(
        /^(ulog-quotes|ulog-howto|ulog-diy|ulog-surpassinggoogle|teardrops|untalented|ulog-ned|ulography|ulog-gratefulvibes|ulog-resolutions|ulog-memes|ulog-blocktrades|ulog-showerthoughts|ulog-snookmademedoit|ulog-utopian|ulog-thejohalfiles|ulogifs|ulog-surfyogi|ulog-bobbylee|ulog-stellabelle|ulog-sweetsssj|ulog-dimimp|ulog-teamsteem|ulog-kusknee|ulog-papapepper|ulog-steemjet)$/,
      );
    return (
      <div>
        {!_.isEmpty(currentCrypto) && <CryptoTrendingCharts cryptos={[currentTag]} />}
        {isAuthenticated && (
          <React.Fragment>
            {displayUlogCaption && <UlogCaption category={tag} />}
            <VideoExample />
            <UlogGamesExchanges isFetchingFollowingList={false} />
            <ChatBar isFetchingFollowingList={false} authenticated={authenticated} />
            <OverseeingUloggers
              authenticatedUser={authenticatedUser}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default FeedSidebar;
