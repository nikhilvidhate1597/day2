import React, { Component } from "react";
import Prop from "./Prop";

export class Parent extends Component {
  render() {
    return (
      <div>
        <Prop c="violet" />
      </div>
    );
  }
}

export default Parent;
