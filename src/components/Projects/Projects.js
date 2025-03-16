import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import work1 from "../../Assets/Projects/work1.jpg";
import work2 from "../../Assets/Projects/work2.jpg";
import work3 from "../../Assets/Projects/WXYZ studio.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           {/* WXYZ-Studio */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work3}
              isBlog={false}
              title="Freelancer Project | WXYZ-Studio"
              description="Developed a responsive website showcase for WXYZ-Studio using React.js, featuring a home page with project showcases, an about page, and a contact page with email functionality. 
              Enhanced user experience with seamless navigation and visually appealing design, resulting in increased engagement and project inquiries."
              ghLink="https://github.com/RaffyLeong/wxyz-studio"
              demoLink="https://wxyz-studio.onrender.com/"              
            />
          </Col>
          
           {/* e-commerce */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={work1}
              isBlog={false}
              title="E-commerce Platform"
              description="Developed a fully functional online shopping platform, providing users with a seamless and secure experience. The website features a user-friendly interface, 
              easy navigation, and a robust checkout system, enabling customers to browse and purchase products efficiently. Key technologies used: React.js and Tailwind CSS."
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
              description="Developed a social media application using Next.js and Tailwind CSS. The app allows users to create profiles, share posts, and interact with others in a user-friendly interface. 
              Content is rendered from markdown files, supporting easy blog post creation and display. Features include dark mode for an improved viewing experience and seamless navigation."
              ghLink="https://github.com/RaffyLeong/Social-app"
              demoLink="https://social-app-xs60.onrender.com"
            />
          </Col>


         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
