import React, { Component } from 'react';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';


class Navbar extends Component {

	render(){
		return(
			<div>
				<div className="navbar-inverse">
						<div className="container">
							<div className="navbar-header">
								<img src={ logo }  style={{ height: 40 }} />	
							</div>
							<form className="navbar-form navbar-left" role="search">
								<div className="form-group">
									<SearchBar />
								</div>
						</form>
						
						</div>
					</div>
					<div id="category" style={{backgroundColor: '#fff'}}>
						<div className="container nav-cat">
						<ul className="nav navbar-nav">
							<li><a href="https://worktify.herokuapp.com//gigs">Home</a> </li>
							<li><a href="https://worktify.herokuapp.com/categories/1">Technology</a> </li>
							<li><a href="https://worktify.herokuapp.com/categories/3">Graphic Design</a> </li>
							<li><a href="https://worktify.herokuapp.com/categories/3">Writing & Blogs</a> </li>
							<li><a href="https://worktify.herokuapp.com/categories/4">Video/Animation</a> </li>
							<li><a href="https://worktify.herokuapp.com/categories/5">Music & Audio</a> </li>
						</ul>
						</div>
					</div>
			</div>
			)
	}
}


export default Navbar;