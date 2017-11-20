import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createGig } from '../actions'


class GigsNew extends Component{

	renderField(field){
		const { meta: { touched, error } } = field;
		const className= `form-group ${touched && error ? 'text-danger' : ''}`;
		
		return(	
			<div className={className}>
				<label>{field.label}</label>
				<input
					type="text"
					className="form-control"
					{...field.input}
				/>	
				<div className="text-danger">
				{touched ? error : ''}
				</div>
			</div>

			)
	}

	renderIntegerField(field){
		return(
			<div className="form-group">
					<label>{field.label}</label>
				
				<input
					type="number"
					{ ...field.input }
				/>
					{field.meta.error}
		    </div>
			)
	}


	onSubmit(values){
        this.props.createGig(values)
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
				 	label="Price"
					name="price"
					component={this.renderIntegerField}
				 />
				  <Field
				 	label="Status"
					name="status"
					component={this.renderIntegerField}
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

				 <button type="submit" className="btn btn-success">Submit</button>
				 {" "}
				 <Link to={'/gigs'}><button type="submit" className="btn btn-danger">Cancel</button></Link>

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
	if(!values.price){
		errors.price = "Enter a Price";
	}
	if(!values.status){
		errors.status = "Enter a Status";
	}
	if(!values.main_image){
		errors.main_image = "Enter a image";
	}
	if(!values.thumb_image){
		errors.thumb_image = "Enter a thumb image";
	}


	return errors;
}

export default reduxForm({
    validate: validate,
    form: 'GigsNewForm'
    
})(
    connect(null, { createGig })(GigsNew));