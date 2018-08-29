import React from "react";
import Routing from "./assets/src/Routing";

export default class News extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <Routing />;
  }
}

