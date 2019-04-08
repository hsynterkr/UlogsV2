import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import Avatar from '../Avatar';
import ViewButton from '../../widgets/ViewButton';
import './User.less';

const UlogStory = ({ story }) => (
  <div key={story.author} className="User">
    <div className="User__top">
      <div className="User__links">
        <Link to={`/@${story.author}`}>
          <Avatar username={story.author} size={34} />
        </Link>
        <Link to={`/@${story.author}`} title={story.author} className="User__name">
          <span className="username">{story.author}</span>
        </Link>
      </div>
      <div className="User__follow">
        <Link to={`/@${story.author}/${story.permlink}`} className="btn btn-primary">
          <Button>View</Button>
        </Link>
      </div>
    </div>
    <div className="User__divider" />
  </div>
);

UlogStory.propTypes = {
  story: PropTypes.shape().isRequired,
};

export default UlogStory;
