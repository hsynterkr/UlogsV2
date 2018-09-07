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
            <li><a href="https://v2.steemconnect.com/sign/follow?following=sunnylife">@sunnylife [Follow]</a>[Contact: <a href="https://discord.gg/fpthaj2"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=paradise-found">@paradise-found [Follow]</a>[Contact: <a href="https://discord.gg/qtkdbSc"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=paradise-found">@bloghound [Follow]</a>[Contact: <a href="https://discord.gg/fpthaj2"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
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
            <li><font size="2"><b>(Ulog + Resolutions): Today, I Resolve To Climb 2 Banana Trees...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>, etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Resolutions): I Didn't End Up Climbing Because I Ate 2 Bananas...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-resolutions">#ulog-resolutions</a>, etc.]</b></font></li>
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

    const ulogMemesCaption = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"Memes plus your Ulogacies become SuperMemes". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a>: is the Ulog-subtag for <b>(Ulog + Memes)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to <b>any existing concept</b> etc <b>an existing concept suddenly turns out all fresh</b>. <br/>
        Yes, <b>ulogging</b> can be as fun and simple as creating your very own <a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a> (per day). With your <a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a>, <b><i>not a day passes by without your Ulogacies in it</i></b>. <br/>
        <b>In the art of ulogging</b>, we want to <b><i>"mine the human"</i></b>. We also want to <b><i>"gift to the internet"</i></b> instead of <b><i>"resource from it"</i></b> at least once a day, in a bid to <b>reshape the very internet</b>. So, be inventive, <b>"YOU"</b>, "true celebrity" etc by creating your <a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a>, solely out of your <b>"freshly-created" images, graphics and text (per day)</b>.<br/><br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Memes):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Memes): A Fly Cannot Bird...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-memes">#ulog-memes</a>, etc.]</b></font></li>
          </ul> 
          <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-memes"><b>#ulog-memes</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/UAYS7Yp"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-memes">#ulog-memes</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=samic">@samic [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/UAYS7Yp"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
          </ul>
        </b>
      </span>
    );

    const ulogBlocktradesCaption = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>If we can gift out "true celebrity-hood" as "true fans", then we gift it to "everyone". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a>: is the Ulog-subtag for <b>(Ulog + Blocktrades.us)</b>. Basically, <a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a> incites you to record your experience etc (per day) with <a href="https://ulogs.org/@blocktrades"><b>@blocktrades</b></a>. <br/>
        <font size="2">Blocktrades has offered a service of crytocurrency exchange, convenience and has delivered in terms of "trust" etc. Besides all of this, they have supported <b>"dreams" on the steem blockchain</b>, by means of donations, curation and actual community; <b>"true fan-hood"</b>. The blocktrades team and even its CEO is approachable, reachable and prompt.</font> <br/>
        <font size="2">By ulogging under <a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a>, you can give back, emulate their enterprise, be "true fan", reach out, share experiences, give feedback, give suggestions etc. Yes, on <a href="https://ulogs.org"><b>ulogs.org</b></a> you can be <b>"true fans" of enterprises, communities, initiatives etc</b> and in this case, you can be <b>"true fans"</b> of <a href="https://blocktrades.us"><b>blocktrades.us</b></a></font> <br/> <font size="2"><a href="https://ulogs.org/@blocktrades"><b>@blocktrades</b></a> may not ask for a <b>"give-back"</b> but with <a href="https://ulogs.org"><b>ulogs.org</b></a>, it is <b>"true celebrity-hood for 'everyone', once and for all".</b></font> <br/><br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a>" as your 2nd hashtag. You can then add other hashtags e.g <a href="https://ulogs.org/created/blocktrades">#blocktrades</a> etc. Don't forget to <b>add "(Ulog + Blocktrades):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Blocktrades.us): How Blocktrades Refunded Me...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a>, <a href="https://ulogs.org/created/blocktrades">#blocktrades</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Blocktrades.us): Thank You Blocktrades For Blocks Of Upvotes...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a>, <a href="https://ulogs.org/created/blocktrades">#blocktrades</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Blocktrades.us): How Blocktrades Expand Base In My Location...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a>, <a href="https://ulogs.org/created/blocktrades">#blocktrades</a> etc.]</b></font></li>
          </ul> 
          <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-blocktrades"><b>#ulog-blocktrades</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/xXgMYpS"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-blocktrades">#ulog-blocktrades</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=ankarlie">@ankarlie [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/xXgMYpS"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li>etc.</li>
          </ul>
        </b>
      </span>
    );

    const ulogShowerthoughtsCaption = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>Showerthoughts can be anything but try "evolving" each time. @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-showerthoughts"><b>#ulog-showerthoughts</b></a>: is the Ulog-subtag for <b>(Ulog + Showerthoughts)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to any <b>existing concept</b> etc an <b>existing concept suddenly turns out all fresh</b>. <br/>
        We can turn even our showerthoughts into a more conscious, directional, fun, testimonial, self-developing, world-adjusting, historical "endeavor" by ulogging about these (per day). <br/>
        Yes, <b>ulogging</b> can be as fun and simple as creating your very own #ulog-showerthoughts (per day). With your <a href="https://ulogs.org/created/ulog-showerthoughts"><b>#ulog-showerthoughts</b></a>, <b><i>not a day passes by without your Ulogacies in it</i></b>. <br/>
        <div style={{ color : 'purple' }}>
          <b><i>Each time you showerthink and ulog about it, you "mine the human" attaining "true celebrityhood". @surpassinggoogle</i></b> <br/>
        </div>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-showerthoughts"><b>#ulog-showerthoughts</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-showerthoughts"><b>#ulog-showerthoughts</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Showerthoughts):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Showerthoughts): What If A Fly Could Bird...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a>, etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Showerthoughts): Let Me Build My Own Country...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a>, etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Showerthoughts): My Plan To Make Ned Try Ulogging...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a>, etc.]</b></font></li>
          </ul> 
          <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-showerthoughts"><b>#ulog-showerthoughts</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/JTm4BSg"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-showerthoughts">#ulog-showerthoughts</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=mermaidvampire">@mermaidvampire [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/JTm4BSg"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li>etc.</li>
          </ul>
        </b>
      </span>
    );

    const ulogSnookmademedoitCaption = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"Made" can also tell of hearty persistence, love and care. It is strong thing. @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a>: is the Ulog-subtag for <b>(Ulog + SnookMadeMeDoIt)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to any <b>existing concept</b> etc an <b>existing concept suddenly turns out all fresh</b>. <br/>
        Yes, <b>ulogging</b> can be as fun and simple as creating your very own <a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a> Ulogs (per day). This way, <b><i>not a day passes by without your Ulogacies in it</i></b>. <br/>
        <a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a> will bear forth an entire fun community of Uloggers. Yes, you can ulog about things <a href="https://ulogs.org/@snook"><b>"@snook</b></a> <b>made you do"</b> but in the large scheme of things, it is a means or incentive to celebrate <b>people, steemians, uloggers etc who were able to stand you up, even from the rubble, to make you go out of your way and do something testimonial.</b> <br/>
        <div style={{ color : 'purple' }}>
          <font size="2">So e.g, <a href="https://ulogs.org/@shadowspub"><b>"@shadowspub</b></a> geared me up to visit her <a href="https://ulogs.org/@shadowspub/pimp-your-post-thursday-today-aug-23rd-11am-edt-and-7-00pm-edt"><b>"PimpYourPost</b></a> show; <a href="https://ulogs.org/@derangedvisions"><b>"@derangedvisions</b></a> persistently helped me kick the <b>"De"</b> from my 'depression'; <a href="https://ulogs.org/@ecoinstant"><b>"@ecoinstant</b></a> made me <b>'climb my first Banana tree'</b>; <a href="https://ulogs.org/@helpie"><b>"@helpie</b></a> helped me help a helper; <a href="https://ulogs.org/@dynamicgreentk"><b>"@dynamicgreentk</b></a> made me sing offkey; <a href="https://ulogs.org/@dynamicrypto"><b>"@dynamicrypto</b></a> helped me re-find love for gardening; <a href="https://ulogs.org/@quochuy"><b>"@quochuy</b></a> made me dump the guitar; <a href="https://ulogs.org/@dynamicshine"><b>"@dynamicshine</b></a> made me recover shine again etc.</font> <br/>
        </div>
        Well, you can also ulog about <b>non-steemians</b> who <b>"made you do something"</b>. Then, share the resulting Ulogs with them. They may sign up on <a href="https://ulogs.org"><b>"ulogs.org</b></a> to ulog about how you <b>"made them do it"</b>. <br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + SnookMadeMeDoIt):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + SnookMadeMeDoIt): @baasteemit Got Me To Say My First "baa"...<u>TAGS-Order:</u> <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-snookmademedoit">#ulog-snookmademedoit</a>, etc.]</b></font></li>
          </ul>
        </div>   
        <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-snookmademedoit"><b>#ulog-snookmademedoit</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/wTmMt8W"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-snookmademedoit">#ulog-snookmademedoit</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=snook">@snook [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/wTmMt8W"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=shadowspub">@shadowspub [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/wTmMt8W"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
            <li>etc.</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogUtopian = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>When you incentivize people to build their noble dreams, it is world-adjusting. @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-utopian"><b>#ulog-utopian</b></a>: is the Ulog-subtag for <b>(Ulog + Utopian.io)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to any <b>existing concept</b> etc an <b>existing concept suddenly turns out all fresh</b>. <br/>
        <div style={{ color : 'purple' }}>
        <font size="2">Utopian has created an open source economy that rewards both contributors to open source projects as well as project owners. <br/> Utopian simply incentivizes the <b>art of dream-building.</b> While it looks like a tech-empire; in the broad scheme of things, <b>it brings light right inside tunnels, by empowering "anyone" to build a dream.</b> No longer do people have to wait to get to the <b>"end of the tunnel"</b>. This world-adjusting.</font> <br/>
        <font size="2">Besides all of this, they have supported <b>"dreams" on the steem blockchain</b>, by means of donations, curation and actual community; <b>"true fan-hood"</b>. The <a href="https://utopian.io"><b>Utopian.io</b></a> team and even its CEO (@elear) is approachable, reachable and prompt.</font> <br/>
        <font size="2">By ulogging under <a href="https://ulogs.org/created/ulog-utopian"><b>#ulog-utopian</b></a>, you can give back, emulate their enterprise, be "true fan", reach out, share experiences, give feedback, give suggestions etc. Yes, on <a href="https://ulogs.org"><b>ulogs.org</b></a> you can be <b>"true fans" of enterprises, communities, initiatives etc</b> and in this case, you can be <b>"true fans"</b> of <a href="https://utopian.io"><b>utopian.io</b></a></font> <br/> 
        <font size="2"><a href="https://ulogs.org/@utopian-io"><b>@utopian-io</b></a> may not ask for a <b>"give-back"</b> but with <a href="https://ulogs.org"><b>ulogs.org</b></a>, it is <b>"true celebrity-hood for 'everyone', once and for all".</b></font> <br/><br/>
        </div>
        To post a Ulog under "<a href="https://ulogs.org/created/ulog-utopian"><b>#ulog-utopian</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-utopian"><b>#ulog-utopian</b></a>" as your 2nd hashtag. You can then add other hashtags e.g <a href="https://ulogs.org/created/utopian-io">"#utopian-io"</a> etc. Don't forget to <b>add "(Ulog + Utopian.io):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Utopian.io): @utopian-io Visited My Ulog Today...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a>, <a href="https://ulogs.org/created/utopian-io">#utopian-io</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Utopian.io): How Utopian.io Can Expand It Reach In My Location...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a>, <a href="https://ulogs.org/created/utopian-io">#utopian-io</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Utopian.io): I Spoke To @elear Of Utopian.io And He Wants To Support My Idea...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a>, <a href="https://ulogs.org/created/utopian-io">#utopian-io</a> etc.]</b></font></li>
          </ul>
        </div>   
        <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-utopian"><b>#ulog-utopian</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/JDugtXg"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-utopian">#ulog-utopian</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><b>[Coming Soon!!!]</b></li>
          </ul>
        </b>
      </span>
    );

    const ulogThejohalfiles = (
      <span>
        <a href="https://ulogs.org/created/@thejohalfiles"><b>@thejohalfiles</b></a> is a <b>behind-the-scener</b>. He stealthily leaves the <b>"Johal files"</b> in every space, <b><i>taking light right inside tunnels.</i></b> He has supported <b>"dreams" on the steem blockchain</b>, by means of mentorship, timely engagement, curation and actual community; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/created/@thejohalfiles"><b>@thejohalfiles</b></a> is approachable, reachable and prompt. He has touched many. <b>Without accolades, he touches many.</b> <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>He is a behind-the-scener.</b></font></li>
            <li><font size="2">He knows of the term <b>"brother"</b>.</font></li>
            <li><font size="2"><b>He knows of things like loyalty, character, substance</b>.</font></li>
            <li><font size="2"><b>He doesn't react to each stimuli. He can see things and walk past</b>.</font></li>
            <li><font size="2">He knows that <b>"Mentality is key"</b>.</font></li>
            <li><font size="2">He wants one to <b>truly grow</b>, than to keep on <b>hand-to-mouthing</b>.</font></li>
            <li><font size="2"><b>He loves steem</b>.</font></li>
            <li><font size="2"><b>Accolades or none, he creates beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-thejohalfiles"><b>#ulog-thejohalfiles</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + TheJohalFiles):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + TheJohalFiles): My Attempt To Get Him To Do His First Ulog...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + TheJohalFiles): How TheJohalfiles Left A File On My Desk...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + TheJohalFiles): I Am Learning To Do Deeds Without Noise ...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a> etc.]</b></font></li>
          </ul>
        </div>  
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/Eg8uCZB">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-thejohalfiles">#ulog-thejohalfiles</a> currently:<br/>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li>[Coming Soon!!!]</li>
          </ul>
        </b>
      </span>
    );

    const uloGifs = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"GIFs plus your Ulogacies become SuperGIFs". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a>: is the Ulog-subtag for <b>(Ulog + GIFs)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to <b>any existing concept</b> etc <b>an existing concept suddenly turns out all fresh</b>. <br/>
        Yes, <b>ulogging</b> can be as fun and simple as creating your very own <a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a> (per day). With your <a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a>, <b><i>not a day passes by without your Ulogacies in it</i></b>. <br/>
        <b>In the art of ulogging</b>, we want to <b><i>"mine the human"</i></b>. We also want to <b><i>"gift to the internet"</i></b> instead of <b><i>"resource from it"</i></b> at least once a day, in a bid to <b>reshape the very internet</b>. So, be inventive, <b>"YOU"</b>, "true celebrity" etc by creating your very own <a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a>, solely out of your <b>"freshly-created" images, graphics, videos and text (per day)</b>.<br/><br/>
        To post a Ulog under "<a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a>", simply click on <a href="https://ulogs.org/editor"><b>This Editor;</b></a> then, make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + GIFs):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + GIFs): A Fly Cannot Bird...[TAGS-Order: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulogifs">#ulogifs</a>, etc.]</b></font></li>
          </ul>
        </div>   
        <br/>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulogifs"><b>#ulogifs</b></a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/UAYS7Yp"><b>Discord</b></a> & <a href="https://t.me/teardrops_smt"><b>Telegram</b></a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulogifs">#ulogifs</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=stellabelle">@stellabelle [Follow]</a> <u>Contact:</u> [<a href="https://discord.gg/UAYS7Yp"><b>Discord</b></a>] <u>Delegate:</u> [Coming Soon!]</li>
          </ul>
          </div>
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
    } else if (category === 'ulog-memes') {
      caption = ulogMemesCaption;
    } else if (category === 'ulog-blocktrades') {
      caption = ulogBlocktradesCaption; 
    } else if (category === 'ulog-showerthoughts') {
      caption = ulogShowerthoughtsCaption;
    } else if (category === 'ulog-snookmademedoit') {
      caption = ulogSnookmademedoitCaption;
    } else if (category === 'ulog-utopian') {
      caption = ulogUtopian;
    } else if (category === 'ulog-thejohalfiles') {
      caption = ulogThejohalfiles;
    } else if (category === 'ulogifs') {
      caption = uloGifs;
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