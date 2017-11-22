import { FETCH_GIGS } from '../actions';
import { FETCH_GIG, DELETE_GIG } from '../actions';
import _ from 'lodash';

export default function(state = {},  action) {
	switch(action.type) {
		case DELETE_GIG:
			return _.omit(state, action.payload.data);
		case FETCH_GIG:
		    // ES5 syntax, add id to gig to create gig.id into the new ...object
			    // const gig = action.payload.data;
	            // const newState = {...state};
	            // newState[gig.id] = gig
	            // return newStat
			return {...state, [action.payload.data.id]: action.payload.data}

		case FETCH_GIGS:
            return _.mapKeys(action.payload.data, 'id');

		default:
			return state;

	}
}