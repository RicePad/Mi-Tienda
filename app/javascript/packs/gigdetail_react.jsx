import React from 'react';
import ReactDOM from 'react-dom';
import GigDetail from '../components/GigDetail';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const componentName = document.querySelector('.gig-detail')
const store = createStore(reducers)
console.log('store.getState()', store.getState())


ReactDOM.render(
	<Provider store={store}>
		<GigDetail />
	</Provider>, componentName
	);