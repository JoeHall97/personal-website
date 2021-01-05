import React from "react";
import "./Content.css";
import { Container, Col, Row } from "react-bootstrap";

import pidphoto from "../content/images/PIDController_Code.png";
import policeloginphoto from "../content/images/PolicePhotoTagging.png";
import mapscreenshot from "../content/images/Map.png";

export default () => {
	return (
		<div>
			<Container fluid>
				<Row className="content-row">
					<Col lg={12} sm={12}>
						<a href="https://github.com/JoeHall97/HonoursProject">
							<h1 class="display-4 text-center" style={{ paddingBottom: "50px" }}>
								Honours Disertation Project
							</h1>
						</a>
					</Col>
					<Col lg={1} />
					<Col lg={3} sm={12}>
						<img class="img-fluid" src={pidphoto} alt="Java code for a PID controller" />
					</Col>
					<Col lg={7} sm={12}>
						<p class="mb-0">
							For my honours disertation I worked on building a benchmarking application that could measure
							the parallel execution of legacy programming langauges. There has been much research showing
							that legacy languages (such as C, Cobol, and Fortran) can be divided into independant processes
							and then executed concurrently. There had, however, been no attempt to find the best way for
							these programs to be executed in parallel, i.e. what is the best way to allocate threads during
							the run time of these programs. My project, therefore, worked towards building a benchmarking
							application for these legacy applications and how effective a PID controller would be compaired
							to other execution strategies. I built the benchmarking application using Java, and analysized
							the results using python and the Pandas library.
						</p>
					</Col>
					<Col lg={1} />
				</Row>
				<Row className="content-row">
					<Col lg={12} sm={12}>
						<a href="https://github.com/JBAkroyd/PolicePhotoTagging">
							<h1 class="display-4 text-center" style={{ "padding-bottom": "50px" }}>
								Police Photo Tagging Website
							</h1>
						</a>
					</Col>
					<Col lg={1} />
					<Col lg={3} sm={12}>
						<img class="img-fluid" src={policeloginphoto} alt="Login screen" />
					</Col>
					<Col lg={7} sm={12}>
						<p class="mb-0">
							During one of my university papers, I worked with a group to build a website for the Waikato
							Police. The website allowed for users to upload photos along side a set of tags. These tags
							could then be used to search for all images that have the same tags as one another. The website
							was built using React, Node, and a SQL database.
						</p>
					</Col>
					<Col lg={1} />
				</Row>
				<Row className="content-row-bottom">
					<Col lg={12} sm={12}>
						<a href="https://github.com/JoeHall97/PathFinder">
							<h1 class="display-4 text-center" style={{ "padding-bottom": "50px" }}>
								Python Path Finder
							</h1>
						</a>
					</Col>
					<Col lg={1} />
					<Col lg={3} sm={12}>
						<img class="img-fluid" src={mapscreenshot} alt="Screenshot of a map file" />
					</Col>
					<Col lg={7} sm={12}>
						<p class="mb-0">
							A python program that I've built to find the shortest path between two points on a map file. The
							program can use depth-first, breadth-first, best-first, and A* algorithms to find this path.
						</p>
					</Col>
					<Col lg={1} />
				</Row>
			</Container>
		</div>
	);
};
