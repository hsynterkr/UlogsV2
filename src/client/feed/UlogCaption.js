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
            <li><a href="https://v2.steemconnect.com/sign/follow?following=samic">@samic [<b><u>Follow</u></b>]</a> Contact: [<a href="https://discord.gg/UAYS7Yp"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=samic"><b><u>Click Here</u></b></a>]</li>
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
            <li><a href="https://v2.steemconnect.com/sign/follow?following=snook">@snook [<b><u>Follow</u></b>]</a> Contact: [<a href="https://discord.gg/wTmMt8W"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=snook"><b><u>Click Here</u></b></a>]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=shadowspub">@shadowspub [<b><u>Follow</u></b>]</a> Contact: [<a href="https://discord.gg/wTmMt8W"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=shadowspub"><b><u>Click Here</u></b></a>]</li>
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
        <font size="2">Utopian has created an open source economy that rewards both contributors to open source projects as well as project owners. <br/> Utopian simply incentivizes the <b>art of dream-building.</b> While it looks like a tech-empire; in the broad scheme of things, <b>it brings light right inside tunnels, by empowering "anyone" to build a dream.</b> No longer do people have to wait to get to the <b>"end of the tunnel"</b>. This is world-adjusting.</font> <br/>
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
        <a href="https://ulogs.org/@thejohalfiles"><b>@thejohalfiles</b></a> is a <b>behind-the-scener</b>. He stealthily leaves the <b>"Johal files"</b> in every space, <b><i>taking light right inside tunnels.</i></b> He has supported <b>"dreams" on the steem blockchain</b>, by means of mentorship, timely engagement, curation and actual community; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/@thejohalfiles"><b>@thejohalfiles</b></a> is approachable, reachable and prompt. He has touched many. <b>Without accolades, he touches many.</b> <br/>
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

    const ulogSurfyogi = (
      <span>
        <a href="https://ulogs.org/@surfyogi"><b>@surfyogi</b></a> <b>is plain to see.</b> Without much noise, he surfs the spaces taking <b>"light"</b> by means of his shine into <b>"the nooks and crannies of every tunnel".</b> He bore forth <a href="https://ulogs.org/@wafrica"><b>@wafrica</b></a> & <a href="https://ulogs.org/@artzone"><b>@artzone</b></a> as a means to reach (inside) tunnels. No longer do many have to wait to get to the <b>"end of the tunnel"</b>. <br/>
        He has supported <b>"dreams" on the steem blockchain</b>, by means of mentorship, timely engagement, curation and actual community; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/@surfyogi"><b>@surfyogi</b></a> is approachable, reachable and prompt. Well, he cares. He may reach all-the-way out to you. <b>He has touched many. Without accolades, he touches many.</b> <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">He is more of <b>"a behind-the-scener".</b></font></li>
            <li><font size="2">He knows of the notion <b>"humanity is the brother next to you".</b></font></li>
            <li><font size="2">He knows of <b>"directional fun"</b>.</font></li>
            <li><font size="2"><b>He is a "true fan" of your very own shine</b>.</font></li>
            <li><font size="2">He wants one to <b>truly grow</b>, than to keep on <b>hand-to-mouthing</b>.</font></li>
            <li><font size="2"><b>He loves steem</b>.</font></li>
            <li><font size="2">Accolades or none, he creates <b>beautiful disruptions</b>.</font></li>
            <li><font size="2"><b>He loves community.</b></font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-surfyogi"><b>#ulog-surfyogi</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + SurfYogi):" somewhere IN-TITLE</b>. See <b>sample</b>: <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + SurfYogi): My Attempt To Get Him To Do His First Ulog...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + SurfYogi): I Sent SurfYogi A White Tshirt...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + SurfYogi): I Am Learning To Do Deeds Without Noise ...[TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/EpVxmW4">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-surfyogi">#ulog-surfyogi</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=surfyogi">@surfyogi [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/EpVxmW4"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=snook"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogBobbylee = (
      <span>
        <a href="https://ulogs.org/@bobbylee"><b>@bobbylee</b></a> manages to constitute <b>"light". </b> Without much noise, he surfs the spaces taking <b>"light"</b> by means of his shine into <b>"the nooks and crannies of every tunnel".</b> He relishes this. No longer do many have to wait to get to the <b>"end of the tunnel"</b>. <br/>
        He cares. He evolves in his ability to show care. <b>Bulls or bears, his care is on default.</b> He offers a lee to those seeking a haven, supporting <b>"dreams" on the steem blockchain</b>, by means of mentorship, timely engagement, curation and actual community; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/@bobbylee"><b>@bobbylee</b></a> is approachable, reachable and prompt. Well, he cares. He may reach all-the-way out to you. <b>He has touched many. Without accolades, he touches many.</b> <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">He is more of <b>"a behind-the-scener".</b></font></li>
            <li><font size="2">He knows of the notion <b>"humanity is the brother next to you".</b></font></li>
            <li><font size="2"><b><i>He has a soft-spot and let's you reach it</i></b>.</font></li>
            <li><font size="2"><b>He is a "true fan" of your very own shine</b>.</font></li>
            <li><font size="2">He wants one to <b>truly grow</b>, than to keep on <b>hand-to-mouthing</b>.</font></li>
            <li><font size="2"><b>He loves steem</b>.</font></li>
            <li><font size="2">Accolades or none, he creates <b>beautiful disruptions</b>.</font></li>
            <li><font size="2"><b>He allows you to relegate reservations in his space.</b></font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-bobbylee"><b>#ulog-bobbylee</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + BobbyLee):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + BobbyLee): My Attempt To Get Him To Do His First Ulog. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + BobbyLee): I Wrote Bobby A "Thank You" Ulog And He Said "Wow". [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + BobbyLee): I Drew A BobbyLee Portrait From My Image Nation. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/PEfzyM4">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-bobbylee">#ulog-bobbylee</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=iyanpol12">@iyanpol12 [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/PEfzyM4"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=iyanpol12"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogStellabelle = (
      <span>
        <a href="https://ulogs.org/@stellabelle"><b>@stellabelle</b></a> is <b>non-stop</b> in how <b>she moves</b>. For a great noble cause; to play roles in things that can constitute historical-history; <b>she simply moves!</b> She leaves <b>her ulogacies</b> in every space, leading matters. <br/>
        <b><i>Her mind’s eye has spanless arrays of colors.</i></b> She dreams yet she maintains <b>real-hood</b>. As she finds herself, <b>she lays bare her cookies</b>, so others can find themselves too. <br/> She takes light right inside tunnels. Not any longer does one have to wait till <b>“the end of the tunnel”</b>. <br/>
        <b>She has supported "dreams" on the steem blockchain</b>, by means of mentorship, partnerships, generousity, timely engagement, curation and actual community; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/@stellabelle"><b>@stellabelle</b></a> is approachable, reachable and prompt. Well, she cares. She may reach all-the-way out to you. <b>She has touched many. Without accolades, she touches many.</b> <br/>
        <u>Some of her cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">She is a <b>"a behind-the-scener".</b> She is an <b>on-the-scener</b>.</font></li>
            <li><font size="2">She can bear <b>your consequence</b>. She bears <b>her consequence</b>.</font></li>
            <li><font size="2">She knows of the term <b>"sister"</b>.</font></li>
            <li><font size="2">Her <b>mind’s eye</b>, she let’s wander into <b>states of spanlessness</b>.</font></li>
            <li><font size="2">She is a <b>“true fan”</b> of your noble dreams; <b>met or unmet</b>.</font></li>
            <li><font size="2">She attempts <b>out-of-the-boxness</b>. She creates. She recreates. <b>(UnDisTalented)</b>.</font></li>
            <li><font size="2">She wants one to <b>truly grow</b>, than to keep on <b>hand-to-mouthing</b>.</font></li>
            <li><font size="2"><b><i>She loves steem.</i></b></font></li>
            <li><font size="2">She is a <b>Ulogger-Mum</b>.</font></li>
            <li><font size="2"><b>Accolades or none, she creates beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate her; to learn about her, to be <b>"true fans"</b> of her, to share memories with her; to reach out to her etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-stellabelle"><b>#ulog-stellabelle</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Stellabelle):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Stellabelle): My Attempt To Get Her To Do Her First UloGIF. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Stellabelle): I Created Some UloGIFs That I Am Sure She Will Like. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Stellabelle): Because Of Her, I Re-loved My Woman. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/b2NzBn8">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-stellabelle">#ulog-stellabelle</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@stellabelle">@stellabelle [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/b2NzBn8"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=stellabelle"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogSweetsssj = (
      <span>
        <a href="https://ulogs.org/@sweetsssj"><b>@sweetsssj</b></a> brightens the spaces. She wanders across <b>Mama Earth</b> and manages to let us peer into her adventures. <b>Spots-from-creation</b> she carries behind her, <b>re-telling us of the Creator Jehovah</b>. <br/>
        She <b>YaoMings</b> on the steem blockchain, <b>leaving her Ulogacies in lights</b> for all to see. <br/>
        <b>She has supported "dreams" on the steem blockchain</b>, by means of mentorship, timely engagement, curation and actual community etc; <b>"true fan-hood"</b>. <br/>
        <a href="https://ulogs.org/@sweetsssj"><b>@sweetsssj</b></a> is approachable, reachable and prompt. She uses <b>her smile</b> to cut down on <b>"distances"</b>. <br/>
        <u>Some of her cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">She is <b>“human”</b>. She can afford to show it.</font></li>
            <li><font size="2"><b><i>She airs her mind.</i></b></font></li>
            <li><font size="2">She knows of the term <b>"sister"</b>.</font></li>
            <li><font size="2">She understands the notion <b>“nations are locations”</b>.</font></li>
            <li><font size="2"><b>She travels</b>. As she travels, she grows <b><i>her opinions</i></b>.</font></li>
            <li><font size="2">She attempts <b>out-of-the-boxness</b>. She creates. She recreates. <b>(UnDisTalented)</b>.</font></li>
            <li><font size="2"><b><i>She loves steem.</i></b></font></li>
            <li><font size="2">She loves cats</font></li>
            <li><font size="2">She is not Gulliver. <b><i>She is Sweetsssj</i></b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate her; to learn about her, to be <b>"true fans"</b> of her, to share memories with her; to reach out to her etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-sweetsssj"><b>#ulog-sweetsssj</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Sweetsssj):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Sweetsssj): My Attempt To Get Her To Do Her First Ulog. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Sweetsssj): I Ulogged About Travel "Sweetsssj-Style". [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Sweetsssj): My Selfie-Moments With Sweetssj Earlier Today In Beijin. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/xrbRM9Y">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-sweetsssj">#ulog-sweetsssj</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@sweetsssj">@sweetsssj [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/xrbRM9Y"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=sweetsssj"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogDimimp = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"Looking is starkly different from Seeing". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/@dimimp"><b>@dimimp</b></a> can see. H(s)e wanders the spaces. H(s)e is putting the <b>“smallers things”</b> in its places. H(s)e is putting <b>“money”</b> in its place, <b>re-telling people of their very own shine</b>. H(s)e allows that the masses roam but directionally within <b>the nooks & crannies of their very own dreams</b>. <br/>
        Tunnels can no longer stay <b>dim</b>, for <b>lights must go therein</b>. <a href="https://ulogs.org/@steemjet"><b>"@steemjet</b></a> <b>go un-dim the spaces"</b>. <br/> H(s)e is full of context. Each word coded and encoded. Just when you see <b>DIM</b>, check again, in the shadows is the <b>IMP</b>; <b><i>“gIANT”!</i></b> <br/>
        <a href="https://ulogs.org/@dimimp"><b>@dimimp</b></a> has supported <b>"dreams"</b> on the steem blockchain, by means of mentorship, dream-building, timely engagement, educationally giving, curation and actual community etc; "true fan-hood". <br/> <a href="https://ulogs.org/@dimimp"><b>@dimimp</b></a> is approachable, reachable and prompt. <b>Within hishe silence h(s)e reaches out</b>. <br/>
        <u>Some of @dimimp's cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">H(s)e thinks <b>“the world”</b>.</font></li>
            <li><font size="2">H(s)e thinks <b>“tomorrow”</b>.</font></li>
            <li><font size="2">H(s)e knows <b>“tomorrow” can be “today”</b>.</font></li>
            <li><font size="2"><b>H(s)e is Un(dis)talented</b>.</font></li>
            <li><font size="2">H(s)e knows of the notion, <b>"mentality is key"</b>.</font></li>
            <li><font size="2">H(s)e understands the mentality, <b>“nations are locations”</b>.</font></li>
            <li><font size="2">H(s)e gives testimonial essence to <b>mystery</b>.</font></li>
            <li><font size="2">H(s)e invents Wreck-It-Ralph use for <b>suspense</b>.</font></li>
            <li><font size="2">H(s)e is more of a <b>behind-the-scener</b>.</font></li>
            <li><font size="2">H(s)e <b>dreams</b> by letting you <b>dream</b>.</font></li>
            <li><font size="2"><b>He doesn't react to each stimuli. He can see things and walk past</b>.</font></li>
            <li><font size="2">H(s)e attempts out-of-the-boxness. H(s)e creates. She recreates.</font></li>
            <li><font size="2"><b>H(s)e loves steem.</b></font></li>
            <li><font size="2"><b>Accolades or none</b>, he creates <b>beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him(er); to learn about him(er), to be <b>"true fans"</b> of him(er), to share memories with him(er); to reach out to him(er) etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-dimimp"><b>#ulog-dimimp</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "<a href="https://ulogs.org/created/steemjet">#steemjet</a>" etc. Don't forget to <b>add "(Ulog + DimImp):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + DimImp): My Attempt To Get @dimimp To Ulog. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a> <a href="https://ulogs.org/created/steemjet">#ulog-steemjet</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + DimImp): What I Learned From @dimimp Today. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a> <a href="https://ulogs.org/created/steemjet">#ulog-steemjet</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + DimImp): My Mentality Improved After An Encounter With @dimpimp. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a> <a href="https://ulogs.org/created/steemjet">#ulog-steemjet</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/EBRJxQM">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-dimimp">#ulog-dimimp</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@surpassinggoogle">@surpassinggoogle [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/EBRJxQM"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=surpassinggoogle"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogTeamsteem = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"When the smile is whole, the beards can stay". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/@teamsteem"><b>@teamsteem</b></a> simply glows, then creates a trail, so you can find some more glow too. His <b>smile</b> is a <b>team</b> on its own, he knows it; <b>he seeks to share it</b>. <br/>
        <a href="https://ulogs.org/@teamsteem"><b>@teamsteem</b></a> is a steem witness, a steem veteran. He loves his veggies. He loves animals. <b>He loves "humans"</b>. <br/> As he wonders the spaces, he applies <b>gentility</b>. He shares his moments; to soothe, to touch, to fix. <b><i>Bearded or clean-shaved, his smile is whole</i></b>. <br/>
        <a href="https://ulogs.org/@teamsteem"><b>@teamsteem</b></a> has supported <b>"dreams"</b> on the steem blockchain, by means of mentorship, dream-building, timely engagement, educationally giving, curation and actual community etc; <b>"true fan-hood"</b>. <br/> <a href="https://ulogs.org/@teamsteem"><b>@teamsteem</b></a> is approachable, reachable and prompt. <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">He understands the mentality, <b>“nations are locations”</b>.</font></li>
            <li><font size="2">He lives his dream, also so you can live yours better.</font></li>
            <li><font size="2">He attempts out-of-the-boxness. He creates. He recreates; <b>"UndisTalented"!</b></font></li>
            <li><font size="2">He is more of a behind-the-scener.</font></li>
            <li><font size="2">He knows of the giant term, <b>"brother"</b>.</font></li>
            <li><font size="2">Even in his <b>undertone</b>, he tucks in <b>large smiles</b>.</font></li>
            <li><font size="2"><b><i>He plays.</i></b></font></li>
            <li><font size="2"><b>He loves steem.</b></font></li>
            <li><font size="2"><b>Accolades or none</b>, he creates <b>beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-teamsteem"><b>#ulog-teamsteem</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + TeamSteem):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + TeamSteem): My Attempt To Get @teamsteem To Ulog About Me. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + TeamSteem): My Selfie Moments With Him In Quebec. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Teamsteem): Thank You @teamsteem, For Making Me Do My First Pull-Up. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/3jTA4Tt">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-teamsteem">#ulog-teamsteem</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@teamsteem">@teamsteem [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/3jTA4Tt"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=teamsteem"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogKusknee = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"An old dog may seek "not-the-fattest-bone". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/@kus-knee"><b>@kus-knee</b></a> is the old dog; <b>"Wells-of-experience and swag"</b>. He is in incessant motion seeking <b>new ways to love</b>. He is a <b>"true fan"</b> of <b><i>your shine</i></b>. That you can build your noble dreams, <b>he will re-become enterprenuer</b>. <br/>
        Even the <b>not-so-good</b>, he sifts hard to find <b>good therein or new use for good</b>. He is cool. <b><i>He is UnDisTalented</i></b>. <br/> 
        <a href="https://ulogs.org/@kus-knee"><b>@kus-knee</b></a> is a steem veteran. <b>He loves creation</b>. He loves <b>"humans"</b>. As he wonders the spaces, he applies gentility and with calm and poise, he ransacks the spaces, <b>leaving a "trail of love"</b>, that by its means, you may find the One who loves the most; <b>"Jehovah"</b>. <br/>
        <a href="https://ulogs.org/@kus-knee"><b>@kus-knee</b></a> has supported <b>"dreams"</b> on the steem blockchain, by means of mentorship, dream-building, timely engagement, educationally giving, curation, enterprenuership and actual community etc; <b>"true fan-hood"</b>. <br/> 
        <a href="https://ulogs.org/@kus-knee"><b>@kus-knee</b></a> is approachable, reachable and prompt. <b><i>Alas, he may even stretch his arm out to you.</i></b> <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>He is himself.</b></font></li>
            <li><font size="2">Bulls or bears, <b>he loves his wife</b>.</font></li>
            <li><font size="2">He doesn't react to every stimuli.</font></li>
            <li><font size="2">He knows <b>“tomorrow” can be “today”</b>.</font></li>
            <li><font size="2"><b>He is Un(dis)talented.</b></font></li>
            <li><font size="2">He understands the mentality, <b>“nations are locations”</b>.</font></li>
            <li><font size="2"><b>He gives testimonial essence to grey-headedness.</b></font></li>
            <li><font size="2">He invents Wreck-It-Ralph use for <b>enterpreneurship</b>.</font></li>
            <li><font size="2">He is a <b>behind-the-scener</b>. He is an <b>on-the-scener</b>.</font></li>
            <li><font size="2">He fully grasps the giant term <b>"brother"</b>.</font></li>
            <li><font size="2"><b>He seeks out timely ways to really-give</b>.</font></li>
            <li><font size="2">He loves steem. He loves its community</font></li>
            <li><font size="2"><b>Accolades or none</b>, he creates <b>beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-kusknee"><b>#ulog-kusknee</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Kus-Knee):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Kus-Knee): Today @kus-knee Told Me Why He Is Called The Old Dog. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Kus-Knee): I FaceTimed @kus-knee And Here Is What He Told Me About Entepreneurship. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Kus-Knee): I Love Steem Because I Found @kus-knee. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/SFYBHp5">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-kusknee">#ulog-kusknee</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@kusknee">@kusknee [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/SFYBHp5"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=kusknee"><b><u>Click Here</u></b></a>]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@ulogs">@ulogs [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/SFYBHp5"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=ulogs"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogPapapepper = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>"Homing can gradually adjust the world". @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/@papa-pepper"><b>@papa-pepper</b></a> is that <b>family guy</b>. He extends his <b>family-hood into heights of globalhood.</b> <br/>
        He tends to the gardens. <b>He turns new leaves</b>. He makes <b>homes</b> out of <b>jungles</b>. He stirs peace, calm, laughs. He is brother. <b>He spices "spices"</b>. He shines forth, so that <b>tunnels can get light</b>. The birds love him. Snakes do too! The <a href="https://ulogs.org/@little-peppers"><b>@little-peppers</b></a> love him and <a href="https://ulogs.org/@mama-pepper"><b><i>@mama-pepper</i></b></a> too. <br/> 
        <a href="https://ulogs.org/@papa-pepper"><b>@papa-pepper</b></a> is a steem veteran. He loves creation. <b>He loves "humans"</b>. As he wonders the spaces, <b>he puts the steem blockchain to more spanless use, inventing out-of-the-box ways to touch and re-touch lives.</b> <br/>
        <a href="https://ulogs.org/@papa-pepper"><b>@papa-pepper</b></a> has supported <b>"dreams"</b> on the steem blockchain, by means of mentorship, dream-building, timely engagement, educationally giving, curation, directional fun/play and actual community etc; <b>"true fan-hood"</b>. <br/> 
        <a href="https://ulogs.org/@papa-pepper"><b>@papa-pepper</b></a> is approachable, reachable and prompt. Alas, he will reach to you, send you silver coin(s), some shirts and laugh-moment with you. Alas! <br/>
        <u>Some of his cookies:</u> <br/>
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2">He knows of <b>"the Creator"</b>.</font></li>
            <li><font size="2"><b>Bulls or bears</b>, he loves his wife.</font></li>
            <li><font size="2">He understands <b>"valuable use of the simple-things.</b></font></li>
            <li><font size="2"><b><i>He is his own apprentice.</i></b></font></li>
            <li><font size="2">He understands the mentality, <b>“nations are locations”</b>.</font></li>
            <li><font size="2">He gives testimonial essence to <b>play</b>.</font></li>
            <li><font size="2"><b>He invents Wreck-It-Ralph use for "Ray Ban"(s).</b></font></li>
            <li><font size="2">He fully grasps the giant term <b>"brother"</b>.</font></li>
            <li><font size="2">He keeps dreams alive, in dream-bits.</font></li>
            <li><font size="2">He seeks out timely ways to give.</font></li>
            <li><font size="2">He attempts out-of-the-boxness. He creates. He recreates. <b>"Un(dis)Talented"</b>!</font></li>
            <li><font size="2"><b>He loves steem.</b></font></li>
            <li><font size="2"><b>Accolades or none</b>, he creates <b>beautiful disruptions</b>.</font></li>
          </ul>
        </div>   
        <br/>   
        To post a Ulog under <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor</a></span> to <b>"give back"</b>; to emulate him; to learn about him, to be <b>"true fans"</b> of him, to share memories with him; to reach out to him etc <b>(per day)</b>. <br/> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-papapepper"><b>#ulog-papapepper</b></a>" as your 2nd hashtag. You can then add other hashtags e.g "your location" etc. Don't forget to <b>add "(Ulog + Papa-Pepper):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Papa-Pepper): A New Niche In Homesteading Discovered, Thanks To @papa-pepper [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Papa-Pepper): "Applying Blockchain Technology To The Contest Economy"; I Learned This From @papa-pepper [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + Papa-Pepper): Hey @papa-pepper, What Do You Think About My New BackYard Of Peppers. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/M847Kvs">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-papapepper">#ulog-papapepper</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@papa-pepper">@papa-pepper [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/M847Kvs"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=papa-pepper"><b><u>Click Here</u></b></a>]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@ulogs">@ulogs [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/M847Kvs"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=ulogs"><b><u>Click Here</u></b></a>]</li>
          </ul>
          </div>
        </b>
      </span>
    );

    const ulogSteemjet = (
      <span>
        <div style={{ color : 'purple' }}>
          <b><i>“Blockchain technology will become more than just another tech, only by means of our own shine”. @surpassinggoogle</i></b> <br/>
        </div>
        <a href="https://ulogs.org/created/ulog-steemjet"><b>#ulog-steemjet</b></a>: is the Ulog-subtag for <b>(Ulog + SteemJet)</b>. When you add <a href="https://ulogs.org/created/ulog"><b>#ulog</b></a> to any <b>existing concept</b> etc an <b>existing concept</b> suddenly turns out all <b>fresh.</b> <br/>
        <a href="https://ulogs.org/@steemjet"><b>@steemjet</b></a> is timely<b>ly</b>-placed to take <b>steem</b> and <b>each thing that blockchain represents</b> into <b>outer-space</b> and <b>back down-to-earth</b>; then, <b>right inside every “tunnel”</b>.  It is applying the <b>spanless beauty of “human”</b> to this effect. <b><i>It is creating a world of “brothers”</i></b>. <br/> 
        <a href="https://ulogs.org/@steemjet"><b>@steemjet</b></a> simply spurs the <b>art of dream-building</b>. In the broad scheme of things, <b>it brings light right inside tunnels</b>, by empowering <b>"anyone"</b> to build a noble dream. <b>No longer do many have to wait to get to the "end of the tunnel"</b>. <b><i>This is world-adjusting.</i></b> <br/> They have supported <b>"dreams" on the steem blockchain</b>, by means of donations, curation, mentality-adjusting and actual community; <b><i>"true fan-hood"</i></b> <br/>
        By ulogging under <a href="https://ulogs.org/created/ulog-steemjet"><b>#ulog-steemjet</b></a>, you can <b>give back, emulate their enterprise, be "true fan", reach out, share experiences, give feedback, give suggestions, create ulogacies, grow etc</b>. Yes, on <a href="https://ulogs.org"><b>ulogs.org</b></a> you can be <b>"true fans" of enterprises, communities, initiatives etc</b> and in this case, <b>you can be "true fans" of <a href="https://ulogs.org/@steemjet"><b>@steemjet</b></a></b> <br/> <a href="https://ulogs.org/@steemjet"><b>@steemjet</b></a> may not ask for a "give-back" but with <a href="https://ulogs.org"><b>ulogs.org</b></a>, it is <b><i>"true celebrity-hood for 'everyone', once and for all"</i></b>. <br/> <br/>    
        To post a Ulog under <a href="https://ulogs.org/created/ulog-steemjet"><b>#ulog-steemjet</b></a>, simply use <span className="bold-italic"><a href="https://ulogs.org/editor">This Editor.</a></span> Make sure to use the more popular "<a href="https://ulogs.org/created/ulog"><b>#ulog</b></a>" as your 1st hashtag & "<a href="https://ulogs.org/created/ulog-steemjet"><b>#ulog-steemjet</b></a>" as your 2nd hashtag. You can then add other hashtags e.g <a href="https://ulogs.org/created/steemjet"><b>#steemjet</b></a>, "your location" etc. Don't forget to <b>add "(Ulog + SteemJet):" somewhere IN-TITLE</b>. See <b>sample</b>:
        <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><font size="2"><b>(Ulog + Steemjet): "I Just Found Myself, Thanks To @steemjet". [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steemjet">#ulog-steemjet</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + SteemJet): How I Spent My Today As A SpaceForcer. [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steemjet">#ulog-steemjet</a> etc.]</b></font></li>
            <li><font size="2"><b>(Ulog + SteemJet): Applying Steem Technology To More "Wreck-It-Ralph Use. My SteemJet Suggestion! [TAGS-ORDER: <a href="https://ulogs.org/created/ulog">#ulog</a>, <a href="https://ulogs.org/created/ulog-steemjet">#ulog-steemjet</a> etc.]</b></font></li>
          </ul>
        </div>
        <b>
          Become "true fans"! Visit <a href="https://ulogs.org/created/ulog-steemjet">#ulog-steemjet</a> daily, to curate, engage, support, contribute etc! Join its community on <a href="https://discord.gg/9Bhxtm">Discord</a> & <a href="https://t.me/teardrops_smt">Telegram</a>. <br/><br/>
          Verified/Certified @uloggers who oversee <a href="https://ulogs.org/created/ulog-steemjet">#ulog-steemjet</a> currently:<br/>
          <div style={{ color : 'purple' }}>
          <ul style={{ 'listStyleType' : 'circle', marginLeft : '20px' }}>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@uche-nna">@uche-nna [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/9Bhxtm"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=uche-nna"><b><u>Click Here</u></b></a>]</li>
            <li><a href="https://v2.steemconnect.com/sign/follow?following=@ulogs">@ulogs [<u>Follow</u>]</a> Contact: [<a href="https://discord.gg/9Bhxtm"><b><u>Discord</u></b></a>] Delegate: [<a href="https://steembottracker.com/delegation.html?delegatee=ulogs"><b><u>Click Here</u></b></a>]</li>
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
    } else if (category === 'ulog-surfyogi') {
      caption = ulogSurfyogi;
    } else if (category === 'ulog-bobbylee') {
      caption = ulogBobbylee;
    } else if (category === 'ulog-stellabelle') {
      caption = ulogStellabelle;
    } else if (category === 'ulog-sweetsssj') {
      caption = ulogSweetsssj;
    } else if (category === 'ulog-dimimp') {
      caption = ulogDimimp;
    } else if (category === 'ulog-teamsteem') {
      caption = ulogTeamsteem;
    } else if (category === 'ulog-kusknee') {
      caption = ulogKusknee;
    } else if (category === 'ulog-papapepper') {
      caption = ulogPapapepper;
    } else if (category === 'ulog-steemjet') {
      caption = ulogSteemjet;             
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
