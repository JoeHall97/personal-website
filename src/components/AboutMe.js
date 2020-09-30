import React from "react";
import "./Content.css";

import selfphoto from "../content/images/Profile1.jpg";
import codephoto from "../content/images/Code_Screenshot.png";

export default () => {
	return (
		<div>
			<div>
				<div className="center-page">
					<h1 className="display-1 text-center" style={{ paddingTop: "50%" }}>
						Joseph Hall
					</h1>
					<p className="mb-2 text-center">A Kiwi Software Developer and Computer Enthusiast.</p>
				</div>
				<div className="content-div">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 col-sm-12 col-xs-12">
								<img src={selfphoto} alt="Myself" className="img-thumbnail"></img>
							</div>
							<div className="col-lg-8 col-sm-12 col-xs-12">
								<p className="mb-0">
									I am a junior software developer living in New Zealand. I'm a graduate from the University of Waikato,
									and have attained a Bachelors of Computing and Mathematical Sciences with Honours (Second className,
									First Division), majoring in Computer Science and Philosophy.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="content-div">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-4 order-lg-12 col-sm-12">
								<img src={codephoto} alt="Code for a reg-x parser in Java" className="img-fluid"></img>
							</div>
							<div className="col-lg-8 order-lg-1 col-sm-12">
								<p className="mb-0">
									Computer science has been a passion of mine since highschool. I am proficient in many different
									programming languages, including: Java, Python, Javascript, C#, C/C++, SQL, Scala, and Clojure. I'm
									also proficient with various tools such as: Node, React, git, BASH, Linux (Ubuntu and RHEL), Microsoft
									Azure, Amazon Web Services, and Latex.
								</p>
								<p className="mb-0">
									I enjoy computer science because it allows me to take real world problems, figure out how best to
									solve them, and then implement the solution. The blending of theory and practice is something I find
									enjoyable, as it requires two different skill sets to be used making it more challenging than just
									doing one or the other.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="content-div">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-5 col-sm-12">
								<blockquote className="blockquote text-center vertical-center">
									<p className="mb-0">1) The world is all that is the case.</p>
									<footer className="blockquote-footer">
										Ludwig Wittgenstein,{" "}
										<cite title="Tractatus Logico-Philosophicus">Tractatus Logico-Philosophicus</cite>
									</footer>
								</blockquote>
							</div>
							<div className="col-lg-7 col-sm-12">
								<p className="mb-0">
									Along side computer science I also have a deep interest in Philosophy. Analytic philosophy was what I
									studied at university, with a focus on epistemology (the study of knowledge) and metaphysics (the
									study of the nature of reality). The philosophers I am the most familiar with are: Donald Davidson,
									David Lewis, Willard V. Quine, and Bertrand Russell.
								</p>
								<p>
									In my eyes philosophy is an important subject to understand well as it helps both when arguing for
									positions and against them. This allows for one ot be able to critically analyse situations that they
									are placed in, and make the best possible decisions from them. It also helps when explaining concepts,
									in particular large or complex ones, as academic philosophy emphasizes clarity and precision when
									writing about a subject.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
