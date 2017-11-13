import { RECIEVE_ALL_GIGS } from '../actions';


export default function memes(state = [], action){
	switch(action.type){
		case RECIEVE_ALL_GIGS:
			return action.gigs

		default:
			return state;
	}

}