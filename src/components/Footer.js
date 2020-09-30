import React from "react";
import "./Footer.css";

import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-bytesize/github";
import hackerRankIcon from "@iconify/icons-cib/hackerrank";
import linkedInIcon from "@iconify/icons-cib/linkedin";

export default () => {
	return (
		<div>
			<footer className="page-footer">
				<div className="container">
					<div className="row footer-row">
						<div className="col-md-12">
							<a href="https://www.linkedin.com/in/joseph-hall-9883111a8/">
								<Icon icon={linkedInIcon} color="black" className="ico" />
							</a>
							<a href="https://github.com/JoeHall97">
								<Icon icon={githubIcon} color="black" className="ico" />
							</a>
							<a href="https://www.hackerrank.com/Joe_Hall">
								<Icon icon={hackerRankIcon} color="black" className="ico" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
