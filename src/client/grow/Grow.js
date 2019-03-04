import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Layout, Card, Icon, Avatar, Row, Col, Collapse, Menu, Dropdown, Button } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';
import LeftSidebar from '../app/Sidebar/LeftSidebar';
import Affix from '../components/Utils/Affix';
import Editor from '../components/Editor/Editor';

@injectIntl
class Ulogging extends React.Component {
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
      overflow: 'hidden',
      textAlign: 'center',
    };

    const customCardStyle = {
      marginBottom: 8,
      marginTop: 8,
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
            <h2 style={{ color: 'purple', textDecoration: 'underline', textAlign: 'center'}}>Grow</h2>
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

            <Card
              bordered={false}
              bodyStyle={customCardStyle}>
              <h3 style={{color: 'purple'}}>Let Us Help Fix Matters</h3>
            </Card>

            <Collapse
              defaultActiveKey={defaultActiveKey}
              activeKey={this.state.activeKey}
              onChange={this.callback}>
              <Collapse.Panel
                header="Go To The Main Ulog Editor"
                key="2"
                style={customPanelStyle}>
                <p>
                  You can write an <b>entire ulog</b> today, with the aim of <b>recounting your entire day</b> and all the activities in it. The <b>U</b> in <b>U</b>log stands for "You".<br/>
                  <i>Ulogging is for both public & private figures.</i><br/>
                  <b>A ulog</b> is a kind of content that is <b>freshly-created by "You"</b>, containing only experiences, events, feelings, moments, knowledge etc <b>drawn from a particular day.</b><br/>
                  <b>A ulog written today</b>, should not have existed anywhere online, yesterday; as <i>"each day and 'you' in it, carries its own freshness.</i><br/>
                  Our aim while ulogging is to <b>"mine the human into its awesomest version"</b>, while managing to <i>reshape the entire internet</i>. Thus, while ulogging, we aim to <b>gift the internet with our "freshly-made" content</b>, at least once a day, <b>instead of resourcing from the internet.</b><br/>
                  You can write an entire ulog right now. To do so, simply select our <b>"main ulog editor"</b> below.<br/><br/>
                </p>
                <Button>
                  <Link to="/main-editor">Main Ulog Editor</Link>
                </Button>
              </Collapse.Panel>
            </Collapse>

            <Card
              bordered={false}
              bodyStyle={customCardStyle}>
              <h3 style={{color: 'purple'}}>Do You Want To Ulog Under A Ulog-Subtag?</h3>
              <p>
                Ulogging under a ulogsubtag allows you to contribute ulogs to specific niches (per day). This further simplifies "the art of ulogging", while maintaining the power and essence of ulogging.<br/>
                Simply expand any of the tabs below, to select an appropriate specialized editor.<br/>
              </p>
            </Card>

            <Collapse
              defaultActiveKey={defaultActiveKey}
              activeKey={this.state.activeKey}
              onChange={this.callback}>
              <Collapse.Panel
                header="ULOG-Knowledge-Bank"
                key="3"
                style={customPanelStyle}>
                <p>
                  We like to reward #ulogging contributions born solely out of <i>"your experience"</i> per day. We seek to incentivize you to learn something new per day, for the sake of #ulogging. This way, <i>"not a day slips emptily by"</i> and not a day aren't you capable of reshaping the INTERNET; touching your <i>"true fans"</i> and attaining <i>"true celebrity-hood"</i> etc <br/>
                  Deposit to our Knowledge-bank by trying one of our #ulogging editors from the dropdown below. Withdraw knowledge by using the search box above. <br/>
                </p>
                <Dropdown overlay={knowledgeBankMenu} trigger={['click']}>
                  <Button>
                    Select An Editor <Icon type="down" />
                  </Button>
                </Dropdown>
              </Collapse.Panel>

              <Collapse.Panel
                header="ULOG-fanlove (BeLikeTerry)"
                key="4"
                style={customPanelStyle}>
                <p>
                  To become like me, you will need to stubbornly become the <i>"awesomest version of YOU"</i>. @surpassinggoogle <br/>
                  Choose an editor from the dropdown below to be <i>"true fans"</i> of a project, community, ULOGGER, steemian etc by using your #ulogging to emulate, show gratitude, learn about, write about, share moments with etc (per day for freshness). <br/>
                  e.g you can learn about Ned for the sake of <i>#ulogging under #ulog-ned</i> etc You will also be able to do likewise for projects, communities etc <br/>
                </p>
                <Dropdown overlay={fanLoveMenu} trigger={['click']}>
                  <Button>
                    Select An Editor <Icon type="down" />
                  </Button>
                </Dropdown>
              </Collapse.Panel>

              <Collapse.Panel
                header="SurpassingGoogle"
                key="5"
                style={customPanelStyle}>
                <p>
                  Note that ulogs.org integrates 4 websites into one. Thus, we are integrating all the paradigms from SurpassingGoogle, Teardrops, Un(dis)Talented into ulogs.org, so that instead of 4 standalone steem-based websites, we can have one grand website that "mines the human" into its awesomest version. <br/>
                  <i>When you see a great man/woman, a legend, an icon, a "true celebrity" etc you know it. You feel something. It is different. One reason is; "great men", "legends", "icons", "true celebrities" are still a rarity on Mama Earth. When we remove this rarity, we Surpass Google.</i> @surpassinggoogle <br/><br/>
                  Use this segment to "mine the human" some more. <br/>
                </p>
                <Dropdown overlay={surpassingGoogleMenu} trigger={['click']}>
                  <Button>
                    Select An Editor <Icon type="down" />
                  </Button>
                </Dropdown>
              </Collapse.Panel>
            </Collapse>

            <Card
              bordered={false}
              bodyStyle={customCardStyle}
              key="11">
              <h3 style={{color: 'purple'}}>Write A Post Related To #teardrops or #untalented?</h3>
              <p>
                Do you remember #teardrops or #untalented on Steemit? You can continue contributing "your content" under these hashtags by selecting the appropriate editor from the expandable area below.
              </p>
            </Card>

            <Collapse
              defaultActiveKey={defaultActiveKey}
              activeKey={this.state.activeKey}
              onChange={this.callback}>
              <Collapse.Panel
                header="Go To The #teardrops Editor"
                key="6"
                style={customPanelStyle}>
                <p>
                  Share your @teardrops moments. We reward "proof of  tears".<br/>
                  As you "mine the human" & en-route "breakthrough", there will be many tears, happy, sad or un-fell. "Each tear has value". We will celebrate <b>each tear</b> with a <b>"breakthrough token"</b> & <b>"emblem of human"</b> called the <b>"Teardrops Smart Media Tokens".</b> <br/>
                  Write a #teardrops post today. You may get some imaginary Teardrops SMT today, in the form of steem. Select the editor below to write a post now.<br/><br/>
                </p>
                <Button>
                  <Link to="/teardrops">Teardrops Editor</Link>
                </Button>
              </Collapse.Panel>

              <Collapse.Panel
                header="Go To The #untalented Editor"
                key="7"
                style={customPanelStyle}>
                <p>
                  We don't want any level of talent or potential talent to go amiss without celebrating it. We seek to reward  even <b>"attempts at out-of-the-boxness"</b>. <i>If we remove bum, smart or  average, "we are genius".</i><br/>
                  #untalented is a home (an important aspect of  ulogs.org) where <b>"flaws are allowed".</b> When you write under #untalented, <b>"relegate reservations".</b> We will sift even the non<b>sense</b> to find <b>sense</b> therein. <br/>
                  <i>Not too confident? Confident? Too confident?</i> Write under a post now under <b>"#untalented".</b> Select the editor below!<br/><br/>
                </p>
                <Button>
                  <Link to="/untalented">Untalented Editor</Link>
                </Button>
              </Collapse.Panel>
            </Collapse>

            <Card
              bordered={false}
              bodyStyle={customCardStyle}
              key="10">
              <h3 style={{color: 'purple'}}>Write A Post?</h3>
              <p>
                On Ulogs.org "your content" is queen. Whether it is a blog, ulog, or vlog, we want you to create fresh content daily. If you want to "write a post" (post to Steem) like you normally would, simply go to our general purpose editor below.
              </p>
            </Card>

            <Collapse
              defaultActiveKey={defaultActiveKey}
              activeKey={this.state.activeKey}
              onChange={this.callback}>
              <Collapse.Panel
                header="Go To The General-Purpose Editor"
                key="8"
                style={customPanelStyle}>
                <p>
                  <b>On ulogs.org, your freshly-made content is queen.</b> We want to incite you create content on a daily basis as that in itself is rewarding. Anytime you invest in creating "your own content" you have managed to "mine the human" some more. This is world adjusting!<br/>
                  <b>Ulogs.org allows you to explore and enjoy the entire steem ecosystem.</b> Thus, whether is it is a blog, ulog or vlog, we welcome your contributions and will look forward to celebrating <b>'the you'</b> in it; <b>we as your "true fans".</b><br/>
                  You can post to steem like you normally would (<b>e.g blogs etc</b>), using the <b>"General-Purpose" editor below.</b><br/><br/>
                </p>
                <Button>
                  <Link to="/editor">General Purpose Editor</Link>
                </Button>
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
};

export default Ulogging;
