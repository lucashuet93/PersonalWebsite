import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime, vs } from 'react-syntax-highlighter/styles/hljs';
import BlogPostSubHeader from '../components/BlogPostSubHeader';

class JSON_Operations_In_Azure_Logic_Apps extends Component {
	render() {
		const codeString1 = `public class EmailNotification
    {
        public string UserEmail { get; set; }
        public string Subject { get; set; }
        public string Content { get; set; }
    }
`;
		const codeString2 = `json(INPUT_TO_CONVERT).PROPERTY_NAME`;
		const codeString3 = `json(triggerBody()['MessageText']).PROPERTY_NAME`;
		return (
			<div className="ms-font-m ms-fontWeight-semilight blogPost">
				
				<p>Azure Logic Apps offer the ability to easily automate workflows without writing any code, instead using a visual interface found on the Azure Portal. Each step in a workflow will generally return a strongly typed object, and Logic Apps provide operations to inject the parameters of these objects into subsequent steps in the workflow. In several cases, however, Logic Apps will not be aware of the structure of an object and you will not have the ability to use Dynamic Content. Instead, you must perform additional operations to use the properties from these objects. </p>
				<p>I’ll explore how to convert unknown objects into strongly typed JSON objects, both through the visual designer as well as actual code. To illustrate, I’ll guide you through a common scenario - triggering notification emails to a user of your service.  </p>

				<BlogPostSubHeader subHeader="Dynamic Content in Known JSON Objects" />
				<p>It’s important to understand how Dynamic Content traditionally works in a Logic App, so let’s take a look at an example that uses an HTTP Request Trigger. The HTTP Request trigger will generate an HTTP endpoint that can receive incoming requests from any external service. The endpoint will be expecting POST requests that send JSON objects in the body. In this case, I am sending instantiations of the <span className="ms-fontWeight-semibold">EmailNotification</span> class in a .NET project. </p>
				<SyntaxHighlighter language='cs' style={vs}>{codeString1}</SyntaxHighlighter>
				<p>Logic Apps need to understand the structure of the objects you’ll be sending, and the interface gives you the ability to define an example payload. In this case, the Logic App will receive simple JSON objects with 3 string properties, <span className="ms-fontWeight-semibold">UserEmail</span>, <span className="ms-fontWeight-semibold">Subject</span>, and <span className="ms-fontWeight-semibold">Content</span>, in order to craft the notification email. </p>
				<p>Within the HTTP Request trigger interface, you are able to provide a sample payload and the Logic App will intelligently produce a schema definition with strongly typed properties.</p>
				<img src={require("../images/SampleJSONPayload.jpg")}></img>
				<p>Resultant Schema:</p>
				<img src={require("../images/HttpRequestSchema.jpg")}></img>
				<p>After adding an <span className="ms-fontWeight-semibold">Office 365 Outlook – Send an Email</span> action, as soon as the cursor is placed in any of the email fields, Logic Apps offers Dynamic Content on the right side of the action! The results from the HTTP Request can now be easily placed into the email fields. </p>
				<img src={require("../images/DynamicContentHttp.jpg")}></img>
				<p>Any post requests made to the Logic App endpoint with a body that matches that schema definition will now successfully trigger emails! Incredibly easy, right? If the Logic App isn’t aware of the structure of the JSON object returned from a step in the workflow, however, it can be a bit trickier. </p>

				<BlogPostSubHeader subHeader="Unknown JSON Objects" />
				<p>Let’s take a look at an example where Logic Apps cannot provide helpful Dynamic Content by default, and require transformations. Rather than make direct POST requests to your Logic App with an HTTP Request trigger, let’s add a layer of abstraction with an Azure Queue. Assume the same JSON object is being sent to a queue, and our Logic App workflow will be triggered when there are new messages in said queue. I’ve added the trigger <span className="ms-fontWeight-semibold">Azure Queues – When there are messages in a queue</span>.</p>
				<p>Logic Apps can intelligently search your Azure resources and find available queues, so this Logic App will check for items in my <span className="ms-fontWeight-semibold">email</span> queue every <span className="ms-fontWeight-semibold">3 minutes</span>.</p>
				<img src={require("../images/SearchCurrentQueues.jpg")}></img>
				<p>Logic Apps are aware that queues have messages, but aren’t able to discern the structure of that message. They will give you <span className="ms-fontWeight-semibold">Message Text</span> in Dynamic Content, which contains your queue message, but that property has no additional structure.  </p>
				<img src={require("../images/NoDynamicContent.jpg")}></img>
				<p>An unknown JSON object is being sent through the Logic App workflow, and the interface can’t assist in injecting its properties into the following steps. Fortunately, we can run additional operations through code or the designer to solve this problem.</p>

				<BlogPostSubHeader subHeader="Logic App Code View – JSON Expression" />
				<p>The Logic App interface is built on top of underlying code, which you can access through the <span className="ms-fontWeight-semibold">Code View</span> pane. The Logic App code is a JSON object itself, and in this case the JSON that relates to the Outlook email is found in <span className="ms-fontWeight-semibold">definition -> actions -> Send_an_email</span>, which should itself have a series of null properties.</p>
				<img src={require("../images/NullCodeView.jpg")}></img>
				<p>Not only do Logic Apps provide Dynamic Content, but they provide helpful methods you can run called Expressions. Using the json() expression, you can convert an input to a JSON type value. The syntax is as follows:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString2}</SyntaxHighlighter>
				<p>In this case, the input is the Message Text returned from the trigger:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString3}</SyntaxHighlighter>
				<p>To reiterate, the properties in the JSON object being sent to the queue are UserEmail, Subject, and Content, so the finalized Send_an_email properties using this syntax, with string interpolation are:</p>
				<img src={require("../images/JsonExpression.jpg")}></img>
				<p>Posting a message to the email queue will trigger the same email as the HTTP Request triggered Logic App!</p>

				<BlogPostSubHeader subHeader="Logic App Designer - Parse JSON Data Operation" />
				<p>The same functionality can be implemented from the Logic App Designer by creating a new <span className="ms-fontWeight-semibold">Data Operations – Parse JSON</span> action to the workflow. Immediately following the Azure Queue trigger (or any step that creates a JSON object of unknown structure), search for "json" and add the action.</p>
				<img src={require("../images/SearchDataOperationsJSON.jpg")}></img>
				<p>The structure of Message Text is currently unknown to the Logic App, but a Parse JSON action is capable of producing a strongly typed schema definition, much like the HTTP Request trigger. The object’s properties must be specified explicitly, achieved by placing Message Text in the <span className="ms-fontWeight-semibold">Content</span> field, then clicking <span className="ms-fontWeight-semibold">Use sample payload to generate schema</span>, and providing the following payload:</p>
				<img src={require("../images/ExampleJSONPayloadParseJSON.jpg")}></img>
				<p>The Logic App will now convert any message sent into the queue into the proper JSON object for use within the ensuing Outlook email step.  Importantly, these properties are now available through Dynamic Content!</p>
				<img src={require("../images/DynamicContentWithJSON.jpg")}></img>

			</div>
		);
	}
}

export default JSON_Operations_In_Azure_Logic_Apps;
