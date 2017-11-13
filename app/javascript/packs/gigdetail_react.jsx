import React from 'react';
import ReactDOM from 'react-dom';
import GigDetail from '../components/GigDetail';

// Redux Setup

const componentName = document.querySelector('.gig-detail')

ReactDOM.render(
	<GigDetail />, componentName
	);