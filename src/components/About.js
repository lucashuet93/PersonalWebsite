import React, { Component } from 'react';

class About extends Component {
	render() {
		return (
			<div>
				<div className="ms-Grid-row">
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
					<div className="ms-Grid-col ms-u-sm10 ms-u-md8">
						<div className="ms-Grid-row aboutDiv">
							<div className="ms-Grid-col ms-u-sm12 ms-u-md12 ms-font-m ms-fontWeight-semilight">
								<span className="ms-font-xxl">Who Am I?</span>
								<p>
									I’m a Node.js and .NET developer in Microsoft’s Commercial Software Engineering department, helping our largest partners build complex solutions using the services and platform provided by Azure. I’m primarily focused on intricate UIs, intelligent bots, and serverless technologies, but my interests and skills are ever-evolving in the face of constant technological change. 
								</p>
							</div>
						</div>
						<div className="ms-Grid-row">
							<div className="ms-Grid-col ms-u-sm12 ms-u-hiddenMdUp ms-font-m ms-fontWeight-semilight">
								<span className="ms-font-xxl">How Did I Get Here?</span>
								<img className="me-mobile me" src={require("../images/lucashh.jpg")} align="right"></img>
								<p>
									Well, I graduated from the University of North Carolina in 2015 as a double major in Economics and Philosophy…. and used none of it. Shortly after graduation, in my quest for the perfect role, I decided it would behoove me to learn a bit about coding. After all, I was moving to Seattle, right?
								</p>
								<p>
									I hopped on codecademy, started learning about this “JavaScript” thing, and the rest was history. I had been introduced to the world of coding and instantly fallen in love.
								</p>
								<p>
									Armed with an obsessive personality (to put it lightly) and a fervent desire to possess the power to build <span className="italics">anything</span> I dreamed up, I began to live and breathe code. By mid-2016, I had begun working as a contractor at Microsoft, and then started work as a full time SDE in Commercial Software Engineering that November. Today, I help some of Microsoft’s largest partners build complex solutions using the services and platform provided by Azure.
								</p>
							</div>
							<div className="ms-Grid-col ms-u-hiddenSm ms-u-md12 ms-font-m ms-fontWeight-semilight howDid-web">
								<span className="ms-font-xxl">How Did I Get Here?</span>
								<img className="me me-web" src={require("../images/lucashh.jpg")} align="right"></img>
								<p>
									Well, I graduated from the University of North Carolina in 2015 as a double major in Economics and Philosophy…. and used none of it. Shortly after graduation, in my quest for the perfect role, I decided it would behoove me to learn a bit about coding. After all, I was moving to Seattle, right?
								</p>
								<p>
									I hopped on codecademy, started learning about this “JavaScript” thing, and the rest was history. I had been introduced to the world of coding and instantly fallen in love.
								</p>
								<p>
									Armed with an obsessive personality (to put it lightly) and a fervent desire to possess the power to build <span className="italics">anything</span> I dreamed up, I began to live and breathe code. By mid-2016, I had begun working as a contractor at Microsoft, and then started work as a full time SDE in Commercial Software Engineering that November. Today, I help some of Microsoft’s largest partners build complex solutions using the services and platform provided by Azure.
								</p>
							</div>
						</div>
					</div>
					<div className="ms-Grid-col ms-u-sm1 ms-u-md2" />
				</div>
			</div>
		);
	}
}

export default About;
