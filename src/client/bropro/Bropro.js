import React from 'react';
import Brocard from './Brocard';
//import './bropro.css';

class Bropro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="shifted" style={{ margin: 0 }}>
        <div className="banner">
          <div className="innerWrapper">
            <h3>BroPro</h3>
            <p>
              BROPRO allows you to exchange teardrops token for more than &apos;just talent&apos;,
              these ones are un(dis)talented brothers (sisters included) who actually want to play a
              role in historical history, by helping you through the process of building your
              dreams.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="center" style={{ marginTop: '50px' }}>
            <h3>BroPro Members</h3>
            <p>These members are already taking part in BroPro</p>
            <div className="broproCards">
              <Brocard
                name="surpassinggoogle"
                text="I will provide a 30 min chat session (audio or video) about community/project development and general success."
                price="100"
              />
              <Brocard
                name="tobias-g"
                text="I provide a 30 min chat session (audio) to help you design your application UI and provide you guidance surrounding developing your steem front end."
                price="500"
              />
              <Brocard
                name="ankarlie"
                text="I will provide a 30 min chat session teaching you about viable crypto investments. We will cover trading, blockchain, free/paid investments, etc."
                price="100"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bropro;
