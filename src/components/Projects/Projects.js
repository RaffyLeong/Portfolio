import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import work1 from "../../Assets/Projects/work1.jpg";
import work2 from "../../Assets/Projects/work2.jpg";
import work3 from "../../Assets/Projects/work3.jpg";

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
           {/* e-commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work1}
              isBlog={false}
              title="E-commerce Platform"
              description="Developed a fully functional online shopping platform, providing users with a seamless and secure experience. The website features a user-friendly interface, easy navigation, and a robust checkout system, enabling customers to browse and purchase products efficiently. Key technologies used: React.js and Tailwind CSS."
              ghLink="https://github.com/RaffyLeong/merm-ecommerce"
              demoLink="https://merm-ecommerce.onrender.com"
            />
          </Col>

           {/* social App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work2}
              isBlog={false}
              title="Social-media App"
              description="Developed a social media application using Next.js and Tailwind CSS. The app allows users to create profiles, share posts, and interact with others in a user-friendly interface. Content is rendered from markdown files, supporting easy blog post creation and display. Features include dark mode for an improved viewing experience and seamless navigation."
              ghLink="https://github.com/RaffyLeong/Social-app"
              demoLink="https://social-app-xs60.onrender.com"
            />
          </Col>

           {/* Chat App */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work3}
              isBlog={false}
              title="Chat Application: Chatify"
              description="Created a real-time chat application using Python for the backend and JavaScript for the frontend. This app enables users to engage in private messaging with user authentication to ensure secure conversations. Leveraged WebSocket for instant message delivery and designed the interface to be responsive for a seamless experience across devices."
              ghLink="https://github.com/RaffyLeong/Python-Chat"
              demoLink="https://python-chat-1l7w.onrender.com"              
            />
          </Col>

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
