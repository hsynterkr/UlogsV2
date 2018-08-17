import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Carousel, Collapse } from 'antd';
import { getFeedContent } from './feedActions';
import { getIsLoaded, getIsAuthenticated } from '../reducers';
import SubFeed from './SubFeed';
import HeroBannerContainer from './HeroBannerContainer';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import RightSidebar from '../app/Sidebar/RightSidebar';
import TopicSelector from '../components/TopicSelector';
import TrendingTagsMenu from '../components/TrendingTagsMenu';
import Affix from '../components/Utils/Affix';
import ScrollToTop from '../components/Utils/ScrollToTop';
import ScrollToTopOnMount from '../components/Utils/ScrollToTopOnMount';
import QuickPostEditor from '../components/QuickPostEditor/QuickPostEditor';
import './Feed.less';

@connect(state => ({
  authenticated: getIsAuthenticated(state),
  loaded: getIsLoaded(state),
}))
class Page extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
  };

  static fetchData({ store, match }) {
    const { sortBy, category } = match.params;
    return store.dispatch(getFeedContent({ sortBy, category, limit: 10 }));
  }

  handleSortChange = key => {
    const { category } = this.props.match.params;
    if (category) {
      this.props.history.push(`/${key}/${category}`);
    } else {
      this.props.history.push(`/${key}`);
    }
  };

  handleTopicClose = () => this.props.history.push('/trending');

  render() {
    const { authenticated, loaded, location, match } = this.props;
    const { category, sortBy } = match.params;

    const shouldDisplaySelector = location.pathname !== '/' || (!authenticated && loaded);
    const displayTopicSelector = location.pathname === '/trending';
    const displayUlogQuotes = category === 'ulog-diy';
    const robots = location.pathname === '/' ? 'index,follow' : 'noindex,follow';
    
    return (
      <div>
        <Helmet>
          <title>Ulogs</title>
          <meta name="robots" content={robots} />
        </Helmet>
        <ScrollToTop />

        <ScrollToTopOnMount />
        { authenticated?
            <Carousel autoplay>
              <div> <a href="ulog/@uloggers/uloggers-today-s-certified-and-verified-ulogger-true-celebrity-is-jejes-join-in-as-her-true-fans-we-will-fix-many-worries"> <img width={'100%'} height={'100%'} alt="900x500" src="/images/slide1.jpg" /> </a> </div>
              <div> <a href="ulog/@uloggers/uloggers-today-s-certified-and-verified-ulogger-true-celebrity-is-enjieneer-join-in-as-her-true-fans-we-will-fix-many-worries"> <img width={'100%'}  height={'100%'} alt="900x500" src="/images/slide2.jpg" /> </a> </div>
              <div> <a href="ulog/@uloggers/uloggers-today-s-certified-and-verified-ulogger-true-celebrity-is-kneelyrac-join-in-as-her-true-fans-we-will-fix-many-worries"> <img width={'100%'}  height={'100%'} alt="900x500" src="/images/slide3.jpg" /> </a> </div>
              <div> <a href="ulog/@uloggers/uloggers-today-s-certified-and-verified-ulogger-true-celebrity-is-sn0white-join-in-as-her-true-fans-we-will-fix-many-worries"> <img width={'100%'}  height={'100%'} alt="900x500" src="/images/slide4.jpg" />  </a> </div>
            </Carousel>
                :
                <HeroBannerContainer />
              }
        <div className="shifted">
          <div className="feed-layout container">
            <Affix className="leftContainer" stickPosition={77}>
              <div className="left">
                <LeftSidebar />
              </div>
            </Affix>
            <Affix className="rightContainer" stickPosition={77}>
              <div className="right">
                <RightSidebar />
              </div>
            </Affix>
            <div className="center">
              {displayUlogQuotes &&
                <div className="ulog-quotes">
                  <Collapse defaultActiveKey={['1']} >
                    <Collapse.Panel header="About #ulog-diy" key="1">
                      <i>We like to reward #ulogging contributions born solely out of <span className="bold-italic">"your experience" (per day)</span>. We seek to incentivize you to learn something new <span className="bold-italic">(per day)</span>, for the sake of #ulogging. This way, <span className="bold-italic">"not a day slips emptily by" and not a day aren't you capable of reshaping the INTERNET; touching your "true fans" and attaining "true celebrity-hood" etc</span><br/><br/>
                      <i>It's simple. When you add #ulog to any existing concept etc an existing concept suddenly turns out all fresh. Simply use <a href="https://ulogs.org/ulog-diy">This Editor</a> to contribute to the Ulog-KnowledgeBank, <span className="bold-italic">freshly-made #ulog-DIY(s) born solely out of your experience (per day)</span>.<br/><br/>
                      <b>
                        Join the movement! Be "true fans" on <a href="https://ulogs.org/created/ulog-diy">#ulog-diy</a>! You can create <a href="https://ulogs.org/created/ulog-diy">#ulog-diy</a> right now by using <a href="https://ulogs.org/ulog-diy">This Editor</a>! Join us on <a href="https://discord.gg/qyY6hAQ">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
                        Verified/Certified @uloggers who oversea #ulog-diy currently:<br/>
                        <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}
                          <li><a href="https://v2.steemconnect.com/sign/follow?following=surpassinggoogle">@surpassinggoogle [Follow]</a></li>
                        </ul>
                      </b>
                    </Collapse.Panel>
                  </Collapse>
                </div>
              }
              {displayTopicSelector && <TrendingTagsMenu />}
              {shouldDisplaySelector && (
                <TopicSelector
                  isSingle={false}
                  sort={sortBy}
                  topics={category ? [category] : []}
                  onSortChange={this.handleSortChange}
                  onTopicClose={this.handleTopicClose}
                />
              )}
              {authenticated && <QuickPostEditor />}
              <SubFeed />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
