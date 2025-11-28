import React, { Component } from "react";
import EmojiList from "./components/EmojiList";
import Actions from "./components/Actions";
import Results from "./components/Results";
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counters: {
        happy: 0,
        smile: 0,
        love: 0,
        angel: 0,
        wink: 0,
      },
      result: null,
    };
  }

  increment = (key) => {
    this.setState((prev) => ({
      counters: {
        ...prev.counters,
        [key]: prev.counters[key] + 1,
      }
    }));
  };

  showResults = () => {
    const { counters } = this.state;

    const maxKey = Object.keys(counters).reduce((a, b) =>
      counters[a] > counters[b] ? a : b
    );

    const emojiMap = {
      happy: "😀",
      smile: "😄",
      love: "😍",
      angel: "😇",
      wink: "😉",
    };

    this.setState({ result: emojiMap[maxKey] });
  };

  clean = () => {
    this.setState({
      counters: {
        happy: 0,
        smile: 0,
        love: 0,
        angel: 0,
        wink: 0,
      },
      result: null,
    });
  };

  render() {
    return (
      <>
        <EmojiList
          counters={this.state.counters}
          onIncrement={this.increment}
        />

        <Actions
          onShowResults={this.showResults}
          onClean={this.clean}
        />

        <Results result={this.state.result} />
      </>
    );
  }
}

export default App;
