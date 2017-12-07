import React, { Component } from 'react';
import connect from 'react-redux'

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = {
			value: ''
		}
	}

	componentDidMount(){
		
	}
	searchInput(event){
		this.setState({value: event.target.value})
	}

	render(){
		console.log(this.state)
		return(
				<div>
					<input 
					placeholder= "search for a service"
					type= "text"
					className="form-control"
					onChange={event => this.setState({value: event.target.value})}
					/>
				</div>
			)
	}	
}


export default SearchBar;