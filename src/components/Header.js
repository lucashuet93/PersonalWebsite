import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Header extends React.Component {
	render() {
		return (
			<div className="ms-Grid-row ms-bgColor-neutralDark ms-fontColor-white header">
				<div className="ms-Grid-col ms-u-sm6 ms-u-md4 ms-font-xxl">
					<div style={{ verticalAlign: "top", display: "inline-block" }}><span className="letter">L</span></div>
					<div style={{ verticalAlign: "top", display: "inline-block" }}><span className="letter">H</span></div>
					<div style={{ verticalAlign: "top", display: "inline-block" }}><span className="letter">H</span></div>
				</div>
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md6" />
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/blog"><span className="ms-font-m ms-fontWeight-light ms-fontColor-white link-text">BLOG</span></NavLink>
				</div>
				<div className="ms-Grid-col ms-u-sm3 ms-u-md1 headerDiv">
					<NavLink className="link-text" to="/about"><span className="ms-font-m ms-fontWeight-light ms-fontColor-white link-text">ABOUT</span></NavLink>
				</div>
			</div>
		);
	}
}

export default Header;
