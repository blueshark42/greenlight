import React from "react";
import "./TextField.css";

export default class TextField extends React.Component {
  render() {
    return (
      <div className="text-field">
        <div className="tf-title">
          <h1>{this.props?.title}</h1>
        </div>

        <div className="tf-text">
          <p>{this.props?.children}</p>
        </div>
      </div>
    );
  }
}
