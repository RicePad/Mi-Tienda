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
						
						</div>
					</div>
					<div id="category" style={{backgroundColor: '#fff'}}>
						<div className="container nav-cat">
						<ul className="nav navbar-nav">
							<li><a href="/"> Diseno Grafico</a></li>
							<li><a href="/"> Mercadeo Digital</a></li>
							<li><a href="/"> Video/Animacion</a></li>
							<li><a href="/"> Musica & Audio</a></li>
							<li><a href="/"> Programacion & Tech</a></li>
						</ul>
						</div>
					</div>
			</div>
			)
	}
}


export default Navbar;