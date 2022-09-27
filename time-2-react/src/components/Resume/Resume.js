import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";



function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            {/* create button to work with resume.io */}
            {/* <div>
          "https://resume.io/r/XbvcVwD9W";
          </div> */}
            <AiOutlineDownload />
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;