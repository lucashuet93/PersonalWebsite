import React, { Component } from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import About from './About';

class App extends Component {
	render() {
		return (
			<div>
				Header Comp
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
