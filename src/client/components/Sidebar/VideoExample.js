import React from 'react';
import YoutubePlayer from 'react-player/lib/players/YouTube';
import './SidebarContentBlock.less';

const VideoExample = () => (
  <div className="SidebarContentBlock">
    <h4 className="mr-10"> See Video Explanation</h4>
    <YoutubePlayer
      className="youtube-player"
      url="https://youtu.be/5tq_rCZURUg"
      width="auto"
      height="auto"
      controls
    />
  </div>
);

export default VideoExample;
