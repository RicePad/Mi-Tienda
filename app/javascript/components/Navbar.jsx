import React, { Component } from 'react';
import logo from '../assets/logo.png';


class Navbar extends Component {

	render(){
		return(
			<div>
				<div class="navbar-inverse">
						<div class="container">
							<div class="navbar-header">
								<img src={ logo }  style={{ height: 40 }} />	
							</div>
							<form class="navbar-form navbar-left" role="search">
								<div class="form-group">
									<input type="text" class="form-control" placeholder="Busca un servicio.." />
								</div>
						</form>
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown">

							</li>
						</ul>
						</div>
					</div>
					<div id="category">
						<div class="container">
						<ul class=" nav navbar-nav">
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