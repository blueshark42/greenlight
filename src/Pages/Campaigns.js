import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./Campaigns.css";

import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Campaigns = () => {
  let navigate = useNavigate();

  const control = (slug) => {
    const route = "/campaign/" + slug;
    navigate(route, { replace: true });
  };

  const projectData = [
    {
      title: "Blueprint2022",
      desc: "Back the best hackathon on the planet!",
      img: require("../images/bp-header.png"),
      route: "blueprint",
    },
    {
      title: "Laptop for School",
      desc: "Help me afford a new laptop to help me study CS.",
      img: require("../images/cs-header.jpeg"),
      route: "laptop",
    },
    {
      title: "Drinknator 9000",
      desc: "Drinknator 9000 is a machine that can create seemingly random, but always tasty tasty drinks!",
      img: require("../images/potion-header.jpeg"),
      route: "drinknator",
    },
    {
      title: "Keep the streets of Bratislava clean",
      desc: "Help us clean the streets of Bratislava and improve the environment",
      img: require("../images/bratislava.jpeg"),
      route: "clean-bratislava",
    },
  ];

  return (
    <>
      <Header />
      <h1 className="campaigns-title">Campaigns</h1>

      <div id="list">
        <Row xs={1} md={3} className="g-4">
          {Array.from({ length: projectData.length }).map((_, idx) => (
            <Col key={idx}>
              <Card
                onClick={() => control(projectData[idx].route)}
                style={{ cursor: "pointer" }}
              >
                <Card.Img variant="top" src={projectData[idx].img} />
                <Card.Body>
                  <Card.Title>{projectData[idx].title}</Card.Title>
                  <Card.Text>{projectData[idx].desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Footer />
    </>
  );
};

export default Campaigns;
