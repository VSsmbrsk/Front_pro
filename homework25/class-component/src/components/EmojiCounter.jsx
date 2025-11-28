import { Component } from "react";
import CounterDisplay from "./CounterDisplay";

class EmojiCounter extends Component {
  render() {
    const { emoji, value, onClick } = this.props;

    return (
      <div>
        <button onClick={onClick} className='counter-btn'>
          {emoji}
        </button>
        <CounterDisplay counter={value} />
      </div>
    );
  }
}

export default EmojiCounter;
