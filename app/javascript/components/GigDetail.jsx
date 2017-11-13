import React, { Component } from 'react';
import { connect } from 'react-redux';


class GigDetail extends Component {
	
	render(){
		// console.log('this.props from gigdetail', this.props.fetchGigs)
		console.log('this.props', this.props)
		return(
			<div>
				{this.props.grabGigs.map(gig => {
					return (
						<div>{gig.title}</div>
						)
				})}
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
