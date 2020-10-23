import React from 'react';
import VideoListEntry from './VideoListEntry.js';
/*
 * Components grabs the input from container and uses them as the parameters
 */
var VideoList = ({ videos, handleVideoListEntryTitleClick }) => (
  <div className="video-list">
    {
      videos.map(video => (
        <VideoListEntry
          key={video.etag}
          video={video}
          handleVideoListEntryTitleClick={handleVideoListEntryTitleClick}
        />
      ))
    }
  </div>
);

VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

export default VideoList;
