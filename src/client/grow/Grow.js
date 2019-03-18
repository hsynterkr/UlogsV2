import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import {
  message,
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
import * as growSections from '../helpers/growSections';

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
    this.displayComingSoon = this.displayComingSoon.bind(this);
  }

  callback = (key) => {
    this.setState({ activeKey: key });
  }

  displayComingSoon = () => {
    message.success('Coming soon!', 3);
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
      marginBottom: '10px',
      marginTop: '10px',
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
                  <ReactMarkdown source={growSections.aboutGrow} />
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
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.submitAVideo} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
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
                      <h3>Write To Ulogs.org</h3>
                      <div style={customCardStyle}>
                      <ReactMarkdown source={growSections.writeToUlogs} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='15 Mins Session With Your Favorite Mentor'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>15 Mins Session With Your Favorite Mentor</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.fifteenMinuteMentor} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='Apply To Give A 30 Mins Symposium About Your Project On A Popular Steem Community'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Apply To Give A 30 Mins Symposium About Your Project On A Popular Steem Community</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.thirtyMinuteSymposium} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='How About Extra Clout On Steem Or Outside Steem'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>How About Extra Clout On Steem Or Outside Steem</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.extraClout} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='Do You Need Extra Confidence To Make A Life-Changing Move?'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Do You Need Extra Confidence To Make A Life-Changing Move?</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.extraConfidence} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='Are You Dealing With Hard-To-Explain Ailment e.g Depression?'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Are You Dealing With Hard-To-Explain Ailment e.g Depression?</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.hardToExplainAilment} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='Send Us A Letter, Gift Or Mail'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Send Us A Letter, Gift Or Mail</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.sendUsSomething} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                    <List.Item
                      key='Inspire Us'
                      extra={<GrowVideoEmbed key="embed"
                        embed={{
                          provider_name: 'YouTube',
                          thumbnail: 'https://steemitimages.com/360x203/https://img.youtube.com/vi/kKZ1CixLG2s/0.jpg',
                          embed: '<iframe width="270" height="158" src="https://www.youtube.com/embed/kKZ1CixLG2s?autoplay=1&amp;autohide=1&amp;enablejsapi=0&amp;rel=0&amp;origin=https://steemit.com" frameborder="0" allowfullscreen=""></iframe>',
                        }}
                      />}
                    >
                      <h3>Inspire Us</h3>
                      <div style={customCardStyle}>
                        <ReactMarkdown source={growSections.inspireUs} />
                      </div>
                      <Button type="primary" onClick={this.displayComingSoon}>Click Here</Button>
                    </List.Item>

                </List>
              </Collapse.Panel>
            </Collapse>

          </div>
        </div>
      </div>
    );
  }
};

export default Grow;
