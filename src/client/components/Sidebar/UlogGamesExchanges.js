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
      allUsers: [],
      ulogGames: [],
      ulogExchanges: [],
    };

    this.getUlogGamesAndExchanges = this.getUlogGamesAndExchanges.bind(this);
    this.getUloggersTVVideaos = this.getUloggersTVVideaos.bind(this);
  }

  componentDidMount() {
    if (!this.props.isFetchingFollowingList) {
      this.getUlogGamesAndExchanges();
      this.getUloggersTVVideaos();
    }
  }

  getUlogGamesAndExchanges() {
    this.setState({ ulogGames: [], ulogExchanges: [] });

    steemAPI
      .sendAsync('call', ['follow_api', 'get_following', ['uloggers', '', 'blog', 100]])
      .then(result => {

        // get certified ulogger names
        const certifiedUloggerNames = _.sortBy(result, 'following')
          .map(user => {
            let name = _.get(user, 0);

            if (_.isEmpty(name)) {
              name = _.get(user, 'following');
            }
            return name;
          });
        
        // if there are certified uloggers
        if (certifiedUloggerNames.length > 0) {
          // get the latest posts from each certified ulogger
          certifiedUloggerNames.forEach(userName => {
            var query = {
              tag: userName, // Filter the results by a specific post author
              limit: 5, // Limit the number of posts returned
            };
            this.setState({
              loading: true,
            });

            // call STEEM API to get the latest posts from certified ulogger
            steemAPI
              .sendAsync('call', ['condenser_api', 'get_discussions_by_blog', [query]])
              .then(result  => {
                const posts = Array.isArray(result) ? result : [];
                this.setState({
                  loading: false,
                });

                posts.forEach(post => {
                  // filter-out posts from non-certified users
                  if(certifiedUloggerNames.indexOf(post.author) < 0) return;
  
                  // filter posts that have been created more than 7 days ago
                  const today = new Date();
                  const sevenDaysAgo = new Date();
                  sevenDaysAgo.setDate(today.getDate() - 7);
                  const created = new Date(post.created);
                  if(created < sevenDaysAgo) return;
  
                  // filter posts that do not contain #ulog-games or #ulog-exchanges tags
                  const tags = JSON.parse(post.json_metadata).tags;
                  if (tags.indexOf("ulog-games") < 0 && tags.indexOf("ulog-exchanges") < 0) return;
  
                  // create story object from post
                  const story = { 
                    author: post.author, 
                    permlink: post.permlink, 
                    created: post.created
                  }
  
                  // push story to appropriate array
                  if (tags.indexOf("ulog-games") >= 0) {
                    let { ulogGames } = this.state;
                    ulogGames.push(story);
                    this.setState({ ulogGames });
  
                  } else if (tags.indexOf("ulog-exchanges") >= 0) {
                    let { ulogExchanges } = this.state;
                    ulogExchanges.push(story);
                    this.setState({ ulogExchanges });
                  }
  
                })

              });

          });

        }
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
    const { loading, ulogGames, ulogExchanges, uloggersTvVideos } = this.state;
    const { authenticated } = this.props;

    if (loading) {
      return <Loading />;
    }

    return (
      <Collapse accordion defaultActiveKey={['1']}>
        <Collapse.Panel
          header="..."
          key="1"
        >
          <React.Fragment>
            <div>
              <h4 className="SidebarContentBlock__title">
                <FormattedMessage id="ulogs_games" defaultMessage="Ulogs-Games" />
              </h4>
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
                {ulogGames.length === 0 && <div>No Ulog games to display.</div>}
                {ulogGames.map(story => 
                  <UlogGamesExchangesUser
                    key={story.permlink}
                    story={{ author: story.author, permlink: story.permlink }}
                    authenticated={authenticated}
                  />
                )}
              </div>
              <h4 className="SidebarContentBlock__title">
                <FormattedMessage id="uloggerstv" defaultMessage="UloggersTV" />
              </h4>
              <div
                id="ulogsVideoContainer"
                className="SidebarContentBlock__content"
                style={{
                  textAlign: 'center',
                  overflowX: 'auto',
                  width: '260px',
                  display: 'flex',
                }}
              >
                {uloggersTvVideos &&
                  uloggersTvVideos.items.map(video => (
                    <UloggerTVThumbnailView key={video.id.videoId} video={video} />
                  ))}
              </div>
            </div>
            <h4 className="SidebarContentBlock__title">
              <FormattedMessage id="ulogs_exchanges" defaultMessage="Ulogs-Exchanges" />
            </h4>
            <div
              id="ulogsExchangesContainer"
              className="SidebarContentBlock__content"
              style={{
                textAlign: 'center',
                overflowX: 'auto',
                width: '260px',
                display: 'flex',
                paddingLeft: 25,
              }}
            >
              {ulogExchanges.length === 0 && <div>No Ulog exchanges to display.</div>}
              {ulogExchanges.map(story => 
                <UlogGamesExchangesUser
                  key={story.permlink}
                  story={{ author: story.author, permlink: story.permlink }}
                  authenticated={authenticated}
                />
              )}
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
