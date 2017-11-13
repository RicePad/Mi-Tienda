import React, { Component } from 'react';
import axios from 'axios';
import GigItem from '../components/GigItem';


class GigList extends Component {
	constructor(props){
		super(props);

		this.state = {
			gigs: []
		}
	}


	componentDidMount(){
		axios.get("http://localhost:5000/api/v1/gigs.json")
			.then(response => {
				console.log(response)
				this.setState({ gigs: response.data})
			})

			.catch(error => console.log(error))
	}			
	
	render(){
			console.log('this.state', this.state);
		
		return(
			<div>
				{
					this.state.gigs.map((gig, index) => {
						return(
								
								<GigItem gig={gig} key={index} />
							)
					})
				}
			</div>
			)
	}
}




export default GigList;