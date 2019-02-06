import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Modal } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import UlogGamesExchangesUser from './UlogGamesExchangesUser';
import UloggerTVThumbnailView from './UloggerTVThumbnailView';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

@withRouter
class UlogGamesExchanges extends React.Component {
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
      loading: true,
      noUsers: false,
      allUsers: [],
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
    this.handleUserAccountClick = this.handleUserAccountClick.bind(this);
    this.getUloggersTVVideaos = this.getUloggersTVVideaos.bind(this);
  }

  componentDidMount() {
    if (!this.props.isFetchingFollowingList) {
      this.getCertifiedUloggers();
      this.getUloggersTVVideaos();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isFetchingFollowingList) {
      this.getCertifiedUloggers();
      this.getUloggersTVVideaos();
    }
  }

  getCertifiedUloggers() {
    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 1000]])
      .then(result => {
        console.log('result', result);
        const users = _.shuffle(result)
          // .slice(0, 5)
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
            allUsers: result,
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

  async getUloggersTVVideaos() {
    const apiRequset = await fetch(
      'https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCzI3Rjamg7zSe_o0BwSeIQQ&maxResults=25&key=AIzaSyAr0UshcXLKk9e2IKMiNq7KzbzUa0jWVh0',
      {
        url: '',
        method: 'GET',
      },
    );
    const apiResponse = await apiRequset.json();
    console.log(apiResponse);
    this.setState({
      uloggersTvVideos: apiResponse,
    });
  }

  handleUserAccountClick(event, alertText) {
    console.log(this.state);
    event.preventDefault();
    Modal.info({
      content: (
        <div>
          <p>
            <ReactMarkdown source={alertText} />
          </p>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { users, loading, noUsers, uloggersTvVideos } = this.state;
    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <div className="SidebarContentBlock">
        <div>
          <h4 className="SidebarContentBlock__title">
            <FormattedMessage id="ulogs_games" defaultMessage="Ulogs-Games" />
          </h4>
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
          >
            {users &&
              users.map(user => (
                <UlogGamesExchangesUser
                  key={user.name}
                  user={user}
                  handleUserAccountClick={event => {
                    this.handleUserAccountClick(
                      event,
                      `This feature is coming soon. In the near term, this column will only display posts from 'certified uloggers' created under [#ulog-games](https://ulogs.org/created/ulog-games). In the long term, there will be an entire #ulog-games application playable by the entire globe. Click [here](https://ulogs.org/@surpassinggoogle/do-you-want-to-become-certified-uloggers-kindly-fill-up-this-form-if-you-are-already-a-certified-ulogger-there-is-a-separate) to get certified.`,
                    );
                  }}
                />
              ))}
          </div>
        </div>
        <div>
          <h4 className="SidebarContentBlock__title">
            <FormattedMessage id="uloggerstv" defaultMessage="UloggersTV" />
          </h4>
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
          >
            {uloggersTvVideos &&
              uloggersTvVideos.items.map(video => (
                <UloggerTVThumbnailView key={video.id.videoId} video={video} />
              ))}
          </div>
        </div>
        <div>
          <h4 className="SidebarContentBlock__title">
            <FormattedMessage id="buy_sell_steem" defaultMessage="Buy/Sell Steem" />
          </h4>
          <div
            className="SidebarContentBlock__content"
            style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
          >
            {users &&
              users.map(user => (
                <UlogGamesExchangesUser
                  key={user.name}
                  user={user}
                  handleUserAccountClick={event => {
                    this.handleUserAccountClick(
                      event,
                      `This feature is coming soon. In the near term, this column will only display posts from 'certified uloggers' created under [#ulog-exchanges](https://ulogs.org/created/ulog-exchanges). Click [here](https://ulogs.org/@surpassinggoogle/do-you-want-to-become-certified-uloggers-kindly-fill-up-this-form-if-you-are-already-a-certified-ulogger-there-is-a-separate) to get certified.`,
                    );
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(UlogGamesExchanges);
