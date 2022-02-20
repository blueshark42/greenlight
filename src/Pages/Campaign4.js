import React from "react";
import { ProgressBar, Card, CardGroup } from "react-bootstrap";
import "./Campaign.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Accordion from "react-bootstrap/Accordion";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";

import clock from "../images/alarm-clock.png";

export default class Campaign4 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { raised: this.props.data.raised };
  }

  getPercentage() {
    const { raised, required } = this.props.data;
    return Math.floor((raised / required) * 100) || 0;
  }

  formatCurrency(amount) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(amount);
  }

  render() {
    return (
      <>
        <Header />
        <div className="campaign" style={{ paddingTop: "6rem" }}>
          <div className="campaign-img">
            <img
              src={this.props.image}
              alt="loading..."
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            ></img>
          </div>

          <div className="campaign-text">
            <div className="categories">
              <p id="cmp-category">Environment</p>
              <p id="cmp-timeleft">
                <img
                  src={clock}
                  width={13}
                  height={13}
                  style={{ marginRight: "5px" }}
                  alt="clock"
                ></img>
                2 months left
              </p>
            </div>

            <h1>Help Clean the Streets of Bratislava</h1>

            <div className="campaign-fund">
              <div id="money">
                <p>{this.formatCurrency(this.state.raised)}</p>
                <p>{this.formatCurrency(this.props.data.required)}</p>
              </div>
              <ProgressBar
                now={this.getPercentage()}
                label={`${this.getPercentage()}%`}
              />

              <p style={{ marginTop: "1rem" }}>
                We are a students at a high school in Bratislava. We are trying
                to raise money to clean the streets. There is currently 10 of us
                along with 4 part-time workers.
              </p>

              <div className="d-grid gap-2 hello">
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons
                    style={{ layout: "vertical", "color:": "blue" }}
                    createOrder={(_, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: "1.99",
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(_, actions) => {
                      return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                      });
                    }}
                  />
                </PayPalScriptProvider>
              </div>

              <h5>You've backed with: {this.formatCurrency(5)}</h5>
            </div>
          </div>
        </div>

        <div id="questions">
          <h1>Details</h1>
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>
                <p>
                  Me along with a few friends are running a 3 month long project
                  where we hire people from our school and we clean the streets.
                  The money is not for us, it's for administrative and legal
                  things.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>FAQ</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>What do you need the money for?</strong>{" "}
                  Administrative and legal things
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Updates</Accordion.Header>
              <Accordion.Body>
                <Comment
                  creator="KeepBratislavaClean!"
                  time="Jan 3, 2022"
                  s={{ marginTop: "4rem" }}
                >
                  <p>
                    Happy new years everyone! Last year we managed to clean up
                    to 2.000 kg of trash! Thanks everyone for the ongoing
                    support. We are proudly announcing that we're extending our
                    project by 2 months.
                  </p>
                </Comment>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Comments</Accordion.Header>
              <Accordion.Body>
                <p>There are no comments</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div style={{ marginTop: "2rem" }}>
            <h2>Support this project</h2>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Cleanup Crew</Card.Title>
                  <Card.Text>
                    <p>
                      Thank you for supporting us and keeping the environment
                      clean!
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $1 or more</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
