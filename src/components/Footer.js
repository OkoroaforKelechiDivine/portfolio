import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import { Facebook, Github, Linkedin, Medium, Twitter } from "react-bootstrap-icons";

const Footer = () => {
    return (
        <footer className={"footer"}>
            <Container>
                <Row className={"align-items-center"}>
                    <MailchimpForm />
                    <Col size={12} sm={6}>
                        <h1>zipDemon</h1>
                        {/*<img src={logo} alt={"Logo"} />*/}
                    </Col>
                    <Col size={12} sm={6} className={"text-center text-sm-end"}>
                        <div className={"social-icon"}>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={"bg-white"} href={"https://github.com/OkoroaforKelechiDivine"} target={"_blank"} rel="noreferrer">
                                <Github/>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={"bg-white"} href={"https://linkedin.com/in/kelechi-okoroafor"} target={"_blank"} rel="noreferrer">
                                <Linkedin/>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={"bg-white"} href={"https://www.facebook.com/profile.php?id=100080210275192"} target={"_blank"} rel="noreferrer">
                                <Facebook/>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={"bg-white"} href={"https://twitter.com/kelechiDivine6"} target={"_blank"} rel="noreferrer">
                                <Twitter/>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a className={"bg-white"} href={"https://medium.com/@okoroaforkelechi123"} target={"_blank"} rel="noreferrer">
                                <Medium/>
                            </a>
                        </div>
                        <p>Copyright 2022. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer