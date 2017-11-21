import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGig } from '../actions';

class GigShow extends Component {

	componentDidMount(){
		const id = this.props.match.params
		this.props.fetchGig(id)
	}

	render(){
		return(
			<h1>GigShow Component</h1>
			)}



}


function mapStateToProps({ gigs }, ownProps){
	return{
		gig: gigs[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, { fetchGig })(GigShow);