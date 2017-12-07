import React, { Component } from 'react';

class TechnologyFocuses extends Component {
	renderListItem(item) {
		let itemClass = item.last ? "aboutListItem aboutLastListItem" : "aboutListItem";
		return (
			<div className={itemClass}>
				<div className="aboutListItemCont">
					<span className="ms-font-l aboutListTitle">{item.title}</span>
				</div>
				<div className="aboutListItemCont">
					<img className="aboutListImage" src={require(`../images/${item.image}`)}></img>
				</div>
			</div>
		)
	}
	renderMobileListItem(item) {
		let itemClass = item.last ? " aboutListItem aboutListItemMobile aboutLastListItem" : "aboutListItem aboutListItemMobile";
		return (
			<div className={itemClass}>
				<div className="aboutListItemCont">
					<span className="ms-font-l aboutListTitle">{item.title}</span>
				</div>
				<div className="aboutListItemCont">
					<img className="aboutListImage" src={require(`../images/${item.image}`)}></img>
				</div>
			</div>
		)
	}
	render() {
		let items = [
			{
				title: "Node.js",
				image: "node.jpg"
			},
			{
				title: ".NET",
				image: "dotnet.jpg"
			},
			{
				title: "React.js",
				image: "react.png"
			},
			{
				title: "Bots",
				image: "bot.png"
			},
			{
				title: "Serverless",
				image: "serverless.png"
			},
			{
				title: "Teams",
				image: "Teams.png",
				last: true
			},
		];
		let mobileItems = [
			{
				title: "Node.js",
				image: "node.jpg"
			},
			{
				title: ".NET",
				image: "dotnet.jpg"
			},
			{
				title: "React.js",
				image: "react.png",
				last: true
			},
			{
				title: "Bots",
				image: "bot.png"
			},
			{
				title: "Serverless",
				image: "serverless.png"
			},
			{
				title: "Teams",
				image: "Teams.png",
				last: true
			},
		];
		return (
			<div className="ms-Grid-row ">
				<div className="ms-Grid-col ms-u-hiddenSm ms-u-md12 ms-font-m ms-fontWeight-semilight">
					{items.map((item) => {
						return this.renderListItem(item);
					})}
				</div>
				<div className="ms-Grid-col ms-u-sm12 ms-u-hiddenMdUp ms-font-m ms-fontWeight-semilight mobileList">
					{mobileItems.map((item) => {
						return this.renderMobileListItem(item);
					})}
				</div>
			</div>
		)
	}
}

export default TechnologyFocuses;