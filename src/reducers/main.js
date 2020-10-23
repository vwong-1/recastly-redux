import { combineReducers } from 'redux';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

// var rootReducer = () => {};

//TODO: define the root reducer for this app
const rootReducer = combineReducers({
  currentVideo: currentVideoReducer,
  videoList: videoListReducer
})

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
