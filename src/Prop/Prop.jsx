import React, { Component } from "react";

export class Prop extends Component {
  render() {
    return (
      <div>
        <h1 style={{ color: this.props.c }}>Props</h1>
      </div>
    );
  }
}

export default Prop;
