import { Component } from "react";

class CounterDisplay extends Component {
  render() {
    return <span>{this.props.counter}</span>;
  }
}

export default CounterDisplay;
