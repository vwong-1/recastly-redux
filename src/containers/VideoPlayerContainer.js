import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProp = (state) => ({
  video: state.currentVideo
});

var mapDispatchToProp = null;

var VideoPlayerContainer = connect(mapStateToProp, mapDispatchToProp)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;




// var VideoPlayer = ({video}) => (
//   !video
//     ? <div className="video-player">Please wait...</div>
//     : <div className="video-player">
//       <div className="embed-responsive embed-responsive-16by9">
//         <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
//       </div>
//       <div className="video-player-details">
//         <h3>{video.snippet.title}</h3>
//         <div>{video.snippet.description}</div>
//       </div>
//     </div>
// );