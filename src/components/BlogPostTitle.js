import React, { Component } from 'react';

const BlogPostTitle = (props) => {
	return (
		<div>
			<div className="blogPostTitle">
				<span className="ms-font-su">{props.title}</span>
			</div>
			<div className="blogPostUpdatedDate">
				<img src={require("../images/lucashhCropped.jpg")}></img><span>Last Updated: {props.updatedDate}</span>
			</div>

		</div>
	)
}

export default BlogPostTitle;