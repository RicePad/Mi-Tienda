// export const FETCH_GIGS = "FETCH_GIGS";
import axios from 'axios';
export const FETCH_GIGS = 'FETCH_GIGS';
export const CREATE_GIG = 'CREATE_GIG';
export const RECIEVE_ALL_GIGS = 'RECIEVE_ALL_GIGS';

const ROOT_URL= "http://localhost:5000/api/v1/gigs"


export function fetchGigs(){

	const request= axios.get(`${ROOT_URL}`);
	
	return {
		type: FETCH_GIGS,
		payload: request
	}	
}

// export function createGig(values){
// 	const request = axios.post(`${ROOT_URL}`, values);

// 	return {
// 		type: CREATE_GIG,
// 		payload: request
// 	}

// }

export function createGig(values){
    const request = axios.post(`${ROOT_URL}`, values) 
     
     return {
         type: CREATE_GIG,
         payload: request
         
     }}



//  function recieveGigs(gigs){

	
// 	return {
// 		type: RECIEVE_ALL_GIGS,
// 		gigs
		
// 	}

// }

// function fetchGigsJson(){
// 	return fetch(`http://localhost:5000/api/v1/gigs/${1}`)
// 		.then(response => response.json())

// }



// export function fetchGig(){
// 	return function(dispatch){

// 		return fetchGigsJson()
// 			.then(json => dispatch(recieveGigs(json)))
// 	}
// }



//  function recieveGigs(gigs) {
// 	const action = {
// 		type: FETCH_GIGS,
// 		gigs
// 	}
// 	return action;
// }




// function fetchGigsJson(){
// 	return fetch('http://localhost:5000/api/v1/gigs.json')
// 		.then(response => {
// 			console.log(response)
// 			response.json()
// 		})
// 		.catch(error => console.log(error))
// }	



// export function fetchGigs(){
// 		return function(dispatch){
// 			return fetchGigsJson()
// 				.then(json => dispatch(recieveGigs(json)))
// 		}
// }

// export function fetchGigs(){
// 	return(dispatch) => {
// 		return axios.fetch('http://localhost:5000/api/v1/gigs.json')
// 		.then(response => {
// 			console.log(response)

// 			dispatch(recieveGigs(response.data))

// 		})
// 		.catch(error => console.log(error))

// 	}}	