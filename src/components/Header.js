import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<div>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/about">About</NavLink>
			</div>
		);
	}
}

export default Header;
