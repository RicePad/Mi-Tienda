import { FETCH_GIGS } from '../actions';


export default function fetchGigs(state = [], action){
	switch(action.type) {
		case FETCH_GIGS:
			return action.gigs
		
		default:
			return state;
	}
}