import React from "react";
import "./Intro.css";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="intro-outside">
        <div className="in-card">
          <div className="intro-text">
            <div>
              <h2 id="intro-h2">Boost the future generation</h2>
            </div>
            <div className="content">
              <p>
                Creative and talented students show us what's possible. Help
                them with the push to the peak and contribute not only to their
                education - but to society as a whole.
              </p>
            </div>
          </div>

          <div>
            <img src={this.props.image} alt="loading..." className="card-img" />
          </div>
        </div>
      </div>
    );
  }
}
