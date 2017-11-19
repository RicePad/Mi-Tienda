import { combineReducers } from 'redux';
import grabGig from './fetch_gigs_reducer.jsx';
import GigIndexReducer from './gig_index_reducer.jsx';
import { reducer as formReducer } from 'redux-form';


export default combineReducers({
	grabGig,
	gigs: GigIndexReducer,
	form: formReducer

})