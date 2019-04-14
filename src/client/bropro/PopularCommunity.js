import React from 'react';
import Brocard from './Brocard';
import Notification from './Notification';
import './bropro.css';

class PopularCommunity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNotification: false,
    };
    this.showNotification = this.showNotification.bind(this);
    this.handleNotificationchange = this.handleNotificationchange.bind(this);
  }

  showNotification() {
    this.setState({
      showNotification: true,
    });
  }

  handleNotificationchange() {
    this.setState({
      showNotification: false,
    });
  }

  render() {
    const notificationActionlinkProps = {
      href: 'https://steem-engine.com/?p=market&t=TEARDROPS',
      title: 'To the market',
      text: 'Go to Market',
    };
    return (
      <div className="shifted" style={{ margin: 0 }}>
        <Notification
          heading="Buying Details"
          text="To get this experience all you need to do is send teardrops to the user you wish to utilise with memo &quote;bropro&quote; via steem-engine.com. If you don't have the specified teardrops amount, you can use the button below to access the market to buy teardrops. If you have any questions or concerns, all our BroPro members are available on our Discord to help with your queries."
          actionlink={notificationActionlinkProps}
          showNotification={this.state.showNotification}
          handleChange={this.handleNotificationchange}
        />

        <div className="banner">
          <div className="innerWrapper">
            <h3>
              Apply To Give A 30 Mins Symposium About Your Project On A Popular Steem Community
            </h3>
            <p>
              The ulogs.org ecosystem seeks to unite every steem community, creating balance in the
              steem ecosystem. We are doing this using ulog-subtags, which in turn grow into
              ulog-communities e.g #ulog-helpie, #ulog-steemmonsters, #ulog-actifit etc
            </p>
            <p>
              We will try to help you get a time allotment on any of the popular steem community in
              our growing network, for you to talk about your projects in the midst of other
              steemians, during their discord talk shows. Check out our available list and book a
              moment.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="center" style={{ marginTop: '50px' }}>
            <h3>Favorite Mentors</h3>
            <div className="broproCards">
              <Brocard
                name="surpassinggoogle"
                text="I will provide a 30 min chat session (audio or video) about community/project development and general success."
                price="100"
                onButtonclick={this.showNotification}
              />
              <Brocard
                name="tobias-g"
                text="I provide a 30 min chat session (audio) to help you design your application UI and provide you guidance surrounding developing your steem front end."
                price="500"
                onButtonclick={this.showNotification}
              />
              <Brocard
                name="ankarlie"
                text="I will provide a 30 min chat session teaching you about viable crypto investments. We will cover trading, blockchain, free/paid investments, etc."
                price="100"
                onButtonclick={this.showNotification}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopularCommunity;
