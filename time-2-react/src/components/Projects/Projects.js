import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={jate}
              isBlog={false}
              title="Jate"
              description="It's not just any text editor, Just Another Text Editor."
              ghLink="https://github.com/MacMitsch/Challenge-19-jate-mm"
              demoLink="https://text-editor-mm.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            //   imgPath={E-Commerce}
              isBlog={false}
              title="E-Commerce"
              description="Building a robust E-Commerce backend."
              ghLink="https://github.com/MacMitsch/ORM-Challenge-13-mm"
              demoLink="https://drive.google.com/file/d/1IvwrJBPey9N378ltHwAjfrPTu5Qd1O6s/view"
            />

          
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;