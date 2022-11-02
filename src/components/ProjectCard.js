import { Col } from "react-bootstrap";
import "../styles/projectCard.css"

const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        <Col size={ 12 } sm={ 6 } md={ 4 }>
            <div className={"proj-imgbx"}>
                <img src={ imgUrl }  alt={""}/>
                <div className={"proj-txtx"}>
                    <h4>{ title }</h4>
                    <a href={""} color={"white"}>
                        <span>{ description }</span>
                    </a>
                </div>
            </div>
        </Col>
    )
}
export default ProjectCard;