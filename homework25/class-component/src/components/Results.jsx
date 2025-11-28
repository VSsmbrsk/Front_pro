import { Component } from "react";

class Results extends Component {
  render() {
    const { result } = this.props;

    if (!result) return null;

    return (
      <div>
        <h2>Winner: {result}</h2>
      </div>
    );
  }
}

export default Results;
