import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import GigItem from './GigItem';
import GigId from './GigId';



class GigShowPage extends Component {
		constructor(props){
			super(props);

			this.state = {
				gigs: [],
				gigId: null
			}
		}



	componentDidMount(){
		axios.get(`http://localhost:5000/api/v1/gigs/${1}`)
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
					<GigId gig={this.state.gigs} />
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
export default connect(mapStateToProps)(GigShowPage);
