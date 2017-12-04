import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/styles/hljs';

class React_With_Azure_Active_Directory_Integration extends Component {
	render() {
		const codeString1 = `npm install -g create-react-app`;
		const codeString2 = `create-react-app react-ad`;
		const codeString3 = `cd react-ad
npm start`;
		const codeString4 = `npm install --save adal-angular`;
		const codeString5 = `
import * as AuthenticationContext from 'adal-angular';

const azureADCredentials = {
	instance: 'https://login.microsoftonline.com/',
	tenant: "YOUR_TENANT",
	clientId: "YOUR_CLIENT_ID",
	postLogoutRedirectUri: encodeURI("YOUR_ENDPOINT"),
	redirectUri: encodeURI("YOUR_ENDPOINT"),
	cacheLocation: 'localStorage'
};

export class AzureADHelper {
	constructor() {
		this.authContext = new AuthenticationContext(azureADCredentials);
		this.authContext.handleWindowCallback();
		this.getCurrentUser = this.getCurrentUser.bind(this)
		this.login = this.login.bind(this)
		this.logout = this.logout.bind(this)
	}
	getCurrentUser(){
		return this.authContext.getCachedUser();
	}
	logout(){
		this.authContext.logOut();
	}
	login(){
		this.authContext.login();
	}
}`;
		const codeString6 = `import React, { Component } from 'react';
import './App.css';
import { azureADHelper } from './azureAD';

class App extends Component {
	constructor(){
		super()
		this.state = {
			azureADHelper: new azureADHelper(),
			firstName: null
		}
	}
	readCurrentUser() {
		let user = this.state.azureADHelper.getCurrentUser();
		if (user === null) {
			this.setState({
				firstName: null
			})
		} else {
			this.setState({
				firstName: user.profile.given_name
			})
		}
	}
	render() {
		let greeting = this.state.firstName ? "Hi " + this.state.firstName + "!" : "No user found";
		return (
			<div className="App">
				<header className="App-header">
					<h3>{greeting}</h3>
				</header>
				<button onClick={this.state.azureADHelper.login}>Login</button>
				<button onClick={this.state.azureADHelper.logout}>Logout</button>
				<button onClick={this.readCurrentUser.bind(this)}>Read Current User</button>
			</div>
		);
	}
}

export default App;`;
		const codeString7 = `
componentWillMount() {
	let user = this.state.azureADHelper.getCurrentUser();
	if (user === null) {
		this.state.azureADHelper.login();
	} else {
		this.setState({
			firstName: user.profile.given_name
		})
	}
}`;
		return (
			<div className="ms-font-m blogPost">
				<h1>Integrate Azure Active Directory into React.js using ADAL.js</h1>

				<p>Adal.js allows developers to utilize Azure Active Directory for authentication in single-page apps, but the docs state the "library is optimized for working together with AngularJS".
					Does that mean you can't use it in other SPA frameworks? Of course not!
					Let's create a class that can be utilized in a variety of SPA frameworks, with a specific implementation into React.js. </p>

				<h3>Create Your React Project</h3>
				<p>If you haven't installed create-react-app globally before, do so now:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString1}</SyntaxHighlighter>
				<p>Create-react-app is a library that provisions a boilerplate react app for you without build configuration, complete with hot reloading. To create a new React project called "react-ad", run:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString2}</SyntaxHighlighter>
				<p>Once create-react-app is finished provisioning your project, open the folder and run it:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString3}</SyntaxHighlighter>

				<h3>Create an Active Directory v2 App</h3>
				<p>You'll need to spin up a new Active Directory v2 application you can leverage in your SPA.
					Navigate to the new <a href="https://apps.dev.microsoft.com">Microsoft Application Registration Portal</a>, find the <span className="ms-fontWeight-semibold">Converged Applications</span> section, and click <span className="ms-fontWeight-semibold">Add an app</span>.</p>
				<p className="italics">Note: You could also use "Azure AD only applications"</p>
				<img src={require("../images/convergedApps.jpg")}></img>
				<p>The <span className="ms-fontWeight-semibold">Application Name</span> will display on the login page, so select your name accordingly. </p>
				<img src={require("../images/registerYourADApp.jpg")}></img>
				<p>Create the application and it will navigate to your new app's landing page. Locate the <span className="ms-fontWeight-semibold">Platforms</span> section of the page and click <span className="ms-fontWeight-semibold">Add Platform</span>. </p>
				<img src={require("../images/ADPlatformSection.jpg")}></img>
				<p>Select <span className="ms-fontWeight-semibold">Web</span>, and a new Web pane will appear. You'll need to update the <span className="ms-fontWeight-semibold">Redirect URLs</span> property to include the endpoint your app is running on.
					The React project will run on http://localhost:3000 by default.
					If you're running your own app, note the port you are running on and add your localhost as a Redirect URL. </p>
				<img src={require("../images/PlatformsWithRedirect.jpg")}></img>
				<p>One last thing before you're all set. Navigate to the <span className="ms-fontWeight-semibold">Properties</span> section at the top of the page, and copy down your <span className="ms-fontWeight-semibold">Application Id</span>.</p>

				<h3>Create a Reusable AzureADHelper class</h3>
				<p>In your React project, you'll create a helper class with 3 methods that login, logout, and read the current user information. The AADv2 Application you just created will handle these requests.</p>
				<p>Go ahead and install the adal.js package into your project:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString4}</SyntaxHighlighter>
				<p>You can use adal.js to create an AuthenticationContext, which exposes the methods you'll need to authenticate users. Inside the <span className="ms-fontWeight-semibold">/src</span> folder create a new file called AzureADHelper.js and copy the following code:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString5}</SyntaxHighlighter>
				<p>You'll need to insert the Application Id you copied from your Active Directory Application into the <span className="ms-fontWeight-semibold">clientId</span> property. You'll also add the Redirect URL you added into both the <span className="ms-fontWeight-semibold">postLogoutRedirectUri</span> and <span className="ms-fontWeight-semibold">redirectUri</span> properties. Finally, add the name of your organization's <span className="ms-fontWeight-semibold">tenant</span> (example: microsoft.onmicrosoft.com).</p>
				<p>The bind method allows you to use the class methods in any component without confusing the meaning of <span className="ms-fontWeight-semibold">this</span>. You may not require the bind calls in other SPA frameworks.</p>
				<p>You can now instantiate the azureADHelper class in any React.js component (or other SPA framework) and run authentication methods! Pretty simple, right?</p>

				<h3>Use the AzureADHelper class in the React Project</h3>
				<p>Navigate to app.js and utilize your helper class:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString6}</SyntaxHighlighter>
				<p>A small bit of boilerplate has been removed and replaced with 3 buttons. An instance of the AzureADHelper class is instantiated in the constructor, and the class is used by the buttons to login, logout, and read the current user at anytime (your name will display if you have logged in). Run the project and try it out! </p>
				<p>You can force login and read the user's account information on first load with the following code in your app.js:</p>
				<SyntaxHighlighter language='javascript' style={monokaiSublime}>{codeString7}</SyntaxHighlighter>
			</div>
		);
	}
}

export default React_With_Azure_Active_Directory_Integration;
