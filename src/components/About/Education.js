import React from "react";
import { Row, Col, Card } from "react-bootstrap";

// Change your education details here
const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Deogiri College Aurangadab",
    year: "2023 - 2026",
    grade: "CGPA: 6.5/10"
  },
  {
    degree: "Higher Secondary (12th)",
    institution: "Shree Swami Ramdas Higher secondery college, Aurangadab",
    year: "2020 - 2022",
    grade: "Percentage: 72.56%"
  },
  {
    degree: "Secondary School (10th)",
    institution: "SAINT FRANCIS DE SALES, Aurangabad",
    year: "2020",
    grade: "Percentage: 70%"
  }
];

function Education() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        My <strong className="purple">Education</strong>
      </h1>
      {educationData.map((edu, index) => (
        <Col md={8} key={index} style={{ marginBottom: "15px" }}>
          <Card
            style={{
              borderRadius: "10px",
              border: "1px solid #c084f5",
              backgroundColor: "#1a1a2e",
              color: "#fff",
              boxShadow: "0px 4px 10px rgba(192, 132, 245, 0.3)"
            }}
          >
            <Card.Body>
              <Card.Title style={{ color: "#c084f5", fontWeight: "bold" }}>
                {edu.degree}
              </Card.Title>
              <Card.Subtitle className="mb-2" style={{ color: "#bbb" }}>
                {edu.institution}
              </Card.Subtitle>
              <Card.Text>
                <strong style={{ color: "#c084f5" }}>Year:</strong> {edu.year} <br />
                <strong style={{ color: "#c084f5" }}>Grade:</strong> {edu.grade}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Education;
