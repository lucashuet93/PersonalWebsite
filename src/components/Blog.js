import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { BlogPost, Running_Local_Bots_In_Microsoft_Teams, React_With_Azure_Active_Directory_Integration } from '../blogPosts';
import BlogFooter from './BlogFooter';

class Blog extends Component {
	constructor(p) {
		super()
	}
	generateNotFoundPage() {
		return (
			<div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
					<div className="ms-Grid-col ms-u-sm10 ms-u-md8">
						<p style={{ textAlign: "center" }}>Not Found</p>
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
				</div>
			</div>
		)
	}
	generateHomePage(blogs) {
		return (
			<div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
					<div className="ms-Grid-col ms-u-sm10 ms-u-md8">
						<ul>
							{blogs.map((blog) => {
								let endpoint = `/blog/${blog.url}`
								return <li><NavLink className="link-text" to={endpoint}><span className="ms-font-xl link-text">{blog.title}</span></NavLink></li>
							})}
						</ul>
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
				</div>
			</div>
		);
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
			let selectedBlog = blogs.find((blog) => blog.url === this.props.match.params.title)
			if (selectedBlog) {
				return (
					<div>
						<div className="ms-Grid-row">
							<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
							<div className="ms-Grid-col ms-u-sm10 ms-u-md8">
								{selectedBlog.content}
							</div>
							<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
						</div>
						<div className="spacer"></div>
						<BlogFooter />
					</div>
				)
			} else {
				return this.generateNotFoundPage();
			}
		} else {
			return this.generateHomePage(blogs);
		}
	}
}

export default Blog;
