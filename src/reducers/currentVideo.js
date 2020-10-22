import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case "CHANGE_VIDEO":
      return action.payload || null;
    default:
      return state
  }
};

export default currentVideoReducer;
