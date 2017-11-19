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
				{field.meta.error}
			</div>

			)
	}


	onSubmit(values){
		console.log(values)
	}


	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
				 	name="main_image"
				 	component={this.renderField}
				 />
				 <Field
				 	label="Thumb Image"
				 	name="thumb_image"
				 	component={this.renderField}
				 />	

			</form>
			)
	}
}

function validate(values){
	
	const errors = {};

	if(!values.title){
		errors.title = "Enter a title";
	}
	if(!values.categories){
		errors.categories = "Enter a category";
	}
	if(!values.description){
		errors.description = "Enter a description";
	}
	if(!values.main_image){
		errors.image = "Enter a image";
	}
	if(!values.thumb_image){
		errors.thumb_image = "Enter a thumb image";
	}


	return errors;
}

export default reduxForm({
	validate,
	form: 'GigsNewForm'
})(GigsNew);