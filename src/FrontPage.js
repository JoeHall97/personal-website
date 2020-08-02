import React from 'react';
import './FrontPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify/icons-bytesize/github';
import hackerrankIcon from '@iconify/icons-cib/hackerrank';
import linkedinIcon from '@iconify/icons-cib/linkedin';
import selfphoto from './content/images/Profile1.jpg';
import codephoto from './content/images/Code_Screenshot.png';
import pidphoto from './content/images/PIDController_Code.png';
import policeloginphoto from './content/images/PolicePhotoTagging.png';
import mapscreenshot from './content/images/Map.png';

class PageNav extends React.Component {
    render(props) {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <div class="collapse navbar-collapse">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <button class="btn btn-secondary navbar-btn active" onClick={() => this.props.onClick(<AboutMe />, 'AboutMe')}
                                disabled={this.props.currentPage==="AboutMe"}>About Me</button>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-secondary navbar-btn active"
                                onClick={() => this.props.onClick(<ContactMe />, 'ContactMe')}
                                disabled={this.props.currentPage==="ContactMe"}>
                                  Contact Me
                                </button>
                            </li>
                            <li class="nav-item">
                                <button class="btn btn-secondary navbar-btn active"
                                onClick={() => this.props.onClick(<Projects />, 'Projects')}
                                disabled={this.props.currentPage==="Projects"}>
                                  Projects
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

function PageFooter (props) {
    return (
        <div>
            <footer class="page-footer">
                <div class="container">
                    <div class="row footer-row">
                        <div class="col-md-12">
                            <a href="https://www.linkedin.com/in/joseph-hall-9883111a8/">
                                <Icon icon={linkedinIcon} color="black" class="ico" />
                            </a>
                            <a href="https://github.com/JoeHall97">
                                <Icon icon={githubIcon} color="black" class="ico" />
                            </a>
                            <a href="https://www.hackerrank.com/Joe_Hall">
                                <Icon icon={hackerrankIcon} color="black" class="ico" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function AboutMe (props) {
    return (
        <div>
            <div class="center-page">
                <h1 class="display-1 text-center">Joseph Hall</h1>
                <p class="mb-2 text-center">A Kiwi Software Developer and Computer Enthusiast.</p>
            </div>
            <div class="content-div">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={selfphoto} alt="Myself" class="img-thumbnail"></img>
                        </div>
                        <div class="col-lg-8">
                            <p class="mb-0">
                            I am a junior software developer living in New Zealand. 
                            I'm a gradute from the Unviresity of Waikato, and have attained a Bachelors of Computing 
                            and Mathematical Sciences with Honours (Second Class, First Division), majoring in Computer 
                            Science and Philosophy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-div">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 order-lg-12">
                            <img src={codephoto} alt="Code for a reg-x parser in Java" class="img-thumbnail"></img>
                        </div>
                        <div class="col-lg-8 order-lg-1">
                            <p class="mb-0">
                            Computer science has been a passion of mine scince highschool. I am proficient
                            in many different programming languages, including: Java, Python, Javascript, C#, C/C++, SQL, Scala,
                            and Clojure. I'm also proficient with various tools such as: Node, React, git, BASH, Linux 
                            (Ubuntu and RHEL), Microsoft Azure, Amazon Webservices, and Latex. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-div">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-5">
                            <blockquote class="blockquote text-center vertical-center">
                                <p class="mb-0">1) The world is all that is the case.</p>
                                <footer class="blockquote-footer">Ludwig Wittgenstein, <cite title="Tractatus Logico-Philosophicus">Tractatus Logico-Philosophicus</cite></footer>
                            </blockquote>
                        </div>
                        <div class="col-lg-7">
                            <p class="mb-0">
                            Along side computer science I also have a deep interest in Philosophy. Analytic philosophy was what I studied at univiresity,
                            with a focus on epistemology and metaphysics. The philosophers I am the most familiar with are: Donald Davidson, David Lewis, Willard V. Quine, 
                            and Bertrand Russell.
                            </p>
                            <p>In my eyes philosophy is an important subject to understand well as it helps both when arguing for positions and against them. This 
                            allows for one ot be able to critically analysis situations that they are placed in, and make the best possible decisions. It also helps when 
                            explaining concepts, in particular large or complex ones.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ContactMe (props) {
    return (
        <div>
            <div class="center-page text-center" style={{height:"90vh"}}>
                <p class="h2">I am able to be contacted at the following email address:</p>
                <p class="h2">josephdahall@hotmail.co.nz</p>
                <p class="h2" style={{"padding-top":"50px"}}>I am also available for contact via 
                <a href="https://www.linkedin.com/in/joseph-hall-9883111a8/">Linkedin.</a></p>
            </div>
        </div>
    );
}

function Projects (props) {
    return (
        <div>
            <div class="content-div" style={{"padding-top":"100px"}}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <a href="https://github.com/JoeHall97/HonoursProject">
                                <h1 class="display-3 text-center" style={{"padding-bottom":"75px"}}>Honours Disertation Project</h1>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <img class="img-fluid" src={pidphoto} alt="Java code for a PID controller"/>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <p class="mb-0">For my honours disertation I worked on building a benchmarking application that
                            could measure the parallel execution of legacy programming langauges. There has been much research 
                            showing that legacy languages (such as C, Cobol, and Fortran) can be divided into independant 
                            processes and then executed concurrently. There had, however, been no attempt to find the best
                            way for these programs to be executed in parallel, i.e. what is the best way to allocate threads during
                            the run time of these programs. My project, therefore, worked towards building a benchmarking application
                            for these legacy applications and how effective a PID controller would be compaired to other execution 
                            strategies. I built the benchmarking application using Java, and analysised the results using python and 
                            the Pandas library.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-div">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <a href="https://github.com/JBAkroyd/PolicePhotoTagging">
                                <h1 class="display-3 text-center" style={{"padding-bottom":"75px"}}>Police Photo Tagging Website</h1>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <img class="img-fluid" src={policeloginphoto} alt="Login screen"/>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <p class="mb-0">During one of my univiresity papers, I worked with a group to build a website for the
                            Waikato Police. The website allowed for users to upload photos along side a set of tags. These tags 
                            could then be used to search for all images that have the same tags as one another. The website was built
                            using React, Node, and a SQL database.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-div">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-12 col-sm-12">
                            <a href="https://github.com/JoeHall97/PathFinder">
                                <h1 class="display-3 text-center" style={{"padding-bottom":"75px"}}>Python Path Finder</h1>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-sm-12">
                            <img class="img-fluid" src={mapscreenshot} alt="Screenshot of a map file"/>
                        </div>
                        <div class="col-lg-8 col-sm-12">
                            <p class="mb-0">A python program that I've built to find the shortest path between two points on a 
                            map file. The program can use depth-first, breadth-first, best-first, and A* algorithms to find this path.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          currPage: <AboutMe />,
          currName: 'AboutMe',
        }
    }

    onClick(content, name) {
        this.setState({currPage: content});
        this.setState({currName: name});
    }

    render (props) {
        return (
            <div>
                <PageNav onClick={(content, name) => this.onClick(content, name)} 
                currentPage={this.state.currName}/>
                {this.state.currPage}
                <PageFooter />
            </div>
        );
    }
}

export default FrontPage;