import React, { Component } from 'react';


class GigItem extends Component {
	
	render(){

		const gig = this.props.gig
		console.log("this.props", gig)

		
		return(
			
				<div className="col-md-3">
					<div>
						<img src={gig.thumb_image} />
					</div>
					<div className="caption">
						<p>
							{gig.description}
							 <span>by RicePad</span>
							 <b className="green pull-right">{gig.price}</b>

						</p>
					</div>
				</div>
			
			)
	}
}


export default GigItem;