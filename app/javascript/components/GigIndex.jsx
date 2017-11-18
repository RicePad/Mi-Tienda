import React, { Component } from 'react';
import { fetchGigs } from '../actions';
import { connect } from 'react-redux'
import _ from 'lodash';
import GigItem from './GigItem';

class GigIndex extends Component {

	componentDidMount(){
		this.props.fetchGigs()
	}

	

	render(){
		// console.log(this.props.gigs)
		return(
			<div>
				<h1>GigIndex List</h1>
				
			{ /********************** Render GigItem Component *********************** */ }
 
 				{
					_.map(this.props.gigs, gig => {
						return(
								<GigItem gig={gig} key={gig.id} />
							)
					})
				}
			</div>
			)
	}
	         /********************** End of GigItem Component *********************** */ 

}


function mapStateToProps(state){
	return {
		gigs: state.gigs
	}
}

export default connect(mapStateToProps, { fetchGigs })(GigIndex);