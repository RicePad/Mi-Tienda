import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import GigItem from './GigItem';
import GigId from './GigId';
import {fetchGig} from '../actions'
import  avatarImg  from '../assets/avatar.png';


//************ ACCESSED THIS COMPONENT USING REDUX STORE TO PASS PROPS************


class GigShowPage extends Component {
		constructor(props){
			super(props);

			this.state = {
				gigs: [],
				gigId: null
			}
		}



	componentDidMount(){
		// axios.get(`http://localhost:5000/api/v1/gigs/${1}`)
		// 	.then(response => {
		// 		console.log(response)
		// 		this.setState({ gigs: response.data})
		// 	})

		// 	.catch(error => console.log(error))


		//************ ACCESSED THIS COMPONENT USING REDUX STORE TO PASS PROPS************

		this.props.fetchGig
	}	

	

	render(){
		console.log('this.props.grabGigs', this.props.grabGigs)
		const gig = this.props.grabGig
		return(
			<div className="row">
				<div className="col-md-8">
							<div className="panel panel-default">
								<div className="panel-body">
									<h3>{gig.title}</h3>
									<hr/>
									<img src={gig.image} />
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4>{gig.description}</h4>
								</div>
								<div className="panel-body">
									<p>{gig.title}</p>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-heading">
									<h4> Review </h4>
								</div>
								<ul>
									<li className="list-group-item">
										<div className="row">
											<div className="col-md-2">
												<img src={ avatarImg } style={{height: 60}}/>
											</div>
											<div className="col-md-10">
												<h5>RicePad Customer</h5>
												<p>Great Job. This guy is awesome!</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-4">
							<div className="panel panel-default">
								<div className="panel-body">
									<button type="button" className="btn btn-success btn-block">
										Una Orden
									</button>
								</div>
							</div>
							<div className="panel panel-default">
								<div className="panel-body">
									<img src={ avatarImg } style={{height: 100}}/>
									<h4 className="text-center"> RicePad</h4>
									<hr />
									<p>I have 3 years of experience in Python/Django and ReactJS. I'm a cool guy! Haha</p>
								</div>
							</div>
	</div>

		   </div>
			)
	}
}


function mapStateToProps(state){
	
	return{
			grabGig: state.grabGig
	}
}
export default connect(mapStateToProps, { fetchGig })(GigShowPage);
