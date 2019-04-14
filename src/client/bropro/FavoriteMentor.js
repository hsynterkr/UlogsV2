import React from 'react';
import Brocard from './Brocard';
import Notification from './Notification';
import './bropro.css';

class FavoriteMentor extends React.Component {
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
            <h3>15 Mins Session With Your Favorite Mentor</h3>
            <p>
              On Ulogs.org, we will explore a &#39;variety of rewards&#39;. We are building our
              entire ecosystem around a &#39;grey-list of certified uloggers&#39; (true
              celebrities). This is an actual community of brothers, where each &#39;certified
              ulogger&#39; is also a true fan.
            </p>
            <p>
              Many times, we rigamarole for years seeking that &#39;ever-missing piece of the
              puzzle&#39;; sometimes a simple conversation with &#39;a brother&#39; can turn
              &#39;years of rigmarole&#39; into &#39;15 mins of straight-to-the-point&#39;. Check
              out our growing list of hand-picked mentors under various niches and book a moment.
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

export default FavoriteMentor;
