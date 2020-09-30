import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Projects from "./Projects";
import Footer from "./Footer";

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<BrowserRouter>
					<Header />
					<Route exact={true} path="/" component={AboutMe} />
					<Route exact={true} path="/ContactMe" component={ContactMe} />
					<Route exact={true} path="/Projects" component={Projects} />
					<Footer />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
