import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchGig, deleteGig } from '../actions';
import GigShowPage from './GigShowPage'
import { Link } from 'react-router-dom';

class GigShow extends Component {


	componentDidMount(){
		const { id }  = this.props.match.params
		this.props.fetchGig(id)
	}

	
	clickDeleteGig() {
		console.log("click click click")
		const { id } = this.props.match.params
		this.props.deleteGig(id, () => {
        this.props.history.push('/gigs');
        
      })
	}


	render(){
		const { gig } = this.props


		if (!gig) {
			return <div>Loading.....</div>
		}
		console.log('this.props.gig', this.props.gig)


		return(
			<div>
				<GigShowPage gig={gig} clickDeleteGig={this.clickDeleteGig.bind(this)} />
				
			</div>
			)}



}


function mapStateToProps({ gigs }, ownProps){
	return{
		gig: gigs[ownProps.match.params.id]
	}
}

export default connect(mapStateToProps, { fetchGig, deleteGig })(GigShow);