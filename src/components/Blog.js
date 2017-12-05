import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { BlogPost, Running_Local_Bots_In_Microsoft_Teams, React_With_Azure_Active_Directory_Integration } from '../blogPosts';
import BlogFooter from './BlogFooter';
import { List, Icon, FocusZone, FocusZoneDirection } from 'office-ui-fabric-react';

class Blog extends Component {
	constructor(p) {
		super()
	}
	renderListItem(blog) {
		let endpoint = `/blog/${blog.url}`
		return (
			<div className="ms-Grid-row blogListItem" data-is-focusable={true}>
				<div className="ms-Grid-col ms-u-sm5 ms-u-md5">
					<NavLink className="link-text" to={endpoint}><span className="ms-font-l ms-font-themePrimary link-text">{blog.title}</span></NavLink>
				</div>
				<div className="ms-Grid-col ms-u-sm6 ms-u-md6">
					{blog.tags.map((tag) => {
						return (
							<div className='tag'>
								<span className="ms-font-m tagText ms-fontWeight-regular">{tag}</span>
							</div>
						)
					})}
				</div>
				<div className="ms-Grid-col ms-u-sm1 ms-u-md1"><i class="ms-Icon ms-Icon--ChevronRight" aria-hidden="true"></i></div>
			</div>
		)
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
					<div className="ms-Grid-col ms-u-sm10 ms-u-md8 blogList">
						<div className="ms-Grid-row blogListItemHeader">
							<div className="ms-Grid-col ms-u-sm5 ms-u-md5">
								<span className="ms-font-xl ms-font-themePrimary link-text">Title</span>
							</div>
							<div className="ms-Grid-col ms-u-sm5 ms-u-md5">
								<span className="ms-font-xl ms-font-themePrimary link-text">Tags</span>
							</div>
							<div className="ms-Grid-col ms-u-sm1 ms-u-md1" />
						</div>
						<FocusZone direction={FocusZoneDirection.vertical}>
							<List
								items={blogs}
								onRenderCell={this.renderListItem.bind(this)}
							/>
						</FocusZone>
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
				</div>
			</div>
		);
	}
	createBlogs() {

		let localBotsInTeams = new BlogPost("running-local-bots-in-microsoft-teams", "Running Local Bots in Microsoft Teams", <Running_Local_Bots_In_Microsoft_Teams />, ["Microsoft Teams", "Bots"]);
		let reactWithActiveDirectory = new BlogPost("react-with-azure-active-directory-integration", "React With Azure Active Directory Integration", <React_With_Azure_Active_Directory_Integration />, ["React.js", "Active Directory"]);
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
