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