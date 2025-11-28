import { Component } from "react";
import EmojiCounter from "./EmojiCounter";

class EmojiList extends Component {
  render() {
    const { counters, onIncrement } = this.props;

    const emojis = [
      { key: "happy", icon: "😀" },
      { key: "smile", icon: "😄" },
      { key: "love",  icon: "😍" },
      { key: "angel", icon: "😇" },
      { key: "wink",  icon: "😉" },
    ];

    return (
      <div className="wrapper">
        {emojis.map(({ key, icon }) => (
          <EmojiCounter
            key={key}
            emoji={icon}
            value={counters[key]}
            onClick={() => onIncrement(key)}
          />
        ))}
      </div>
    );
  }
}

export default EmojiList;
