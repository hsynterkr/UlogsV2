import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import ViewButton from '../../widgets/ViewButton';
import './User.less';

const Story = ({ user }) => (
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
      <div className="User__follow">
        <ViewButton username={user.name} secondary />
      </div>
    </div>
    <div className="User__divider" />
  </div>
);

Story.propTypes = {
  user: PropTypes.shape().isRequired,
};

export default Story;
