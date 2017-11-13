import React, { Component } from 'react';
import axios from 'axios';


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
				<h1>Gig List</h1>
				{
					this.state.gigs.map((gig, index) => {
						return(
								<div>
									<h2 key={index}>{gig.title}</h2>
								</div>
							)
					})
				}
			</div>
			)
	}
}




export default GigList;