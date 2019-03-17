import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  Layout,
  Card,
  Icon,
  Avatar,
  Row,
  Col,
  Collapse,
  Menu,
  Dropdown,
  Button,
  List
} from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import Affix from '../components/Utils/Affix';
import Editor from '../components/Editor/Editor';
import GrowVideoEmbed from './GrowVideoEmbed';

@injectIntl
class Grow extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  state = {
    activeKey: [],
  }

  constructor(props) {
    super(props);

    let defaultActiveKey = [];
    const location = this.props.location.pathname.split('/')[1];
    if (location === 'art-of-ulogging') {
      defaultActiveKey = ['1'];
    } else if (location === 'main-editor') {
      defaultActiveKey = ['2'];
    } else if (location === 'ulog-knowledge-bank') {
      defaultActiveKey = ['3'];
    } else if (location === 'ulog-fanlove') {
      defaultActiveKey = ['4'];
    } else if (location === 'surpassinggoogle') {
      defaultActiveKey = ['5'];
    } else if (location === 'teardrops-editor') {
      defaultActiveKey = ['6'];
    } else if (location === 'untalented-editor') {
      defaultActiveKey = ['7'];
    } else if (location === 'general-editor') {
      defaultActiveKey = ['8'];
    } else {
      defaultActiveKey = ['0'];
    }
    this.state = { activeKey: defaultActiveKey };
  }

  callback = (key) => {
    this.setState({ activeKey: key });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const location = this.props.location.pathname.split('/')[1];
      if (location === 'art-of-ulogging') {
        this.setState({ activeKey : ['1']});
      } else if (location === 'main-editor') {
        this.setState({ activeKey : ['2']});
      } else if (location === 'ulog-knowledge-bank') {
        this.setState({ activeKey : ['3']});
      } else if (location === 'ulog-fanlove') {
        this.setState({ activeKey : ['4']});
      } else if (location === 'surpassinggoogle') {
        this.setState({ activeKey : ['5']});
      } else if (location === 'teardrops-editor') {
        this.setState({ activeKey : ['6']});
      } else if (location === 'untalented-editor') {
        this.setState({ activeKey : ['7']});
      } else if (location === 'general-editor') {
        this.setState({ activeKey : ['8']});
      } else {
        this.setState({ activeKey : ['0']});
      }
    }
  }

  render() {

    const menu = (
      <Menu>
        <Menu.Item key="1">
          <Link to={'/ulogging/#art-of-ulogging'}>The art of ULOGGING</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={'/ulogging/#main-editor'}>Go To The Main Ulog Editor</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={'/ulogging#knowledge-bank'}>ULOG-KnowledgeBank</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to={'/ulogging#surpassing-google'}>SurpassingGoogle</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to={'/ulogging#be-like-terry'}>BeLikeTerry (Fan Love)</Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to={'/ulogging#teardrops-editor'}>Go To The #teardrops Editor</Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link to={'/ulogging#untalented-editor'}>Go To The #untalented Editor</Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link to={'/ulogging#general-editor'}>Go To Our General-Purpose Editor</Link>
        </Menu.Item>
      </Menu>
    );

    const knowledgeBankMenu = (
      <Menu>
        <Menu.Item key="0">
          <Link to={'/ulog-diy'}>#ulog-diy (Fresh DIY per day)</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={'/ulog-howto'}>#ulog-howto</Link>
        </Menu.Item>
      </Menu>
    );

    const fanLoveMenu = (
      <Menu>
        <Menu.Item key="0">
          <Link to={'/ulog-ned'}>#ulog-ned (Emulate, Learn, Gratitude, Celebrate etc @ned)</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={'/ulog-surpassinggoogle'}>#ulog-surpassinggoogle (Emulate, Learn, Gratitude, Celebrate etc @surpassinggoogle)</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={'/ulog-quotes'}>#ulog-quotes</Link>
        </Menu.Item>
      </Menu>
    );

    const surpassingGoogleMenu = (
      <Menu>
        <Menu.Item key="0">
          <Link to={'/teardrops'}>#teardrops (Share your teardrops moments, happy/sad/un-fell etc)</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to={'/untalented'}>#untalented (Share all levels of talent/attempts/out-of-the-boxness)</Link>
        </Menu.Item>
      </Menu>
    );

    const customPanelStyle = {
      marginBottom: 5,
      overflow: 'hidden'
    };

    const customCardStyle = {
      marginBottom: '3px',
      marginTop: '3px',
      border: '2px solid purple',
      color: 'purple',
      borderRadius: '5px',
    };

    const location = this.props.location.pathname.split('/')[1];
    let defaultActiveKey = [];
    if (location === 'art-of-ulogging') {
      defaultActiveKey = ['1'];
    } else if (location === 'main-editor') {
      defaultActiveKey = ['2'];
    } else if (location === 'ulog-knowledge-bank') {
      defaultActiveKey = ['3'];
    } else if (location === 'ulog-fanlove') {
      defaultActiveKey = ['4'];
    } else if (location === 'surpassinggoogle') {
      defaultActiveKey = ['5'];
    } else if (location === 'teardrops-editor') {
      defaultActiveKey = ['6'];
    } else if (location === 'untalented-editor') {
      defaultActiveKey = ['7'];
    } else if (location === 'general-editor') {
      defaultActiveKey = ['8'];
    } else {
      defaultActiveKey = ['0'];
    }

    return (
      <div className="shifted">
        <div className="container">
          <div className="center" style={{marginBottom: '50px'}}>
            <h2 style={{ color: 'purple', textAlign: 'center'}}>GROW</h2>
            <Collapse
              defaultActiveKey={['1']}>
              <Collapse.Panel
                header="About GROW"
                key="1"
                style={customPanelStyle}>
                <p>
                  On Ulogs.org, it is "true celebrity-hood for everyone, once and for all". We measure our success in terms of 'real human growth'. We want to create more value for 'humans' in a world were cryptokitties, superman, millionaire-cats, human-clones etc is beginning to garner more value than 'humans'.<br/>
                  Thus, we will incessantly seek innovative ways of inciting each ulogger to 'mine the human' into its awesomest version. In the future, we will seek to celebrate a world filled with 'true celebrities', using the TearDrops SMT, 'a breakthrough token & emblem of human' that will reward 'proof of tears', for en-route attaining the awesomest version of human, there will be many tears, happy, sad or un-fell.<br/>
                  We seek to remove 'all barriers to entry' from 'everything good', so that every(any)one can shine. The world needs more shine! @surpassinggoogle
                </p>
              </Collapse.Panel>
            </Collapse>

            <Collapse
              defaultActiveKey={['1']}>
              <Collapse.Panel showArrow={false} header="Let Us Help Fix Matters" key="1">

                <List
                  itemLayout="vertical"
                  size="large"
                >
                    <List.Item
                      key='Submit A Video To One Of Our TV(s)'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Submit A Video To One Of Our TV(s)</h3>
                      <div>
                      Across the ulogs.org ecosystem, we have 3 TV(s) i.e UloggersTV, UntalentedTV and TeardropsTV. We seek to use the media to impact the world and you can help matters. We welcome your contributions. We will feature your contribution on a corresponding TV. In the future, your contributions may feature in our Uloggers Game App. <br/><br/> While we only feature 'certified uloggers' on our TV(s), if you are not yet a 'certified ulogger' and you submit a video, we will also look to feature your video and once we do so, you will become a 'certified ulogger'.
                      </div>
                    </List.Item>


                    <List.Item
                      key='Write To Ulogs.org'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <div>
                      The ulogs.org ecosystem also has an un(dis)talented paradigm. Thus, when you visit this space, relegate reservations and write to us freely. Whatever your dream is, we believe that in a world of 'uloggers' (true celebrities) every noble dream is build-able. 
                      <br/>
                      Tell us what you want and let's discuss. Don't undervalue the power of 'conversation', for at any moment, it can pop out something. Tell us of your forgotten dreams, let's resuscitate it. Do you need inspiration, assistance, mentoring, direction etc? Then, write to us! We are building an ecosystem of 'true celebrities', where everyone is your 'true fan'. At the very least, 'you are the celebrity; we are your fan'.
                      </div>
                    </List.Item>

                </List>
              </Collapse.Panel>
            </Collapse>

            <Card
              size="small"
              bordered={false}
              bodyStyle={customCardStyle}>
              <span style={{color: 'purple'}}>Let Us Help Fix Matters</span>
            </Card>


          </div>
        </div>
      </div>
    );
  }
};

export default Grow;
