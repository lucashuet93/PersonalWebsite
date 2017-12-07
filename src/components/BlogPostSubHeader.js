import React, { Component } from 'react';

const BlogPostSubHeader = (props) => {
	return (
		<div>
			<div className="spacer" />
			<span className="ms-u-hiddenSm ms-font-xxl">{props.subHeader}</span>
			<span className="ms-u-hiddenMdUp ms-font-xl">{props.subHeader}</span>
		</div >
	)
}

export default BlogPostSubHeader;