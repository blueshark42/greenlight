import { render } from "@testing-library/react";
import React from "react";
import "./Comment.css";

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment" style={this.props.s}>
        <div className="comment-head">
          <h6>{this.props.time}</h6>
          <h6>
            {this.props.creator} <span id="cmt-creator">Creator</span>
          </h6>
        </div>
        <p className="cmt-comment">{this.props?.children}</p>
      </div>
    );
  }
}
