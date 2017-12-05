import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="ms-Grid-row ms-bgColor-black ms-fontColor-white header">
				<div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-font-xxl">LH2</div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md5" />
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/blog"><span className="ms-font-xl ms-fontColor-white link-text">Blog</span></NavLink></div>
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/about"><span className="ms-font-xl ms-fontColor-white link-text">About</span></NavLink></div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md1" />
			</div>
		);
	}
}

export default Header;
