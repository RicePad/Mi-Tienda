import { combineReducers } from 'redux';
import grabGig from './fetch_gigs_reducer.jsx';
import GigIndexReducer from './gig_index_reducer.jsx';


export default combineReducers({
	grabGig,
	gigs: GigIndexReducer

})