import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Modal, Collapse } from 'antd';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import _ from 'lodash';
import UlogGamesExchangesUser from './UlogGamesExchangesUser';
import UloggerTVThumbnailView from './UloggerTVThumbnailView';
import Loading from '../../components/Icon/Loading';
import steemAPI from '../../steemAPI';
import './InterestingPeople.less';
import './SidebarContentBlock.less';
import { getIsAuthenticated } from '../../reducers';

const easeInOutQuad = (t, b, c, d) => {
  let updatedT = t;
  updatedT /= d / 2;
  if (updatedT < 1) return c / 2 * updatedT * updatedT + b;
  updatedT -= 1;
  return -c / 2 * (updatedT * (updatedT - 2) - 1) + b;
};

const handleUserAccountClick = (event, alertText) => {
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
};

const scrollToRight = (to, duration, id) => {
  const start = document.getElementById(id).scrollLeft;
  const change = to - start;
  let currentTime = 0;
  const increment = 20;
  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    document.getElementById(id).scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };
  animateScroll();
};

const moveRightDiv = id => {
  const start = document.getElementById(id).scrollLeft;
  scrollToRight(start + 100, 200, id);
};

const moveLeftDiv = id => {
  const start = document.getElementById(id).scrollLeft;
  scrollToRight(start - 100, 200, id);
};
@withRouter
class UlogGamesExchanges extends React.Component {
  static propTypes = {
    isFetchingFollowingList: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
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
      showUlogsGames: true,
    };

    this.getCertifiedUloggers = this.getCertifiedUloggers.bind(this);
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
    this.setState({
      uloggersTvVideos: apiResponse,
    });
  }

  render() {
    const { users, loading, noUsers, uloggersTvVideos } = this.state;
    const { authenticated } = this.props;
    if (noUsers) {
      return <div />;
    }

    if (loading) {
      return <Loading />;
    }

    return (
      <Collapse accordion>
        <Collapse.Panel
          header={<FormattedMessage id="ulogs_games" defaultMessage="Ulogs-Games" />}
          key="1"
        >
          <React.Fragment>
            <div>
              <div
                id="ulogsGameContainer"
                className="SidebarContentBlock__content"
                style={{
                  textAlign: 'center',
                  overflowX: 'auto',
                  width: '260px',
                  display: 'flex',
                  paddingLeft: 25,
                }}
              >
                <i
                  role="presentation"
                  className="iconfont icon-back-top left-icon"
                  onClick={() => moveLeftDiv('ulogsGameContainer')}
                />
                {users &&
                  users.map(user => (
                    <UlogGamesExchangesUser
                      key={user.name}
                      user={user}
                      handleUserAccountClick={event => {
                        handleUserAccountClick(
                          event,
                          `This feature is coming soon. In the near term, this column will only display posts from 'certified uloggers' created under [#ulog-games](https://ulogs.org/created/ulog-games). In the long term, there will be an entire #ulog-games application playable by the entire globe. Click [here](https://ulogs.org/@surpassinggoogle/do-you-want-to-become-certified-uloggers-kindly-fill-up-this-form-if-you-are-already-a-certified-ulogger-there-is-a-separate) to get certified.`,
                        );
                      }}
                      authenticated={authenticated}
                    />
                  ))}
                <i
                  className="iconfont icon-back-top right-icon"
                  role="presentation"
                  onClick={() => moveRightDiv('ulogsGameContainer')}
                />
              </div>
              <h4 className="SidebarContentBlock__title">
                <FormattedMessage id="uloggerstv" defaultMessage="UloggersTV" />
              </h4>
              <div
                id="ulogsVideoContainer"
                className="SidebarContentBlock__content"
                style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
              >
                <i
                  className="iconfont icon-back-top left-icon"
                  role="presentation"
                  onClick={() => moveLeftDiv('ulogsVideoContainer')}
                />
                {uloggersTvVideos &&
                  uloggersTvVideos.items.map(video => (
                    <UloggerTVThumbnailView key={video.id.videoId} video={video} />
                  ))}
                <i
                  className="iconfont icon-back-top right-icon"
                  role="presentation"
                  onClick={() => moveRightDiv('ulogsVideoContainer')}
                />
              </div>
            </div>
            <h4 className="SidebarContentBlock__title">
              <FormattedMessage id="ulogs_games" defaultMessage="Ulogs-Games" />
            </h4>
            <div
              id="ulogsExchangesContainer"
              className="SidebarContentBlock__content"
              style={{ textAlign: 'center', overflowX: 'auto', width: '260px', display: 'flex' }}
            >
              <i
                className="iconfont icon-back-top left-icon"
                role="presentation"
                onClick={() => moveLeftDiv('ulogsExchangesContainer')}
              />
              {users &&
                users.map(user => (
                  <UlogGamesExchangesUser
                    key={user.name}
                    user={user}
                    handleUserAccountClick={event => {
                      handleUserAccountClick(
                        event,
                        `This feature is coming soon. In the near term, this column will only display posts from 'certified uloggers' created under [#ulog-exchanges](https://ulogs.org/created/ulog-exchanges). Click [here](https://ulogs.org/@surpassinggoogle/do-you-want-to-become-certified-uloggers-kindly-fill-up-this-form-if-you-are-already-a-certified-ulogger-there-is-a-separate) to get certified.`,
                      );
                    }}
                    authenticated={authenticated}
                  />
                ))}
              <i
                className="iconfont icon-back-top right-icon"
                role="presentation"
                onClick={() => moveRightDiv('ulogsExchangesContainer')}
              />
            </div>
          </React.Fragment>
        </Collapse.Panel>
      </Collapse>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: getIsAuthenticated(state),
});
export default connect(mapStateToProps)(injectIntl(UlogGamesExchanges));
