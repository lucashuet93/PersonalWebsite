import React, { Component } from 'react';

class Blog extends Component {
	constructor(p){
		super()
	}
	render() {
		if(this.props.match.params.id){
			console.log('user wants to read a blog post!')
		}
		return (
			<div className="ms-Grid-row">
				<div className="ms-Grid-col ms-u-sm1 ms-u-md3"/>
				<div className="ms-Grid-col ms-u-sm10 ms-u-md6">
					Blog
				</div>
				<div className="ms-Grid-col ms-u-sm1 ms-u-md3" />
			</div>
		);
	}
}

export default Blog;
