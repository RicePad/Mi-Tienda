import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, browserHistory, Switch } from 'react-router-dom';
import GigIndex from '../components/GigIndex';
import GigsNew from '../components/GigsNew';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers'; 
// import thunk from 'redux-thunk';
import promise from 'redux-promise'


const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
<Provider store={store(reducers)}>
      <BrowserRouter>
        <Switch>
       	    <Route path="/gigs/new" component={GigsNew} />
	        <Route path="/" component={GigIndex} />
		</Switch>
	 </BrowserRouter>
 </Provider>,  document.querySelector('.application')

	);