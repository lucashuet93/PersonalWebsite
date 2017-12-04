import React, { Component } from 'react';

class Running_Local_Bots_In_Microsoft_Teams extends Component {
	render() {
		return (
			<div className="ms-font-m">
				<h1>Running Local Bots in Microsoft Teams</h1>

				<p>Bots utilized in a Microsoft Teams application are able to use technologies specific to Teams that extend the functionality of the bot. Leveraging these technologies requires that your bot run inside the Teams ecosystem. Creating a proper development environment inside Microsoft Teams is a fairly simple process.</p>
				<p>You'll need to: </p>
				<ol>
					<li>Run your bot locally</li>
					<li>Create an ngrok tunnel to the localhost port your is running on</li>
					<li>Update your registered bot's messaging endpoint to your ngrok tunnel endpoint</li>
				</ol>
				<p>If you haven't registered a bot with the Bot Framework yet, use <a href="https://docs.microsoft.com/en-us/bot-framework/portal-register-bot">this guide</a> to register one now.</p>
				
				<h2>Create and Run the Bot</h2>
				<p>You may run any bot for the purposes of this guide, but let's take a look at the Microsoft Teams specific bot I used. It's a simple bot whose sole purpose is to echo the user's email they used to sign into Teams.</p>
				<p>File structure:</p>
				<h3>CODE</h3>
				<p>Dependencies:</p>
				<h3>CODE</h3>
				<p>App.js:</p>
				<h3>CODE</h3>
				<p>The bot is using <a href="https://docs.microsoft.com/en-us/bot-framework/portal-register-bot">botbuilder-teams</a>, an extension of botbuilder, which contains classes and methods that allow you to perform complex actions in Teams. The library allows you to write Compose Extensions, create 1 on 1 chats with specific users, @mention users, and implement a variety of other Teams-specific functionalities. For these to work properly, you'll need to chat with your bot within the Microsoft Teams ecosystem.</p>
				<p>Update the code with your registered bot's <span className="ms-fontWeight-semibold">appId</span> and <span className="ms-fontWeight-semibold">appPassword</span>, then go ahead and run the bot locally:</p>
				<h3>CODE</h3>

				<h2>Create the Tunnel</h2>
				
				<p>The console should log that the server is listening on 3978. If you're running your own bot, note the port you're running on, but it's probably 3978 as well. You're going to need an https endpoint to load your bot into Teams, which means you won't be able to use the http://localhost:3978 endpoint provided by the restify server. Instead, you'll employ the services of ngrok.</p>
				<p>If you haven't installed ngrok globally before, do so now:</p>
				<p>Ngrok creates secure tunnels to localhost endpoints. Running the http command creates a secure ngrok endpoint that will route requests to your specific localhost port.</p>
				<p>Provision the tunnel to your local port 3978 (replace with your own port, if necessary):</p>
				<h3>CODE</h3>
				<p>You should see logs that look something like:</p>
				<img src={require("../images/tunnelLog.jpg")}></img>
				<p>Note the second forwarding address. Any requests sent to this https endpoint will be forwarded onto your localhost! Go ahead and copy it down. </p>

				<h2>Update Your Bot Framework Settings</h2>
				<p>Navigate to the <a href="https://docs.microsoft.com/en-us/bot-framework/portal-register-bot">bot framework portal</a> and select the bot you've registered with the Bot Framework. Next, navigate to the <span className="ms-fontWeight-semibold">Settings</span> tab and find the <span className="ms-fontWeight-semibold">Configuration</span> portion of the page. Paste in your ngrok endpoint and add /api/messages to the end. </p>
				<img src={require("../images/BFngrokEndpoint.jpg")}></img>
				<p>Save your changes, and you're all set! You can now communicate with your bot on any supported channel and have the requests handled by your localhost.</p>

				<h2>Chat With Your Bot</h2>
				<p>It's time to chat with your bot in Teams! On the same <span className="ms-fontWeight-semibold">Configuration</span> portion of the <span className="ms-fontWeight-semibold">Settings</span> page, copy your <span className="ms-fontWeight-semibold">App ID</span>. Open Microsoft Teams (if it was already open, close and re-open) and navigate to the Chat pane. Create a new chat, and paste your App ID on the "To" line.</p>
				<img src={require("../images/TeamsChatID.jpg")}></img>
				<p>Say hello (or anything, really) and the bot will respond with your email! You can now make changes locally and test them inside of Teams. To test your changes, simply make changes to your bot code and re-run your bot locally:</p>
				<h3>CODE</h3>
				<p>If you close your ngrok window, simply create a new tunnel and paste the endpoint into your Bot Framework Settings page again.</p>				
			</div>
		);
	}
}

export default Running_Local_Bots_In_Microsoft_Teams;
