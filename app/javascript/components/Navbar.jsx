import React, { Component } from 'react';
import logo from '../assets/logo.png';


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
									<input type="text" className="form-control" placeholder="Busca un servicio.." />
								</div>
						</form>
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">

							</li>
						</ul>
						</div>
					</div>
					<div id="category">
						<div className="container">
						<ul className=" nav navbar-nav">
							<li><a> Diseno Grafico</a></li>
							<li><a> Mercadeo Digital</a></li>
							<li><a> Video/Animacion</a></li>
							<li><a> Musica & Audio</a></li>
							<li><a> Programacion & Tech</a></li>
						</ul>
						</div>
					</div>
			</div>
			)
	}
}


export default Navbar;