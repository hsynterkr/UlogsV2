import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Input, Icon, Modal, Menu, Dropdown, Button, message  } from 'antd';
import SteemConnect from '../../steemConnectAPI';
import { delegationAmounts } from '../../helpers/constants';

class DelegateButton extends React.Component {
  static propTypes = {
    post: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    post: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      delegateSpMenuVisible: false,
    };

    this.handleInputCustomSP = this.handleInputCustomSP.bind(this);
    this.handleDelegateSpMenuClick = this.handleDelegateSpMenuClick.bind(this);
    this.handleDelegateSpVisibleChange = this.handleDelegateSpVisibleChange.bind(this);
  }

  handleInputCustomSP = (e) => {
    this.setState({ customSP: e.target.value });
  }

  handleDelegateSpMenuClick = (e) => {
    if (e.key !== 'custom') {
      this.setState({ delegateSpMenuVisible: false });
    }
  }

  handleDelegateSpVisibleChange = (flag) => {
    this.setState({ delegateSpMenuVisible: flag });
  }

  render() {
    const { post } = this.props;
    const delegateSpMenu = (
      <Menu
        onClick={this.handleDelegateSpMenuClick}
        style={{ width: '65%' }}
      >
        {delegationAmounts.map(
          amount => {
            const delegateQuery = {
              delegatee: post.author,
              vesting_shares: `${amount} SP`,
            };
            return (
              <Menu.Item key={amount}>
                <Link
                  target='_blank'
                  to={SteemConnect.sign('delegateVestingShares', delegateQuery)}
                >
                  <Icon type='rocket' /> {amount} SP
                </Link>
              </Menu.Item>
            );
          }
        )}
        <Menu.Item key={'custom'}>
          <Input.Group compact>
            <Input
              placeholder="Custom"
              type={'number'}
              onChange={this.handleInputCustomSP}
              addonAfter={
                <span>
                  SP <Button
                      type='primary'
                      shape='circle'
                      icon='rocket'
                      target='_blank'
                      href={SteemConnect.sign('delegateVestingShares', {delegatee: post.author, vesting_shares: `${this.state.customSP} SP`,})}
                  />
                </span>
              }
            />
          </Input.Group>
        </Menu.Item>
      </Menu>
    );

    return (
      <Dropdown
        overlay={delegateSpMenu}
        trigger={['click']}
        onVisibleChange={this.handleDelegateSpVisibleChange}
        visible={this.state.delegateSpMenuVisible}
      >
        <Button
          size={'small'}
          style={{ marginLeft: 8, fontSize: 12 }}
          type={'primary'}>
          Delegate <Icon type="down" />
        </Button>
      </Dropdown>
    );
  }
}

export default DelegateButton;
