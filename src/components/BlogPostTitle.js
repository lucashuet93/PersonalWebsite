import React, { Component } from 'react';

const BlogPostTitle = (props) => {
	return (
		<div>
			<div className="ms-u-hiddenSm blogPostTitle">
				<span className="ms-font-su">{props.title}</span>
			</div>
			<div className="ms-u-hiddenMdUp blogPostTitle">
				<span className="ms-font-xxl">{props.title}</span>
			</div>
			<div className="blogPostUpdatedDate">
				<img src={require("../images/lucashhCropped.jpg")}></img><span className="ms-font-m ms-fontWeight-semilight">Last Updated: {props.updatedDate}</span>
			</div>

		</div>
	)
}

export default BlogPostTitle;