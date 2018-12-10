import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Input, InputNumber, Icon, Modal, Menu, Dropdown, Button, message  } from 'antd';
import SteemConnect from '../../steemConnectAPI';
import { delegationAmounts } from '../../helpers/constants';
import './DelegateButton.less';

class DelegateButton extends React.Component {
  static propTypes = {
    post: PropTypes.shape().isRequired,
  };

  static defaultProps = {
    post: {},
  };

  constructor(props) {
    super(props);

    this.handleInputCustomSP = this.handleInputCustomSP.bind(this);
  }

  handleInputCustomSP = (value) => {
    this.setState({ customSP: value });
  }

  renderDelegateSpSubMenu(delegatee, delegationAmounts) {
    let delegateSpSubMenu = delegationAmounts.map(
      amount => {
        const delegateQuery = {
          delegatee: delegatee,
          vesting_shares: `${amount} SP`,
        };
        return (
          <Menu.Item
            key={amount}
            style={{fontSize: '14px'}}
          >
            <Link
              target='_blank'
              to={SteemConnect.sign('delegateVestingShares', delegateQuery)}
            >
              <Icon type='rocket' /> {amount} SP
            </Link>
          </Menu.Item>
        );
      }
    );
    delegateSpSubMenu = [
      ...delegateSpSubMenu,
      <Menu.Item key={'custom-' + delegatee}>
        <Link
          target='_blank'
          to={'https://steembottracker.com/delegation.html?delegatee=' + delegatee}
        >
          <Icon type='rocket' /> Custom SP
        </Link>
      </Menu.Item>
    ];
    return (delegateSpSubMenu);
  }

  render() {
    const { post } = this.props;

    const delegateSpMenu = (
        <Menu
          style={{zIndex: '1500'}}>
          <Menu.SubMenu
            className="delegateSubMenu"
            key={ post.author + '-sub' }
            title={
              <span><Icon type='user' /><span>@{post.author}</span></span>
            }
          >
            {this.renderDelegateSpSubMenu(post.author, delegationAmounts)}
          </Menu.SubMenu>
          <Menu.SubMenu
            className="delegateSubMenu"
            key='ulogs-sub'
            title={
              <span><Icon type='user' /><span>@ulogs</span></span>
            }
          >
            {this.renderDelegateSpSubMenu('ulogs', delegationAmounts)}
          </Menu.SubMenu>
        </Menu>
    );

    return (
      <Dropdown
        overlay={delegateSpMenu}
        trigger={['click']}
        placement={'bottomRight'}
        overlayStyle={{zIndex: '1500'}}
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
