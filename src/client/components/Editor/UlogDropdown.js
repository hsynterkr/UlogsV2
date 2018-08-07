import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon, Menu, Dropdown } from 'antd';
import { injectIntl } from 'react-intl';

const menu = (
  <Menu>
    <Menu.Item key="10">
      <Link to={'/ulog-knowledge-bank'}>ULOG-Knowledge-Bank</Link>
    </Menu.Item>
    <Menu.Item key="11">
      <Link to={'/ulog-fanlove'}>ULOG-Fan Love</Link>
    </Menu.Item>
    <Menu.Item key="12">
      <Link to={'/surpassinggoogle'}>SurpassingGoogle</Link>
    </Menu.Item>
  </Menu>
);

const UlogDropdown = ({ intl }) => (
  <Dropdown overlay={menu} trigger={['click']}>
    <a className="ant-dropdown-link" href="#">
      Try More #ulogging? <Icon type="down" />
    </a>
  </Dropdown>
);

UlogDropdown.propTypes = {
  intl: PropTypes.shape().isRequired,
};

export default injectIntl(UlogDropdown);