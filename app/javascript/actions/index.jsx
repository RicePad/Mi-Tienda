// export const FETCH_GIGS = "FETCH_GIGS";
import axios from 'axios';
export const FETCH_GIGS = 'FETCH_GIGS';
export const CREATE_GIG = 'CREATE_GIG';
export const FETCH_GIG = 'FETCH_GIG';
export const DELETE_GIG = 'DELETE_GIG';
export const RECIEVE_ALL_GIGS = 'RECIEVE_ALL_GIGS';

const ROOT_URL= "http://localhost:5000/api/v1/gigs"


export function fetchGigs(){

	const request= axios.get(`${ROOT_URL}`);
	
	return {
		type: FETCH_GIGS,
		payload: request
	}	
}

export function createGig(values, callback){
    const request = axios.post(`${ROOT_URL}`, values) 
    	.then(() => callback());
     
     return {
         type: CREATE_GIG,
         payload: request
         
     }}


export function fetchGig(id){
	const request = axios.get(`${ROOT_URL}/${id}`);

	return {
		type: FETCH_GIG,
		payload: request
	}

}

export function deleteGig(id, callback){
	const request = axios.delete(`${ROOT_URL}/${id}`)
		.then(() => callback())
	return {
		type: DELETE_GIG,
		id
	}
}


