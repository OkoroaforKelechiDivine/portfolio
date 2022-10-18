import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    // const formInitialDetails = {
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // }
    // const [formDetails, setFormDetails] = useState(formInitialDetails);
    // const [buttonText, setButtonText] = useState('Send');
    // const [status, setStatus] = useState({});

    // const onFormUpdate = (category, value) => {
    //     setFormDetails({
    //         ...formDetails,
    //         [category]: value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setButtonText("Sending...");
    //     // let response = await fetch("https://formspree.io/f/xlevlleq", {
    //     //     method: "POST",
    //     //     headers: {
    //     //         "Content-Type": "application/json;charset=utf-8",
    //     //     },
    //     //     body: JSON.stringify(formDetails),
    //     // });
    //     setButtonText("Send");
    //     // let result = await response.json();
    //     setFormDetails(formInitialDetails);
    //     // if (result.code === 200) {
    //     //     setStatus({ succes: true, message: 'Message sent successfully'});
    //     // } else {
    //     //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    //     // }
    // };

    return (
        <section className={"contact"} id={"connect"}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt={"Contact Us"}/>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form action={"https://formspree.io/f/xlevlleq"} method={"POST"} target={"_blank"}>
                                        <Row>
                                            <Col size={12} sm={6} className={"px-1"}>
                                                <input name={"First name"} type={"text"} placeholder={"First Name"} required/>
                                            </Col>
                                            <Col size={12} sm={6} className={"px-1"}>
                                                <input name={"Last name"} type={"text"} placeholder={"Last Name"} required/>
                                            </Col>
                                            <Col size={12} sm={6} className={"px-1"}>
                                                <input name={"Email"} type={"email"} placeholder={"Email"} required/>
                                            </Col>
                                            <Col size={12} sm={6} className={"px-1"}>
                                                <input name={"Phone number"} type={"tel"} placeholder={"Phone"} required/>
                                            </Col>
                                            <Col size={12} className={"px-1"}>
                                                <textarea name={"Message"} rows={"6"} placeholder={"Message"} required></textarea>
                                                <button value={"Send"}  type={"submit"}><span>Submit</span></button>
                                            </Col>
                                            {/*{*/}
                                            {/*    status.message &&*/}
                                            {/*    <Col>*/}
                                            {/*        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>*/}
                                            {/*    </Col>*/}
                                            {/*}*/}
                                        </Row>
                                    </form>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact