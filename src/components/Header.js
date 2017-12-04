import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="ms-Grid-row ms-bgColor-black ms-fontColor-white header">
				<div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-font-xxl">LH2</div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md2" />
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/blog"><span className="ms-font-xl ms-fontColor-white link-text">Blog</span></NavLink></div>
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/about"><span className="ms-font-xl ms-fontColor-white link-text">About</span></NavLink></div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md1" />
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md1" />
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md2 headerDiv">
					<a href="https://github.com/lucashuet93"><img className="icon" src={require('../images/github.png')} /></a>
					<a href="https://twitter.com/lucashuet93"><img className="icon" src={require('../images/twitter.png')} /></a>
					<a href="https://www.linkedin.com/in/lucas-huet-hudson-0a7110a9/"><img className="icon linkedin" src={require('../images/linkedin.png')} /></a>
				</div>
			</div>
		);
	}
}

export default Header;
