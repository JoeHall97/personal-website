import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Content.css";

export default () => {
	return (
		<div>
			<Container fluid>
				<Row style={{ height: "80vh" }}>
					<Col lg={2} sm={1} />
					<Col lg={8} sm={10}>
						<div class="text-center" style={{ marginTop: "25%" }}>
							<p class="h2">I am able to be contacted at the following email address:</p>
							<p class="h2">josephdahall@hotmail.co.nz</p>
							<p class="h2" style={{ "padding-top": "50px" }}>
								I am also available for contact via
								<a href="https://www.linkedin.com/in/joseph-hall-9883111a8/"> Linkedin.</a>
							</p>
						</div>
					</Col>
					<Col lg={2} sm={1} />
				</Row>
			</Container>
		</div>
	);
};
