import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Footer.css";

import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-bytesize/github";
import hackerRankIcon from "@iconify/icons-cib/hackerrank";
import linkedInIcon from "@iconify/icons-cib/linkedin";

export default () => {
	return (
		<div>
			<footer className="page-footer">
				<Container>
					<Row className="footer-row">
						<Col md="12">
							<a href="https://www.linkedin.com/in/joseph-hall-9883111a8/">
								<Icon icon={linkedInIcon} color="black" className="ico" />
							</a>
							<a href="https://github.com/JoeHall97">
								<Icon icon={githubIcon} color="black" className="ico" />
							</a>
							<a href="https://www.hackerrank.com/Joe_Hall">
								<Icon icon={hackerRankIcon} color="black" className="ico" />
							</a>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
};
