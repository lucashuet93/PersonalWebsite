import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/styles/hljs';
import BlogPostTitle from '../components/BlogPostTitle';

class Running_Local_Bots_In_Microsoft_Teams extends Component {
	render() {
		const codeString1 = `/node_modules
app.js
package.json`;
		const codeString2 = `"dependencies": {
    "botbuilder": "^3.12.0",
    "botbuilder-teams": "^0.1.6",
    "restify": "^6.3.3"
}`;
		const codeString3 = `let builder = require('botbuilder');
let teams = require('botbuilder-teams');
let restify = require('restify');

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, () => {
	console.log('%s listening to %s', server.name, server.url);
});

let connector = new teams.TeamsChatConnector({
	appId: "YOUR_APP_ID",
	appPassword: "YOUR_APP_PASSWORD"
});

server.post('/api/messages', connector.listen());

let bot = new builder.UniversalBot(connector);

bot.dialog('/', [
	(session, args, next) => {
		let root = session.message.address.serviceUrl;
		let conversationID = session.message.address.conversation.id;
		connector.fetchMembers(root, conversationID, (err, res) => {
			session.send("Your email is %s", res[0].userPrincipalName)
		})
	}
])`;
		const codeString4 = `node app.js`;
		const codeString5 = `npm install -g ngrok`;
		const codeString6 = `ngrok http 3978`;
		return (
			<div className="ms-font-m ms-fontWeight-semilight blogPost">
				<BlogPostTitle title="Running Local Bots in Microsoft Teams" updatedDate="November 29, 2017" />

				<p>Bots utilized in a Microsoft Teams application are able to use technologies specific to Teams that extend the functionality of the bot.
					Leveraging and successfully testing these technologies, however, requires that your bot run inside the Teams ecosystem.
					Creating a proper development environment inside Microsoft Teams is a fairly simple process. You'll need to: </p>
				<ol>
					<li>Run your bot locally</li>
					<li>Create an ngrok tunnel to the localhost port your bot is running on</li>
					<li>Update your registered bot's messaging endpoint to match your ngrok tunnel endpoint</li>
				</ol>
				<p>If you haven't registered a bot with the Bot Framework yet, use <a href="https://docs.microsoft.com/en-us/bot-framework/portal-register-bot">this guide</a> to register one now.</p>

				<div className="spacer"></div>
				<span className="ms-font-xxl">Create and Run the Bot</span>
				<p>You may run any bot for the purposes of this guide, but let's take a look at the Microsoft Teams specific bot I used. It's a simple bot whose sole purpose is to echo the user's email they used to sign into Teams.</p>
				<p>File structure:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString1}</SyntaxHighlighter>
				<p>Dependencies:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString2}</SyntaxHighlighter>
				<p>App.js:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString3}</SyntaxHighlighter>
				<p>The bot is using <a href="https://docs.microsoft.com/en-us/bot-framework/portal-register-bot">botbuilder-teams</a>, an extension of botbuilder, which contains classes and methods that allow you to perform complex actions in Teams. The library allows you to write Compose Extensions, create 1 on 1 chats with specific users, @mention users, and implement a variety of other Teams-specific functionalities. For these to work properly, you'll need to chat with your bot within the Microsoft Teams ecosystem.</p>
				<p>Update the code with your registered bot's <span className="ms-fontWeight-semibold">appId</span> and <span className="ms-fontWeight-semibold">appPassword</span>, then go ahead and run the bot locally:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString4}</SyntaxHighlighter>

				<div className="spacer"></div>
				<span className="ms-font-xxl">Create the Tunnel</span>
				<p>The console should log that the server is listening on 3978. If you're using your own bot, note the port it's running on. You're going to need an https endpoint to load your bot into Teams, which means you won't be able to use the http://localhost:3978 endpoint provided by the restify server. Instead, you'll employ the services of ngrok.</p>
				<p>If you haven't installed ngrok globally before, do so now:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString5}</SyntaxHighlighter>
				<p>Ngrok creates secure tunnels to localhost endpoints. Running the http command creates a secure ngrok endpoint that will route requests to your specific localhost port.</p>
				<p>Provision the tunnel to your local port 3978 (replace with your own port, if necessary):</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString6}</SyntaxHighlighter>
				<p>You should see logs that look something like:</p>
				<img src={require("../images/tunnelLog.jpg")}></img>
				<p>Note the second forwarding address. Any requests sent to this https endpoint will be forwarded onto your localhost! Go ahead and copy it down. </p>

				<div className="spacer"></div>
				<span className="ms-font-xxl">Update Your Bot Framework Settings</span>
				<p>Navigate to the <a href="https://dev.botframework.com/bots">bot framework portal</a> and select the bot you've registered. Next, navigate to the <span className="ms-fontWeight-semibold">Settings</span> tab and find the <span className="ms-fontWeight-semibold">Configuration</span> portion of the page. Paste in your ngrok endpoint and add /api/messages to the end. </p>
				<img src={require("../images/BFngrokEndpoint.jpg")}></img>
				<p>Save your changes, and you're all set! You can now communicate with your bot on any supported channel and have the requests handled by your localhost.</p>

				<div className="spacer"></div>
				<span className="ms-font-xxl">Chat With Your Bot</span>
				<p>It's time to chat with your bot in Teams! On the same <span className="ms-fontWeight-semibold">Configuration</span> portion of the <span className="ms-fontWeight-semibold">Settings</span> page, copy your <span className="ms-fontWeight-semibold">App ID</span>. Open Microsoft Teams (if it was already open, close and re-open) and navigate to the Chat pane. Create a new chat, and paste your App ID on the "To" line.</p>
				<img src={require("../images/TeamsChatID.jpg")}></img>
				<p>Say hello (or anything, really) and the bot will respond with your email! You can now make changes locally and test them inside of Teams. To test your changes, simply make changes to your bot code and re-run your bot locally:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString4}</SyntaxHighlighter>
				<p>If you close your ngrok window, you'll need to create a new tunnel and paste the endpoint into your Bot Framework Settings page again.</p>
			</div>
		);
	}
}

export default Running_Local_Bots_In_Microsoft_Teams;
