import React, { Component } from 'react';
import axios from 'axios';
import GigItem from '../components/GigItem';
import update from 'immutability-helper';




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
	
   addGig(){
   	axios.post('http://localhost:5000/api/v1/gigs', {gig: 
   														{	title: '', 
   														    category: '', 
   														    description: '', 
   														    price: 1, 
   														    main_image: '', 
   														    thumb_image: '', 
   														    status: '1'
   													}})
   		.then(response => {

   			const gigs = update(this.state.gigs, { $splice: [[0, 0, response.data ]]})
   			console.log(response)

   			this.setState({ gigs: gigs })
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