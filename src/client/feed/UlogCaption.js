import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Card, Icon, Avatar, Row, Col, Collapse, Menu, Dropdown, Button } from 'antd';
import { injectIntl, FormattedMessage } from 'react-intl';

@injectIntl
class UlogCaption extends React.Component {
  static propTypes = {
    intl: PropTypes.shape().isRequired,
    category: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {

    const ulogQuotesCaption = (
      <span>
        <i>"We have all created quotes. We tend to quote others; we can quote ourselves too; we can have others quote us. We can have the world quote us. Let's have the world quote us!"</i> <b>@surpassinggoogle</b><br/><br/>
        <i>"Let's become reasons for the world to find glow. Let's be that light and let's move inside the tunnel. Let's bring that very light closer and inside, to the masses who seek the "end of the tunnel".</i> <b>@surpassinggoogle</b><br/><br/>
        <b>
          Join the movement! Be "true fans" on <a href="https://ulogs.org/created/ulog-quotes">#ulog-quotes</a>! You can create <a href="https://ulogs.org/created/ulog-quotes">#ulog-quotes</a> right now by using <a href="https://ulogs.org/ulog-quotes">This Editor</a>! Join us on <a href="https://discord.gg/QFaFj87">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee #ulog-quotes currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=samic">@samic [Follow]</a></li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=surpassinggoogle">@surpassinggoogle [Follow]</a></li>
          </ul>
        </b>
      </span>
    );

    const ulogHowtoCaption = (
      <span>
        We like to reward #ulogging contributions born solely out of <b><i>"your experience" (per day)</i></b>. We seek to incentivize you to learn something new (per day), for the sake of #ulogging.<br/>
        It's simple. <b><i>When you add <a href="https://ulogs.org/created/ulog">#ulog</a> to any existing concept etc an existing concept suddenly turns out all fresh.</i></b><br/><br/>
        Simply use <a href="https://ulogs.org/ulog-howto">This Editor</a> to contribute to the Ulog-KnowledgeBank, freshly-made <a href="https://ulogs.org/created/ulog-howto">#ulog-HOWTO</a>(s) born solely out of <b><i>your experience (per day)</i></b>.<br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-howto">#ulog-howto</a> daily! Join its community on <a href="https://discord.gg/EkynDXt">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee #ulog-howto currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>Coming Soon!!!</li>
          </ul>
        </b>
      </span>
    );

    const ulogDiyCaption = (
      <span>
        We like to reward #ulogging contributions born solely out of <b><i>"your experience" (per day)</i></b>. We seek to incentivize you to learn something new (per day), for the sake of #ulogging.<br/>
        It's simple. <b><i>When you add <a href="https://ulogs.org/created/ulog">#ulog</a> to any existing concept etc an existing concept suddenly turns out all fresh.</i></b><br/><br/>
        Simply use <a href="https://ulogs.org/ulog-diy">This Editor</a> to contribute to the Ulog-KnowledgeBank, freshly-made <a href="https://ulogs.org/created/ulog-diy">#ulog-DIY</a>(s) born solely out of <b><i>your experience (per day)</i></b>.<br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-diy">#ulog-diy</a> daily! Join its community on <a href="https://discord.gg/qyY6hAQ">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-diy">#ulog-diy</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const ulogSurpassinggoogleCaption = (
      <span>
        <span className="bold-italic">@surpassinggoogle</span> is just <span className="bold-italic">"your boy Terry"</span> and mere dust overall. His entire tired being, "even that", loves you like crazy.
        He breaks down and he doesnt mind, so that <span className="bold-italic">"suffering must now have essence"</span> and especially, so that generations yet unborn meet <span className="bold-italic">"lights" inside every tunnel.</span>
        <br/> He is SurpassingGoogle by means of the Teardrops SMTs, which seeks to reward <span className="bold-italic">"proof of tears".</span> He is helping to bring forth the <span className="bold-italic">art of #ulogging,</span> an entire curriculum that <span className="bold-italic">mines the human "into its awesomest version".</span> <br/>
        Simply use <a href="https://ulogs.org/ulog-surpassinggoogle">This Editor</a> to "love him like crazy; to emulate him; to learn about him, to be "true fans" of him, to share memories with him etc (per day)<br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-surpassinggoogle">#ulog-surpassinggoogle</a> daily! Join its community on <a href="https://discord.gg/2qTW6XV">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-surpassinggoogle">#ulog-surpassinggoogle</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const teardropsCaption = (
      <span>
        <span className="bold-italic">Share your @teardrops moments, happy, sad, unfell etc.</span> We seek to reward <span className="bold-italic">"proof of tears".</span> As you <span className="bold-italic">"mine the human"</span> en-route <span className="bold-italic">"breakthrough"</span>, there will be many tears, happy, sad or unfell. <span className="bold-italic">"Each tear has value".</span>
        <br/> We will celebrate each tear with a "breakthrough token" and "emblem of human" called the "Teardrops Smart Media Tokens". <br/>    
        <span className="bold-italic">Write a #teardrops post today.</span> Simply use <span className="bold-italic"><a href="https://ulogs.org/teardrops">This Editor.</a></span> You may get some imaginary Teardrops SMT today in the form of steem.<br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/teardrops">#teardrops</a> daily! Join its community on <a href="https://discord.gg/DsqaqNr">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/teardrops">#teardrops</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    ); 

    const untalentedCaption = (
      <span>
        <span className="bold-italic">We don't want any level of talent or potential talent to go amiss without celebrating it. We seek to reward even "attempts at out-of-the-boxness". If we remove bum, smart or average, "we are genius". </span>
        <br/> #untalented is a home (an important aspect of ulogs.org) where "flaws are allowed". When you write under <a href="https://ulogs.org/created/untalented">#untalented</a>, "relegate reservations". We will sift even the nonsense to find sense therein. <br/>    
        <span className="bold-italic">Not too confident? Confident? Too confident? Write under <a href="https://ulogs.org/created/untalented">#untalented</a>.</span> Simply use <span className="bold-italic"><a href="https://ulogs.org/untalented">This Editor.</a></span> <br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/untalented">#untalented</a> daily! Join its community on <a href="https://discord.gg/jsENq3b">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/untalented">#untalented</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const ulogNedCaption = (
      <span>
        Ned Scott is the CEO of Steemit and someone worthy of constant <span className="bold-italic">THANKS</span> or perhaps <span className="bold-italic">emulation</span>. <br/>
        He sustains the steem blockchain; he is birthing <span className="bold-italic">Smart Media Tokens</span>; he is creating <span className="bold-italic">"beautiful disruptions"</span> by putting <span className="bold-italic">"everyone"</span> in the equation. <br/>
        <span className="bold-italic">ULOGS.org:</span> He won't request <span className="bold-italic">"true fans"</span> but we say; <span className="bold-italic">"True Celebrity-hood for "everyone" once and for all".</span> <br/>    
        Simply use <span className="bold-italic"><a href="https://ulogs.org/ulog-ned">This Editor</a></span> to "give back"; to emulate him; to learn about him, to be "true fans" of him, to share memories with him; to reach out to him etc (per day) <br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-ned">#ulog-ned</a> daily! Join its community on <a href="https://discord.gg/Up8eMGa">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-ned">#ulog-ned</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const ulographyCaption = (
      <span>
        <b>Ulography</b>: This is the Ulog-generated hashtag for (Ulog + Photography). <br/>
        <a href="https://ulogs.org/created/ulography">#ulography</a> allows you to contribute (& curate) <b>photographs created by "YOU" (per day)</b> and it is already birthing a <a href="https://discord.gg/mWVYjxc">growing community of "true fans"</a>. <br/>
        It's simple! When you add <a href="https://ulogs.org/created/ulog">#ulog</a> to any existing concept etc an existing concept suddenly turns out all fresh. (A major essence of the <a href="https://ulogs.org/created/ulog">#ulog</a> movement is to gift to the internet, instead of resource from it, in a bid to reshape it.) <br/>
        To create a Ulog under "<a href="https://ulogs.org/created/ulography">#ulography</a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a>  then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog">#ulog</a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulography">#ulography</a>" as your 2nd hashtag. You can then add other hashtags e.g your "#location" etc. Don't forget to add "(Ulog + Photography)" or "ULOG (Photography)" somewhere IN-TITLE. <br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulography">#ulography</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/mWVYjxc">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulography">#ulography</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=sunnylife">@sunnylife [Follow]</a></li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=surpassinggoogle">@surpassinggoogle [Follow]</a></li>
          </ul>
        </b>
      </span>
    );

    const ulogGratefulvibesCaption = (
      <span>
        <a href="https://ulogs.org/created/ulog-gratefulvibes"><b>#ulog-gratefulvibes</b></a>: the <b>Ulog-subtag for (Ulog + GratefulVibes)</b>. <br/>
        It allows you to ulog about <b>your gratefulness (per day)</b>, also as a means to <b>"gift to the internet"</b>, by <b>not resourcing from it</b>; thus, reshaping it. <br/> We want to serve the search engines with <b>"grateful pieces of YOU" (per day)</b> and <b>each day, "You" in it</b>, carries its own <b>gratefulness</b>. <br/>
        It's simple! When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to any "existing concept" etc "an existing concept suddenly turns out all fresh". <b>Let's use the art of <a href="https://ulogs.org/created/ulogging">#ulogging</a>, to pay forward a GratefulVibe today!</b> <br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-gratefulvibes"><b>#ulog-gratefulvibes</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-gratefulvibes"><b>#ulog-gratefulvibes</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "<a href="https://ulogs.org/created/gratefulvibes"><b>#gratefulvibes</b></a>" etc. Don't forget to <b>add "(Ulog + GratefulVibes):" or "ULOG (GratefulVibes):" somewhere IN-TITLE</b>. <br/><br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-gratefulvibes"><b>#ulog-gratefulvibes</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/fpthaj2"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-gratefulvibes">#ulog-gratefulvibes</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=sunnylife">@sunnylife [Follow]</a>[Contact: <a href="https://discord.gg/fpthaj2"><b>Discord</b></a>] </li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=paradise-found">@paradise-found [Follow]</a>[Contact: <a href="https://discord.gg/qtkdbSc"><b>Discord</b></a>]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=paradise-found">@bloghound [Follow]</a>[Contact: <a href="https://discord.gg/fpthaj2"><b>Discord</b></a>]</li>
          </ul>
        </b>
      </span>
    );

    const ulogResolutionsCaption = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"Dreams are buildable but aren't that buildable in a day". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-resolutions"><b>#ulog-resolutions</b></a>: is the Ulog-subtag for <b>(Ulog + Resolutions)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to <b>any existing concept</b> etc <b>an existing concept suddenly turns out all fresh</b>. <br/>
        Yes, <b>ulogging</b> can be as fun and simple as telling us about <b>your resolutions</b>. Basically, <b><i>not a day should pass by without your Ulogacies in it</i></b>. Share <b>your resolutions (per day)</b> with us and the world and <b><i>tell us when you meet it or fail to meet it</i></b>. <br/><br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-resolutions"><b>#ulog-resolutions</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-resolutions"><b>#ulog-resolutions</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Resolutions):" somewhere IN-TITLE</b> e.g: <br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Resolutions): Today, I Resolve To Climb 2 Banana Trees...[TAGS: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>, etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Resolutions): I Didn't End Up Climbing Because I Ate 2 Bananas...[TAGS: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>, etc.]</b></font></li>
          </ul> 
          <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-resolutions"><b>#ulog-resolutions</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/ZBUDV66"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const customPanelStyle = {
      marginBottom: 5,
      overflow: 'hidden',
    };

    const category = this.props.category;
    let caption = [];
    if (category === 'ulog-quotes') {
      caption = ulogQuotesCaption;
    } else if (category === 'ulog-howto') {
      caption = ulogHowtoCaption;
    } else if (category === 'ulog-diy') {
      caption = ulogDiyCaption;
    } else if (category === 'ulog-surpassinggoogle') {
      caption = ulogSurpassinggoogleCaption;
    } else if (category === 'teardrops') {
      caption = teardropsCaption;
    } else if (category === 'untalented') {
      caption = untalentedCaption;
    } else if (category === 'ulog-ned') {
      caption = ulogNedCaption;
    } else if (category === 'ulography') {
      caption = ulographyCaption;
    } else if (category === 'ulog-gratefulvibes') {
      caption = ulogGratefulvibesCaption;
    } else if (category === 'ulog-resolutions') {
      caption = ulogResolutionsCaption;  
    }
    const about = `About #${category}`;

    return (
      <div className="ulog-quotes">
        <Collapse defaultActiveKey={['1']} >
          <Collapse.Panel header={about} key="1">
            {caption}
          </Collapse.Panel>
        </Collapse>
      </div>
    );
  }
};

export default UlogCaption;