import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class GigItem extends Component {
	
	render(){

		const gig = this.props.gig

		
		return(
			
				<div className="col-md-2">
					<div>
						<Link to={`gigs/${gig.id}`}><img src={gig.thumb_image}/></Link>
					</div>
					<div className="caption">
						<Link to={`gigs/${gig.id}`}><p>
							{gig.title}
							 <span> By RicePad</span>
							 <b className="green pull-right">${gig.price}</b>

						</p></Link>
					</div>
				</div>
			
			)
	}
}


export default GigItem;