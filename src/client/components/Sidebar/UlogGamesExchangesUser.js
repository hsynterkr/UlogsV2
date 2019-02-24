import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import './User.less';

const UlogGamesExchangesUser = ({ user, handleUserAccountClick }) => (
  <div className="User__links_overflow_x_auto">
    <Link to={`/@${user.name}`} onClick={handleUserAccountClick}>
      <Avatar username={user.name} size={34} />
    </Link>
  </div>
);

UlogGamesExchangesUser.propTypes = {
  user: PropTypes.shape().isRequired,
  handleUserAccountClick: PropTypes.func.isRequired,
};

export default UlogGamesExchangesUser;
