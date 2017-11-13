import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGigs } from '../actions';

class GigDetail extends Component {
	
	render(){
		console.log('this.props from gigdetail', this.props.fetchGigs)
		return(
			<div>
				<h1>GigDetail</h1>
			</div>
			)
	}
}


function mapStateToProps(state){
 return {
 	gig: state.fetchGigs

 }
}

export default connect(mapStateToProps, { fetchGigs })(GigDetail);