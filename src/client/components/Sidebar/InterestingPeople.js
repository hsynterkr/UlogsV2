import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import User from './User';
import './InterestingPeople.less';
import './SidebarContentBlock.less';

const InterestingPeople = ({ users, onRefresh }) => (
  <Collapse>
    <Collapse.Panel
      header={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <i className="iconfont icon-group SidebarContentBlock__icon" />{' '}
          <FormattedMessage id="interesting_people" defaultMessage="Interesting Uloggers" />
          <button onClick={onRefresh} className="InterestingPeople__button-refresh">
            <i
              className="iconfont icon-refresh"
              style={{
                marginRight: 15,
              }}
            />
          </button>
        </div>
      }
      key="1"
    >
      <div
        className="SidebarContentBlock__content"
        style={{ textAlign: 'center', overflowY: 'auto', height: '300px', paddingLeft: 0 }}
      >
        {users && users.map(user => <User key={user.name} user={user} />)}
        <h4 className="InterestingPeople__more">
          <Link to={'/discover'}>
            <FormattedMessage id="discover_more_people" defaultMessage="Discover More Uloggers" />
          </Link>
        </h4>
      </div>
    </Collapse.Panel>
  </Collapse>
);

InterestingPeople.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
  onRefresh: PropTypes.func,
};

InterestingPeople.defaultProps = {
  users: [],
  onRefresh: () => {},
};

export default InterestingPeople;
