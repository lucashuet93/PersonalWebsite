import React, { Component } from 'react';
import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import About from './About';
import Header from './Header';

class App extends Component {
	render() {
		return (
			<div className="ms-Grid">
				<Header/>
				<Switch>
					<Route exact path='/' component={Blog} />
					<Route exact path='/about' component={About} />
					<Route path='/blog' component={Blog} />
				</Switch>
			</div>
		);
	}
}

export default App;
