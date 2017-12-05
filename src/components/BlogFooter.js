import React, { Component } from 'react';

const BlogPostFooter = (props) => {
	return (
		<div className="ms-Grid-row footer">
			<div className="ms-Grid-col ms-u-sm4 ms-u-md4">
			</div>
			<div className="ms-Grid-col ms-u-sm4 ms-u-md4 iconDiv">
				<a href="https://github.com/lucashuet93"><img className="icon" src={require('../images/githubBlack.png')} /></a>
				<a href="https://twitter.com/lucashuet93"><img className="icon" src={require('../images/twitterBlack.png')} /></a>
				<a href="https://www.linkedin.com/in/lucas-huet-hudson-0a7110a9/"><img className="icon linkedin" src={require('../images/linkedinBlack.png')} /></a>
			</div>
			<div className="ms-Grid-col ms-u-sm4 ms-u-md4">
			</div>
		</div>
	)
}

export default BlogPostFooter;