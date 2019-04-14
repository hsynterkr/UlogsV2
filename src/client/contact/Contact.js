import React from 'react';
import { Collapse } from 'antd';
import '../bropro/bropro.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shifted" style={{ margin: 0 }}>
        <div className="banner">
          <div className="innerWrapper">
            <h3>Send Us A Letter, Gift Or Mail</h3>
            <p>
              You may want to send us something. We will give your our mailing address. We want to
              receive, for &#39;receiving is an art&#39;.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="center" style={{ marginBottom: '50px', marginTop: '50px' }}>
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel showArrow={false} header="Ways to reach us" key="1">
                <p>
                  <strong>Send mail, parcel or letter to:</strong> Block 6 Lot 36 Yakal Str Villa
                  Carolina 2, Tunasan, Muntinlupa City, Metro Manila, Philippines (Zip/Postal Code:
                  1773)
                </p>
                <p>
                  <strong>Send email to:</strong> comsilbronze4@gmail.com
                </p>
                <p>
                  <strong>Send steem donations to:</strong>@ulogs
                </p>
                <p>
                  <strong>Send FIAT donations to:</strong>comsilbronze4@gmail.com
                </p>
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
