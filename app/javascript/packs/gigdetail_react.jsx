import React from 'react';
import ReactDOM from 'react-dom';
import GigDetail from '../components/GigDetail';
import { fetchGigs } from '../actions';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const componentName = document.querySelector('.gig-detail');
const store = createStore(reducers, applyMiddleware(thunk));
// console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchGigs())


ReactDOM.render(
	<Provider store={store}>
		<GigDetail />
	</Provider>, componentName
	);