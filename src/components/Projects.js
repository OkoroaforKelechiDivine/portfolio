import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png"
import projImg2 from "../assets/img/project-img2.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

    const projects = [
        {
            title: "Youtube clone",
            description: "https://ytc-2.netlify.app/",
            imgUrl: projImg1,
        },
        {
            title: "Shortly Url",
            description: "https://okoroaforkelechidivine.github.io/smalr/",
            imgUrl: projImg2,
        },
        {
            title: "We are the world",
            description: "https://wit-w.netlify.app/",
            imgUrl: projImg3,
        },
        {
            title: "DGRs website",
            description: "https://d-g-r.netlify.app/pages/reb.html",
            imgUrl: projImg4,
        },
        {
            title: "Digital Clock",
            description: "https://okoroaforkelechidivine.github.io/digitalClock/",
            imgUrl: projImg5,
        },
        {
            title: "Word Count",
            description: "https://okoroaforkelechidivine.github.io/word-count/",
            imgUrl: projImg6,
        },
    ];

    return (
        <section className={"project"} id="project">
            <Container>
                <Row>
                    <Col size={ 12 }>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={ isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <p> I am strong in design and integration with intuitive problem-solving
                                        skills also proficient in JAVA, HTML, CSS, JAVASCRIPT, Spring-boot, SQL and NoSQL.
                                        I am passionate about implementing and launching new projects and have the ability
                                        to translate business requirements into technical solutions.
                                    </p>
                                    <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>
                                        <Nav variant={"pills"}
                                             className={"nav-pills mb-5 justify-content-center align-items-center"}
                                             id={"pills-tab"}>
                                            <Nav.Item>
                                                <Nav.Link eventKey={"first"}>Tab 1</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id={"slideInUp"}
                                                     className={ isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey={"first"}>
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={ index }
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className={"background-image-right"} src={ colorSharp2 } alt={""}></img>
        </section>
    )
}
export default Projects