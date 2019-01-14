import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { openTransfer, openPowerUpOrDown } from '../../wallet/walletActions';
import { getAuthenticatedUser } from '../../reducers';
import { STEEM, SBD } from '../../../common/constants/cryptos';
import Action from '../Button/Action';
import ClaimRewardsBlock from '../../wallet/ClaimRewardsBlock';
import CryptoTrendingCharts from './CryptoTrendingCharts';
import './WalletSidebar.less';

@withRouter
@connect(
  state => ({
    user: getAuthenticatedUser(state),
  }),
  {
    openTransfer,
    openPowerUpOrDown,
  },
)
class WalletSidebar extends React.Component {
  static propTypes = {
    user: PropTypes.shape(),
    isCurrentUser: PropTypes.bool,
    verified: PropTypes.bool,
    match: PropTypes.shape().isRequired,
    openTransfer: PropTypes.func.isRequired,
    openPowerUpOrDown: PropTypes.func.isRequired,
  };

  static defaultProps = {
    user: {},
    isCurrentUser: false,
    verified: false,
  };

handleOpenTransfer = () => {
    const { match, user, isCurrentUser } = this.props;
    const username = match.params.name === user.name || isCurrentUser ? '' : match.params.name;
    this.props.openTransfer(username);
  };
  handleVerifiedOpenTransfer = () =>{
      this.props.openTransfer(this.props.username);
  };

  handleOpenPowerUp = () => {
    this.props.openPowerUpOrDown();
  };

  handleOpenPowerDown = () => {
    this.props.openPowerUpOrDown(true);
  };

  render() {
    const { verified, match, user, isCurrentUser } = this.props;
    const displayClaimRewards = match.params.name === user.name || isCurrentUser;
    const ownProfile = match.params.name === user.name || isCurrentUser;
    const cryptos = [STEEM.symbol, SBD.symbol];
    if(verified === true){
        return (
          <div>
            <Action
              primary
              big
              style={{ width: '100%', marginBottom: '10px' }}
              onClick={this.handleVerifiedOpenTransfer}
            >
              <FormattedMessage id="Contact" defaultMessage="Contact" />
            </Action>
          </div>
        );
    } else {
        return (
          <div className="WalletSidebar">
            <Action big className="WalletSidebar__transfer" primary onClick={this.handleOpenTransfer}>
              <FormattedMessage id="transfer" defaultMessage="Transfer" />
            </Action>
            {ownProfile && (
              <div className="WalletSidebar__power">
                <Action big onClick={this.handleOpenPowerUp}>
                  <FormattedMessage id="power_up" defaultMessage="Power up" />
                </Action>
                <Action big onClick={this.handleOpenPowerDown}>
                  <FormattedMessage id="power_down" defaultMessage="Power down" />
                </Action>
              </div>
            )}
            <CryptoTrendingCharts cryptos={cryptos} />
            {ownProfile && <ClaimRewardsBlock />}
          </div>  
        );
      }
  }
}

export default WalletSidebar;

