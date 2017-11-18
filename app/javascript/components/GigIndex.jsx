import React, { Component } from 'react';
import { fetchGigs } from '../actions';
import { connect } from 'react-redux'

class GigIndex extends Component {

	componentDidMount(){
		this.props.fetchGigs()
	}


	render(){
		console.log(this.props.gigs)
		return(
			<div>GigIndex Component</div>
			)
	}
}


function mapStateToProps(state){
	return {
		gigs: state.gigs
	}
}

export default connect(mapStateToProps, { fetchGigs })(GigIndex);