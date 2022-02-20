import React from "react";
import { ProgressBar, Table, Card, CardGroup } from "react-bootstrap";
import "./Campaign.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Accordion from "react-bootstrap/Accordion";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comment from "../Components/Comment";

import code from "../images/bp-desc.png";
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

            <h1>Blueprint2022 – HackMIT's High School Hackathon</h1>

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
                We need some funding for our newest hackathon Blueprint 2022! We
                expect roughly 3000 contestants and we have over $ 2,000 in
                prices! Come join us for the bestest hackathon in the world!
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

              <h5>You've backed with: {this.formatCurrency(132)}</h5>
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
                  Blueprint 2022 is a weekend-long virtual learnathon and
                  hackathon for high school students, open to all skill levels –
                  from first-time hackers to veteran coders! Over the course of
                  Blueprint, you’ll learn new coding skills in workshops led by
                  MIT students, form a team, and develop a project from start to
                  finish with the support of our mentors. After Blueprint,
                  you’ll not only have completed your own project but also
                  attained the tools to do so much more.
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
              <Accordion.Header>FAQ</Accordion.Header>
              <Accordion.Body>
                <p>
                  <strong>What is Blueprint 2022?</strong> Blueprint 2022 is a
                  weekend-long virtual learnathon and hackathon for high school
                  students, open to all skill levels - from first-time hackers
                  to veteran coders! Over the course of Blueprint, you'll learn
                  new coding skills in workshops led by MIT students, form a
                  team, and develop a project from start to finish with the
                  support of our mentors. After Blueprint, you'll not only have
                  completed your own project but also attained the tools to do
                  so much more.
                </p>
                <p>
                  <strong>What tracks do you offer?</strong> We offer a variety
                  of tracks that our hackers can take. We offer the following
                  tracks: StartHacking, Game Dev, Mobile Dev, Web Dev.
                </p>
                <p>
                  <strong>What is your schedule?</strong> Our hackathon lasts
                  roughly a week. Currently we have a schedule of the main
                  events, though a more specific schedule will be released
                  during the BP Week.
                </p>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Calendar</th>
                      <th>BP Week</th>
                      <th>Learnathon</th>
                      <th>Hackathon</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Feb 14-18</td>
                      <td>
                        Join the hacker community before the weekend starts!
                      </td>
                      <td>
                        Participate in hands-on workshops taught by MIT students
                        and industry professionals on programming fundamentals,
                        web programming, app development, or game development
                      </td>
                      <td>Put your new skills to practice!</td>
                    </tr>
                    <tr>
                      <td>Feb 19</td>
                      <td>
                        Meet fellow hackers through speed-friending and mini
                        events
                      </td>
                      <td>
                        Attend tech talks on specialized computer science and
                        STEM topics
                      </td>
                      <td>
                        Form a team and experience the challenge and reward of
                        building a project from scratch
                      </td>
                    </tr>
                    <tr>
                      <td>Feb 20</td>
                      <td>
                        Tune into tech talks by MIT student clubs and other
                        organizations
                      </td>
                      <td>
                        Engage with our educational organization partners at the
                        organization fair!
                      </td>
                      <td>
                        Consult mentors for personalized feedback and help on
                        your project
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <p>
                  <strong>Will there be swag?</strong> If you reside in the
                  United States and meet the swag eligibility requirements by
                  the end of Blueprint, we'll ship you swag free of charge! As a
                  reminder, you'll need to either attend a track workshop series
                  during our learnathon or submit a project for our hackathon,
                  or both.
                </p>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>Updates</Accordion.Header>
              <Accordion.Body>
                <Comment creator="HackMIT" time="Feb 11, 2022">
                  <p>
                    Hi everyone! We are working hard on finishing up right
                    before BP Week. We have made a ton of progress in the last
                    few weeks. We decided to sum up what we did in the last
                    week:
                  </p>
                  <p>We have finished working on the backend</p>
                  <p>The Discord server has been finished</p>
                  <p>
                    We introduced new standards on how we work as a team to
                    increase our efficiency
                  </p>
                  <p>Finished recruiting mentors and judges</p>
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
                  <Card.Title>Tiny Hacker ^-^</Card.Title>
                  <Card.Text>
                    <p>
                      Thank you for supporting our hackathon! Your name will be
                      listed in the credits as a supporter!
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $1 or more</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Big Gangster Hacker (▀̿Ĺ̯▀̿ ̿)</Card.Title>
                  <Card.Text>
                    Special role on our Discord.
                    <br />
                    Ability to vote on submitted projects{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $15 or more</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title>Oligarch Hacker [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]</Card.Title>
                  <Card.Text>
                    <p>Special role on our Discord</p>
                    <p>Ability to vote on submitted projects</p>
                    <p>
                      Ability to judge the top 3 projects personally with the
                      HackMIT team <strong>(3 remaining)</strong>
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Pledge $25 or more</small>
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
