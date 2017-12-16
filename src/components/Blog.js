import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { BlogPost, Running_Local_Bots_In_Microsoft_Teams, React_With_Azure_Active_Directory_Integration, JSON_Operations_In_Azure_Logic_Apps } from '../blogPosts';
import { List, Icon, FocusZone, FocusZoneDirection } from 'office-ui-fabric-react';
import BlogPostTitle from '../components/BlogPostTitle';
import { Helmet } from 'react-helmet';

class Blog extends Component {
	constructor(p) {
		super()
	}
	renderListItem(blog) {
		let endpoint = `/blog/${blog.url}`
		return (
			<NavLink className="link-text" to={endpoint}>
				<div className="ms-Grid-row blogListItem">
					<div className="ms-Grid-col ms-u-sm7">
						<span className="ms-font-l blogItemLink">{blog.title}</span>
					</div>
					<div className="ms-Grid-col ms-u-sm4">
						{blog.tags.map((tag) => {
							return (
								<div className='tag'>
									<div className="tagContainer">
										<span className="ms-font-m tagText ms-fontWeight-regular">{tag}</span>
									</div>
								</div>
							)
						})}
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md1">
						<i class="ms-Icon ms-Icon--ChevronRight" aria-hidden="true"></i>
					</div>
				</div>
			</NavLink>
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
				<Helmet>
					<title>Lucas Huet-Hudson | Blog</title>
					<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				</Helmet>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
					<div className="ms-Grid-col ms-u-sm10 ms-u-md8 blogList">
						<List
							items={blogs}
							onRenderCell={this.renderListItem.bind(this)}
						/>
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
				</div>
			</div>
		);
	}
	createBlogs() {
		let localBotsInTeams = new BlogPost("running-local-bots-in-microsoft-teams", "Running Local Bots in Microsoft Teams", <Running_Local_Bots_In_Microsoft_Teams />, ["Microsoft Teams", "Bots"], "November 29, 2017");
		let reactWithActiveDirectory = new BlogPost("react-with-azure-active-directory-integration", "Integrate Azure Active Directory into React.js using ADAL.js", <React_With_Azure_Active_Directory_Integration />, ["React.js", "Active Directory"], "December 4, 2017");
		let jsonInLogicApps = new BlogPost("json-operations-in-azure-logic-apps", "JSON Operations in Azure Logic Apps", <JSON_Operations_In_Azure_Logic_Apps />, ["Logic Apps"], "December 8, 2017");
		let blogPosts = [localBotsInTeams, reactWithActiveDirectory, jsonInLogicApps];
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
						<Helmet>
							<title>{selectedBlog.title}</title>
							<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
						</Helmet>
						<div className="ms-Grid-row">
							<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
							<div className="ms-Grid-col ms-u-sm10 ms-u-md8">
								<BlogPostTitle title={selectedBlog.title} updatedDate={selectedBlog.updatedDate} />
								{selectedBlog.content}
							</div>
							<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
						</div>
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
