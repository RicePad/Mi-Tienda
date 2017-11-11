import React, { Component } from 'react';
import axios from 'axios';


class GigList extends Component{
	constructor(props){
		super(props);

		this.state = {
			gigs: []
		}
	}


	fetchGigs(){

	}

	render(){
		return(
			<h1>GigList</h1>
			)
	}
}

export default GigList;