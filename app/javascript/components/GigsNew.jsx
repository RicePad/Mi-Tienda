import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


class GigsNew extends Component{
	render(){
		return(
			<div>GigNew Component</div>
			)
	}
}


export default reduxForm({
	form: 'GigsNewForm'
})(GigsNew);