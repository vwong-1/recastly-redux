import { connect } from 'react-redux';
import Search from '../components/Search.js';
import handleSearchChange from '../actions/search.js';

var mapStateToProps = null; //Has no state to reference

var mapDispatchToProps = (dispatch) =>({
  handleInputChange: (e) => (
    dispatch(handleSearchChange(e.target.value))
  )
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
