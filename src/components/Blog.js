import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { BlogPost, Running_Local_Bots_In_Microsoft_Teams, React_With_Azure_Active_Directory_Integration } from '../blogPosts';

class Blog extends Component {
	constructor(p) {
		super()
	}
	generateNotFoundPage() {

	}
	generateHomePage(blogs) {
		return (
			<div>
				<ul>
					{
						blogs.map((blog) => {
							let endpoint = `/blog/${blog.url}`
							return <li><NavLink className="link-text" to={endpoint}><span className="ms-font-xl link-text">{blog.title}</span></NavLink></li>
						})
					}
				</ul>
			</div>
		)
	}
	createBlogs() {
		let localBotsInTeams = new BlogPost("running-local-bots-in-microsoft-teams", "Running Local Bots in Microsoft Teams", <Running_Local_Bots_In_Microsoft_Teams />);
		let reactWithActiveDirectory = new BlogPost("react-with-azure-active-directory-integration", "React With Azure Active Directory Integration", <React_With_Azure_Active_Directory_Integration />);
		let blogPosts = [localBotsInTeams, reactWithActiveDirectory];
		return blogPosts;
	}
	render() {
		let blogs = this.createBlogs();
		let content;
		if (this.props.match.params.title) {
			let found = blogs.find((blog) => blog.url === this.props.match.params.title)
			if (found) {
				content = found.content;
			} else {
				content = this.generateNotFoundPage();
			}
		} else {
			content = this.generateHomePage(blogs);
		}
		return (
			<div className="ms-Grid-row">
				<div className="ms-Grid-col ms-u-sm1 ms-u-md3" />
				<div className="ms-Grid-col ms-u-sm10 ms-u-md6">
					{content}
				</div>
				<div className="ms-Grid-col ms-u-sm1 ms-u-md3" />
			</div>
		);
	}
}

export default Blog;
