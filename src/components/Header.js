import React, { Component } from "react";
import "./Header.css";
import { Nav, Navbar } from "react-bootstrap";

class Header extends Component {
	render() {
		return (
			<div>
				<Navbar bg="light" expand="lg">
					{/*<Navbar.Brand href="#home">Joseph Hall</Navbar.Brand>*/}
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="justify-content-center" style={{ width: "100%", textAlign: "center" }}>
							<Nav.Item>
								<Nav.Link className="header-link" href="/">
									About Me
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="header-link" href="/ContactMe">
									Contact Me
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link className="header-link" href="/Projects">
									Projects
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Header;
