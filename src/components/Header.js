import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="ms-Grid-row ms-bgColor-orangeLight ms-fontColor-white header">
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md5 ms-font-xxl">Lucas Huet-Hudson</div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md2"/>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md1">
					<NavLink className="link-text" to="/blog"><span className="ms-font-xl ms-fontColor-white link-text">Blog</span></NavLink></div>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md1">
					<NavLink className="link-text" to="/about"><span className="ms-font-xl ms-fontColor-white link-text">About</span></NavLink></div>
					<div className="ms-Grid-col ms-u-hiddenSm ms-u-md1"/>
				<div className="ms-Grid-col ms-u-sm4 ms-u-md2">
					<img className="icon" src={require('../images/github.png')}/>
					<img className="icon" src={require('../images/twitter.png')}/>
					<img className="icon linkedin" src={require('../images/linkedin.png')}/>
				</div>
			</div>
		);
	}
}

export default Header;
