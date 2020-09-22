import React, { Component } from "react";

class Main extends Component {
  state = {};

  getForRegularExample() {
    let someList = [];
    for (let x = 0; x < 5; x++) {
      // should always assign a key on iterations
      someList.push(<p key={x}>Hello world! {x}</p>);
    }
    return someList;
  }

  getMapExample() {
    const verses = [
      "one",
      "two",
      "three",
      "four",
      "five...",
      "I caught a fish alive!",
      "six",
      "seven",
      "eight",
      "nine",
      "ten...",
      "I put it back again!",
    ];

    // should always assign a key on iterations
    return verses.map((verse, i) => <li key={i}>{verse}</li>);
  }

  render() {
    return (
      <main>
        {this.getForRegularExample()}
        <p>Here is a nursery rhyme:</p>
        <ul>{this.getMapExample()}</ul>
      </main>
    );
  }
}

export default Main;
