import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  // let search = {
  //   key: YOUTUBE_API_KEY,
  //   query: q,
  //   max: 5
  // };
  //searchYouTube(search, (data) => (console.log(data)));
  return _.debounce((dispatch) => {
    console.log(YOUTUBE_API_KEY, q);
    let search = {
      key: YOUTUBE_API_KEY,
      query: q,
      max: 5
    };
    searchYouTube(search, (videos) => {
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  }, 1000)
};

export default handleVideoSearch;
//Query is Typed => this.state.value => handleVideoSearch
