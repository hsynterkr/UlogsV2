import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import './User.less';

const ChatUser = ({ user, handleUserAccountClick }) => (
  <div key={user.name} className="User">
    <div className="User__top">
      <div className="User__links">
        <Link to={`/@${user.name}`} onClick={handleUserAccountClick}>
          <Avatar username={user.name} size={34} />
        </Link>
        <Link
          to={`/@${user.name}`}
          onClick={handleUserAccountClick}
          title={user.name}
          className="User__name"
        >
          <span className="username">{user.name}</span>
        </Link>
      </div>
      <div className="User__online">Online</div>
    </div>
    <div className="User__divider" />
  </div>
);

ChatUser.propTypes = {
  user: PropTypes.shape().isRequired,
  handleUserAccountClick: PropTypes.func.isRequired,
};

export default ChatUser;
