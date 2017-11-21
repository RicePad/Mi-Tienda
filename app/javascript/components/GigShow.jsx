import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGig } from '../actions';
import GigShowPage from './GigShowPage'

class GigShow extends Component {


	componentDidMount(){
		const { id }  = this.props.match.params
		this.props.fetchGig(id)
	}


	render(){
		const { gig } = this.props


		if (!gig) {
			return <div>Loading.....</div>
		}
		console.log('this.props.gig', this.props.gig)


		return(
			<div>
				<GigShowPage gig={gig} />
				}
			</div>
			)}



}


function mapStateToProps({ gigs }, ownProps){
	return{
		gig: gigs[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, { fetchGig })(GigShow);