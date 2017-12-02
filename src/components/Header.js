import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="ms-Grid-row">
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md3">Lucas Huet-Hudson</div>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md3">
					<NavLink to="/blog"><span>Blog</span></NavLink></div>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md3">
					<NavLink to="/about"><span>About</span></NavLink></div>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md3">Logos</div>
			</div>
		);
	}
}

export default Header;
