export const FETCH_GIGS = "FETCH_GIGS";


export default function recieveGigs(gigs) {
	const action = {
		type: FETCH_GIGS,
		gigs
	}
	return action
}


