import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import FollowButton from '../../widgets/FollowButton';
import DelegateButton from '../StoryFooter/DelegateButton';
import './User.less';

const UlogOverseer = ({ user }) => (
  <div key={user.name} className="User">
    <div className="User__top">
      <div className="User__links">
        <Link to={`/@${user.name}`}>
          <Avatar username={user.name} size={34} />
        </Link>
        <Link to={`/@${user.name}`} title={user.name} className="User__name">
          <span className="username">{user.name}</span>
        </Link>
      </div>
      <DelegateButton
        post={{
          author: user.name,
        }}
      />
    </div>
  </div>
);

UlogOverseer.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default UlogOverseer;
