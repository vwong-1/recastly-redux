import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';
/*
 * Always has an updated slice of the relevant key
 * Updated everytime the dispatch causes the reducer produces a brand new state that replaces the old state
 * Param: the whole state object
 * Contains: slice out the part we need and creates a new object
 */
var mapStateToProps = (state) => ({
  videos: state.videoList
});
/**
 * Provides our component with the functions we need to run
 */
var mapDispatchToProps = (dispatch) => ({
  handleVideoListEntryTitleClick: (video) => (
    dispatch(changeVideo(video))
  )
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
