import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import ecom from "../../Assets/Projects/ecom.jpeg";
import gym from "../../Assets/Projects/gym.PNG";
import suicide from "../../Assets/Projects/suicide.png";

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
              imgPath={ecom}
              title="Ecommerce"
              description="a fully functional eCommerce platform designed to provide a seamless online shopping experience for users. It features a modern, responsive user interface and powerful backend functionality to handle product listings, user authentication, shopping cart operations, order processing, and more."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              title="GYM"
              description="a comprehensive Gym Management System designed to streamline the operations of fitness centers. It allows administrators to manage memberships, trainers, workout plans, schedules, and payments with ease. Members can register, track their fitness progress, and access training resources through a user-friendly interface."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
