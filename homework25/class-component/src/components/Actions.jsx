import { Component } from "react";

class Actions extends Component {
  render() {
    const { onShowResults, onClean } = this.props;

    return (
      <div>
        <button className="show__results--btn" onClick={onShowResults}>
          Show Results
        </button>

        <button className="clean-btn" onClick={onClean}>
          Clean
        </button>
      </div>
    );
  }
}

export default Actions;
