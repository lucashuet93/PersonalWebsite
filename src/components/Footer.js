import React, { Component } from 'react';

const Footer = (props) => {
	return (
		<div className="ms-Grid-row footer">
			<div className="ms-Grid-col ms-u-sm2 ms-u-md2">
			</div>
			<div className="ms-Grid-col ms-u-sm8 ms-u-md8 iconDiv">
				<a href="https://github.com/lucashuet93"><img className="icon" src={require('../images/githubBlack.png')} /></a>
				<a href="https://twitter.com/lucashuet93"><img className="icon" src={require('../images/twitterBlack.png')} /></a>
				<a href="https://www.linkedin.com/in/lucas-huet-hudson-0a7110a9/"><img className="icon linkedin" src={require('../images/linkedinBlack.png')} /></a>
			</div>
			<div className="ms-Grid-col ms-u-sm2 ms-u-md2">
			</div>
		</div>
	)
}

export default Footer;