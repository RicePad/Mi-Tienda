import React, { Component } from 'react';
import bannerImg from '../assets/banner.gif';


class AppBanner extends Component {
	

	render(){
		return(
			<div>
				<div className="row">
				    <div className="col-md-12">
				    	<img  src={ bannerImg } className="banner" />
					</div>
				</div>
			</div>
			)
	}
}


export default AppBanner;