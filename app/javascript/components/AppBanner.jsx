import React, { Component } from 'react';
import bannerImg from '../assets/banner2.jpg';


class AppBanner extends Component {
	

	render(){
		return(
			 <div className="jumbotron jumbotron-billboard">
				  <div className="img">
					  	<img  src={ bannerImg } className="banner" />
					  </div>
					    <div className="container">
					        <div className="row">
					            <div className="col-md-12">
					              <h2>A place where work just happens.</h2>
					                <p>
					                	Freelance services for the lean entrepreneurs.
					                </p>
					            </div>
					        </div>
					    </div>
			</div>
						)
	}
}


export default AppBanner;




