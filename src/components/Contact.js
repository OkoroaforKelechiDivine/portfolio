import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import { useForm } from '@formspree/react';
import TrackVisibility from 'react-on-screen';

const Contact = () => {

    const [state, handleSubmit] = useForm("xlevlleq");
    if (state.succeeded) {
        console.log("Message sent")
        return <p className={"success-message"}>
            I have received your message, thank you!
        </p>;
    }

    return (
        <section className={"contact"} id={"connect"}>
            <Container>
                <Row className={"align-items-center"}>
                    <Col size={ 12 } md={ 6 }>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={ isVisible ? "animate__animated animate__zoomIn" : "" }
                                     src={ contactImg }
                                     alt={"Contact Us"}
                                />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={ 12 } md={ 6 }>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Get In Touch</h2>
                                    <form onSubmit={ handleSubmit }>
                                        <Row>
                                            <Col size={ 12 } sm={ 6 } className={"px-1"}>
                                                <input name={"First name"} type={"text"}
                                                       placeholder={"First Name"} required
                                                />
                                            </Col>
                                            <Col size={ 12 } sm={ 6 } className={"px-1"}>
                                                <input name={"Last name"} type={"text"}
                                                       placeholder={"Last Name"}
                                                       required
                                                />
                                            </Col>
                                            <Col size={ 12 } sm={ 6 } className={"px-1"}>
                                                <input name={"Email"} type={"email"}
                                                       placeholder={"Email"} required
                                                />
                                            </Col>
                                            <Col size={ 12 } sm={ 6 } className={"px-1"}>
                                                <input name={"Phone number"} type={"tel"}
                                                       placeholder={"Phone"} required
                                                />
                                            </Col>
                                            <Col size={ 12 } className={"px-1"}>
                                                <textarea name={"Message"} rows={"6"}
                                                          placeholder={"Message"} required></textarea>
                                                <button disabled={ state.submitting }  type={"submit"}>
                                                    <span>Submit</span></button>
                                            </Col>
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