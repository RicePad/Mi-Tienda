import React from 'react';
import ReactDOM from 'react-dom';
import GigShowPage from '../components/GigShowPage';
import { fetchGig } from '../actions';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const componentName = document.querySelector('.gig-detail');
const store = createStore(reducers, applyMiddleware(thunk));
// console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchGig())


ReactDOM.render(
	<Provider store={store}>
		<GigShowPage />
	</Provider>, componentName
	);