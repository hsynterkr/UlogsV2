import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar';
import './User.less';

const UlogGamesExchangesUser = ({ user, handleUserAccountClick, authenticated }) => (
  <div className="User__links_overflow_x_auto" key={user.name}>
    {authenticated && (
      <Link to={`/@${user.name}`} onClick={handleUserAccountClick}>
        <Avatar username={user.name} size={34} />
      </Link>
    )}
    {!authenticated && (
      <a target="_blank" rel="noopener noreferrer" href={process.env.SIGNUP_URL}>
        <Avatar username={user.name} size={34} />
      </a>
    )}
  </div>
);

UlogGamesExchangesUser.propTypes = {
  user: PropTypes.shape().isRequired,
  handleUserAccountClick: PropTypes.func.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default UlogGamesExchangesUser;
