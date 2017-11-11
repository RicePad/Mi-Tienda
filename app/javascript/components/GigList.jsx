import React, { Component } from 'react';


class GigList extends Component{
	constructor(props){
		super(props);

		this.state = {
			gigs: []
		}
	}

	render(){
		return(
			<h1>GigList</h1>
			)
	}
}

export default GigList;