export const FETCH_GIGS = "FETCH_GIGS";
import axios from 'axios';


 function recieveGigs(gigs) {
	const action = {
		type: FETCH_GIGS,
		gigs
	}
	return action;
}


export function fetchGigs(){
	return(dispatch) => {
		return axios.get('http://localhost:5000/api/v1/gigs.json')
		.then(response => {
			console.log(response)

			dispatch(recieveGigs(response.data))

		})
		.catch(error => console.log(error))

	}}	