import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


class GigsNew extends Component{
	

	renderField(field){
		return(	
			<div className="form-group">
			<label>{field.label}</label>
				<input
					type="text"
					className="form-control"
					{...field.input}
				/>	
			</div>

			)
	}



	render(){
		return(
			<form>
				<Field
					label="Title of Gig"
					name="title"
					component={this.renderField}
				 />
				 <Field
				 	label="Categories"
					name="categories"
					component={this.renderField}
				 />
				 <Field
				 	label="Description"
					name="description"
					component={this.renderField}
				 />
				 <Field
				 	label="Main Image"
				 	name="image"
				 	component={this.renderField}
				 />
				 <Field
				 	label="Thumb Image"
				 	name="thumbimage"
				 	component={this.renderField}
				 />	
			</form>
			)
	}
}


export default reduxForm({
	form: 'GigsNewForm'
})(GigsNew);