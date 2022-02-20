import React from "react";
import { ProgressBar, Card, CardGroup } from "react-bootstrap";
import "./Campaign.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Accordion from "react-bootstrap/Accordion";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";

import code from "../images/code.png";
import clock from "../images/alarm-clock.png";

export default class Campaign2 extends React.Component {
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
              <p id="cmp-category">Education</p>
              <p id="cmp-timeleft">
                <img
                  src={clock}
                  width={13}
                  height={13}
                  style={{ marginRight: "5px" }}
                  alt="clock"
                ></img>
                3 days left
              </p>
            </div>

            <h1>Laptop for School</h1>

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
                I would need some money to help me buy a new laptop for schoo. I
                currently own a 5 year old laptop which broke recently. The
                laptop that would fit my work would cost about $ 1.400.
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

              <h5>You've backed with: {this.formatCurrency(0)}</h5>
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
                  Hi, I'm a person from a poorer country and a poorer family. I
                  recently got accepted to a high school where I will study
                  computer science. Unfortunately my laptop broke and I cannot
                  afford to fix it or to buy a new one. That's why I would ask
                  for your help. Thank you! :)
                </p>
                <img
                  src={code}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    marginTop: "1rem",
                  }}
                  alt="Loading..."
                ></img>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Updates</Accordion.Header>
              <Accordion.Body>
                <Comment creator="John Doe" time="Feb 17, 2022">
                  There are no updates
                </Comment>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div style={{ marginTop: "2rem" }}>
            <h2>Support this project</h2>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Supporter</Card.Title>
                  <Card.Text>
                    <p>Thank you so much for supporting me, it means a lot!</p>
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
