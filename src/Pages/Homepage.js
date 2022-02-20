import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Intro from "../Components/Intro";
import TextField from "../Components/TextField";

import rocket from "../images/rocket.gif";
import shield from "../images/shield.gif";
import cube3d from "../images/cube3d.gif";
import fairHand from "../images/fair-hand.gif";
import techSupport from "../images/tech-support.gif";

import code from "../images/code.png";
import crowdfund from "../images/cf-img.png";

import "./Homepage.css";

import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Homepage() {
  return (
    <>
      <Header />
      <Intro image={crowdfund} />
      <TextField title="About">
        Our mission is to boost and help creative and talented students be at
        their peak and lead the future generation. A lot of students
        unfortunately lack funds necessary for their work or studies. Our goal
        is to provide a place where students can create campaigns and get
        financial aid from those that wish to help. No paperwork, no legal
        issues, none of the complexity other sites have, just people helping
        each other out.
      </TextField>

      <Container id="qualities-container">
        <h1 style={{ marginBottom: "2rem" }}>Our Qualities</h1>
        <Row>
          <Col>
            <div className="homepage-col">
              <img src={rocket} width={30} height={30} alt="loading..." />
              <h4 className="homepage-col-title">Fast</h4>
            </div>
            <p>
              No long or complex processes to create or fund campaigns. Just
              confirm a few things and you're good to go!
            </p>
          </Col>
          <Col>
            <div className="homepage-col">
              <img src={shield} width={30} height={30} alt="loading..." />
              <h4 className="homepage-col-title">Safe</h4>
            </div>
            <p>
              Greenlight is a reliable and safe platform for our campaigns.
              Since it is mostly for students, we try to keep everything as
              simple as possible.
            </p>
          </Col>
          <Col>
            <div className="homepage-col">
              <img src={cube3d} width={30} height={30} alt="loading..." />
              <h4 className="homepage-col-title">Transparency</h4>
            </div>
            <p>
              We are transparent with everything ranging from the project all
              the way to the finances.
            </p>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="homepage-col">
              <img src={fairHand} width={30} height={30} alt="loading..." />
              <h4 className="homepage-col-title">Fair</h4>
            </div>
            <p>
              We value everyone equally. There will be no projects that
              overpower the rest. No donations or special paid promotions. We
              promote each campaign based on their needs.
            </p>
          </Col>
          <Col>
            <div className="homepage-col">
              <img src={techSupport} width={30} height={30} alt="loading..." />
              <h4 className="homepage-col-title">Support</h4>
            </div>
            <p>
              Both sides of the campaign will have our full support. We are
              constantly here to aid our people and stop all the bad ones. Feel
              free to ask us anything!
            </p>
          </Col>
        </Row>
      </Container>

      <div id="carousel-div">
        <h1>Check out some campaigns!</h1>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={code} alt="First slide" />
            <Carousel.Caption>
              <h3>MacBook Pro for School</h3>
              <p>MacBook notebook to help me study computer science</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={code} alt="Second slide" />

            <Carousel.Caption>
              <h3>CLion license</h3>
              <p>I'd like a CLion license so I could work on my projects</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={code} alt="Third slide" />

            <Carousel.Caption>
              <h3>Supertoast Games</h3>
              <p>
                We need some investors for our new startup company at our school
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="see-more">
          <h1>Interested in seing more?</h1>
          <p>
            Interested in seeing more amazing campaigns? Don't worry, we got it.
            Thank you for being a part of our community and supporting young
            people to create a better future.
          </p>

          <Link className="sm-link" to="/campaigns">
            Check out more →
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
