import React from 'react';
import PropTypes from 'prop-types';
import '../Avatar.less';
import './User.less';

const UloggerTVThumbnail = ({ video }) => (
  <div className="User__links_overflow_x_auto" key={video.id.videoId}>
    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
      <div
        className="Avatar"
        style={{
          backgroundImage: `url(${video.snippet.thumbnails.default.url})`,
          minWidth: '34px',
          width: '34px',
          height: '34px',
          margin: `0 10px`,
        }}
      />
    </a>
  </div>
);

UloggerTVThumbnail.propTypes = {
  video: PropTypes.shape().isRequired,
};

export default UloggerTVThumbnail;
