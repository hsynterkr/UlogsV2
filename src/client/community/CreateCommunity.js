import React from 'react';
import ReactMarkdown from 'react-markdown';
import { message, Collapse, Button, List, Input } from 'antd';
import * as community from '../helpers/community';

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props);
    // bind the component's methods so that it can be called within render() using this.displayComingSoon()
    this.displayComingSoon = this.displayComingSoon.bind(this);
  }

  /*
   * Display a coming soon message when user clicks on any "Click Here" button
   */
  displayComingSoon = () => {
    message.success('Coming soon!', 3);
  };

  render() {
    // for the 'About Ulog' style
    const customPanelStyle = {
      marginBottom: 5,
      overflow: 'hidden',
    };

    // style for the different grow sections
    const customCardStyle = {
      marginBottom: '10px',
      marginTop: '10px',
    };

    return (
      <div className="shifted">
        <div className="container">
          <div className="center" style={{ marginBottom: '50px' }}>
            <h2 style={{ color: 'purple', textAlign: 'center' }}>Create A Ulog-Community</h2>
            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel header="About Communities" key="1" style={customPanelStyle}>
                <p>
                  <ReactMarkdown source={community.aboutCommunities} />
                </p>
              </Collapse.Panel>
            </Collapse>

            <Collapse defaultActiveKey={['1']}>
              <Collapse.Panel showArrow={false} key="1">
                <List itemLayout="vertical" size="large">
                  <List.Item
                    key="Create A Ulog-Community"
                  >
                    <h3>Create A Ulog-Community</h3>
                    <div style={customCardStyle}>
                      <ReactMarkdown source={community.createCommunity} />
                    </div>
                    <Input type="text" placeholder="Names should be a maximum of 19 characters, only alphabets, no special characters." allowClear />
                    <Button
                      type="primary"
                      onClick={this.displayComingSoon}
                      style={{ marginTop: '10px' }}
                    >
                      Create Now
                    </Button>
                  </List.Item>

                </List>
              </Collapse.Panel>
            </Collapse>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCommunity;
