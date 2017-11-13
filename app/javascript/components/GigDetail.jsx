import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import GigItem from './GigItem';
import GigId from './GigId';



class GigDetail extends Component {
		constructor(props){
			super(props);

			this.state = {
				gigs: [],
				gigId: null
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
		// console.log('this.props from gigdetail', this.props.fetchGigs)
		console.log('this.state.gigdeail', this.state)
		return(
			<div>
				<div>
					{this.state.gigs.map((gig)=> {
						if(this.state.gigId !== gig.id){
							return(
									<GigId gig={gig} key={gig.id} />

								)
						} else {
							return (

								<GigItem gig={gig} key={gig.id} />
						)
						}
					})}
				</div>
		  </div>
			)
	}
}


function mapStateToProps(state){
	
	return{
			grabGigs: state.grabGigs
	}
}
export default connect(mapStateToProps)(GigDetail);
