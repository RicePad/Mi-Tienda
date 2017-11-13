import React, { Component } from 'react';
import  avatarImg  from '../assets/avatar.png';


class GigId extends Component {

	
	renderGigInfo() {
		const gig = this.props.gig
			return(
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
			)

	}


	renderUserInfo() {
				const gig = this.props.gig

		return(

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
	</div>)
	}



	render(){

		return(
				<div className="row">
							{() => this.renderGigInfo()}
							{() => this.renderUserInfo()}

				</div>
			)
	}

}


export default GigId;