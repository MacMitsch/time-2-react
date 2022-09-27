import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mac Mitsch </span>
            from <span className="purple"> Minnesota.</span>
            <br />I am a bootcamp student with the University of Minnesota 
            <br />
            <br />
            some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Riding my motorcycle
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "My goal is to make a difference in coding and the world!"{" "}
          </p>
          <footer className="blockquote-footer">Mac Mitsch</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;