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

export default class Campaign extends React.Component {
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
              <p id="cmp-category">Technology</p>
              <p id="cmp-timeleft">
                <img
                  src={clock}
                  width={13}
                  height={13}
                  style={{ marginRight: "5px" }}
                  alt="clock"
                ></img>
                15 days left
              </p>
            </div>

            <h1>Drinknator 9000</h1>

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
                Drinknator 9000 is a machine made by me and by my colleagues at
                our school. It is a project for a local competition.
              </p>

              <p style={{ fontWeight: "bold" }}>
                🎉 Woo! This project has reached the requested amount of funds!
                🎉
              </p>

              <div className="d-grid gap-2 hello">
                <PayPalScriptProvider options={{ "client-id": "test" }}>
                  <PayPalButtons
                    disabled={true}
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

              <h5>You've backed with: {this.formatCurrency(30)}</h5>
            </div>
          </div>
        </div>

        <div id="questions">
          <h1>Details</h1>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Description</Accordion.Header>
              <Accordion.Body>
                <p>
                  Drinknator 9000 is a machine that can mix ingredients based on
                  some user input. The machine then mixes some of the
                  ingredients and finally pours them out into a cup for the user
                  to try. The project is made for a local competition and our
                  team consists of 5 people, mostly people interested in
                  chemistry.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>FAQ</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>What do you need the money for?</strong> All of the
                  money would go towards hardware.
                </p>
                <p>
                  <strong>Who are the members in your team?</strong>
                  <br />
                  Mallory - Chemist
                  <br />
                  Alice - Software
                  <br />
                  Bob - Hardware and Chemistry
                  <br />
                  Heidi - Chemistry and Research
                  <br />
                  Oscar - Resarch
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Updates</Accordion.Header>
              <Accordion.Body>
                <Comment creator="Team Chemix" time="Feb 19, 2022">
                  Wow! We reached our requested goal in under 48 hours! Amazing!
                  <br />
                  Thanks everyone so much for the support. We will keep all of
                  you updated on the results of our project!
                </Comment>

                <Comment
                  creator="Team Chemix"
                  time="Feb 17, 2022"
                  s={{ marginTop: "4rem" }}
                >
                  Hi everyone, Mallory here! We are almost done with the
                  projects. <br />
                  We have ordered some of the required hardware we were missing.
                  Now we're just waiting for our developers to finish, then we
                  will put the whole thing together, and finally we will test
                  it.
                  <br />
                  <br />
                  The competition ends on Feb 20, 2022 so we don't have a lot of
                  time to perfect it. We will make sure the machine is finished
                  before we start sending out Elixir to our backers! :)
                </Comment>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Comments</Accordion.Header>
              <Accordion.Body>
                <strong>What will the money be used for?</strong> For our
                project and our staff as we need to expand our team.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <div style={{ marginTop: "2rem" }}>
            <h2>Support this project</h2>
            <CardGroup>
              <Card>
                <Card.Body>
                  <Card.Title>Odd Elixir</Card.Title>
                  <Card.Text>
                    <p>
                      Your support helped a team of 5 students do what they have
                      always dreamt about. Thank you for believing in us!
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $1 or more</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Tasty Elixir</Card.Title>
                  <Card.Text>
                    We will send you one personalised cup of our mystery elixir
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $15 or more</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Bubblegum Elixir</Card.Title>
                  <Card.Text>
                    <p>All of the previous rewards</p>
                    <p>
                      We will send you some of the specifications about our
                      project
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $30 or more</small>
                </Card.Footer>
              </Card>

              <Card>
                <Card.Body>
                  <Card.Title>Beaver Elixir</Card.Title>
                  <Card.Text>
                    <p>All of the previous rewards</p>
                    <p>
                      We will send you all of the resarch papers,
                      specifications, source code and pictures of our machine
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $50 or more</small>
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
