import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/styles/hljs';
import BlogPostTitle from '../components/BlogPostTitle';
import BlogPostSubHeader from '../components/BlogPostSubHeader';

class JSON_Operations_In_Azure_Logic_Apps extends Component {
	render() {
		const codeString1 = `npm install -g create-react-app`;;
		return (
			<div className="ms-font-m ms-fontWeight-semilight blogPost">

				<BlogPostTitle title="JSON Operations in Azure Logic Apps" updatedDate="December 8, 2017" />

				<BlogPostSubHeader subHeader="Dynamic Content in Known JSON Objects" />
				<img src={require("../images/BlankLogicAppTemplate.jpg")}></img>
				<img src={require("../images/HttpRequestSearch.jpg")}></img>
				<img src={require("../images/SampleJSONPayload.jpg")}></img>
				<img src={require("../images/HttpRequestSchema.jpg")}></img>
				<img src={require("../images/SendAnEmailTrigger.jpg")}></img>
				<img src={require("../images/DynamicContentHttp.jpg")}></img>

				<BlogPostSubHeader subHeader="Logic App Code View – JSON Expression" />
				<img src={require("../images/NullCodeView.jpg")}></img>
				<img src={require("../images/JsonExpression.jpg")}></img>

				<BlogPostSubHeader subHeader="Logic App Designer - Parse JSON Data Operation" />
				<img src={require("../images/QueueSearch.jpg")}></img>
				<img src={require("../images/SearchCurrentQueues.jpg")}></img>
				<img src={require("../images/NoDynamicContent.jpg")}></img>
				<img src={require("../images/SearchDataOperationsJSON.jpg")}></img>
				<img src={require("../images/ExampleJSONPayloadParseJSON.jpg")}></img>
				<img src={require("../images/DynamicContentWithJSON.jpg")}></img>
				<img src={require("../images/QueueSearchDelete.jpg")}></img>
				<img src={require("../images/DeleteQueueMessageStep.jpg")}></img>

			</div>
		);
	}
}

export default JSON_Operations_In_Azure_Logic_Apps;
