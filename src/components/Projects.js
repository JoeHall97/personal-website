import React from "react";
import "./Content.css";

import pidphoto from "../content/images/PIDController_Code.png";
import policeloginphoto from "../content/images/PolicePhotoTagging.png";
import mapscreenshot from "../content/images/Map.png";

export default () => {
	return (
		<div>
			<div class="content-div" style={{ "padding-top": "100px" }}>
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-sm-12">
							<a href="https://github.com/JoeHall97/HonoursProject">
								<h1 class="display-4 text-center" style={{ "padding-bottom": "75px" }}>
									Honours Disertation Project
								</h1>
							</a>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-12">
							<img class="img-fluid" src={pidphoto} alt="Java code for a PID controller" />
						</div>
						<div class="col-lg-8 col-sm-12">
							<p class="mb-0">
								For my honours disertation I worked on building a benchmarking application that could measure the
								parallel execution of legacy programming langauges. There has been much research showing that legacy
								languages (such as C, Cobol, and Fortran) can be divided into independant processes and then executed
								concurrently. There had, however, been no attempt to find the best way for these programs to be executed
								in parallel, i.e. what is the best way to allocate threads during the run time of these programs. My
								project, therefore, worked towards building a benchmarking application for these legacy applications and
								how effective a PID controller would be compaired to other execution strategies. I built the
								benchmarking application using Java, and analysized the results using python and the Pandas library.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="content-div">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-sm-12">
							<a href="https://github.com/JBAkroyd/PolicePhotoTagging">
								<h1 class="display-4 text-center" style={{ "padding-bottom": "75px" }}>
									Police Photo Tagging Website
								</h1>
							</a>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-12">
							<img class="img-fluid" src={policeloginphoto} alt="Login screen" />
						</div>
						<div class="col-lg-8 col-sm-12">
							<p class="mb-0">
								During one of my university papers, I worked with a group to build a website for the Waikato Police. The
								website allowed for users to upload photos along side a set of tags. These tags could then be used to
								search for all images that have the same tags as one another. The website was built using React, Node,
								and a SQL database.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="content-div">
				<div class="container-fluid">
					<div class="row">
						<div class="col-lg-12 col-sm-12">
							<a href="https://github.com/JoeHall97/PathFinder">
								<h1 class="display-4 text-center" style={{ "padding-bottom": "75px" }}>
									Python Path Finder
								</h1>
							</a>
						</div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-sm-12">
							<img class="img-fluid" src={mapscreenshot} alt="Screenshot of a map file" />
						</div>
						<div class="col-lg-8 col-sm-12">
							<p class="mb-0">
								A python program that I've built to find the shortest path between two points on a map file. The program
								can use depth-first, breadth-first, best-first, and A* algorithms to find this path.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
