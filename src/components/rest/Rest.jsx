import React, { Component } from "react";

class Rest extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://gorest.co.in/public-api/posts")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("setting state");
          console.log(result.data);
          console.log(this);
          this.setState({
            isLoaded: true,
            items: result.data,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    // console.log(this.state);
    console.log(this.state.items);

    return (
      <div>
        <p>This is some REST stuff</p>

        <p>Error: {error ? error.message : "no errors"}</p>

        <p>Status: {isLoaded ? "Loaded" : "Loading..."}</p>

        <p>Response:</p>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.id} | {item.title}
            </li>
          ))}
        </ul>
        <p>Raw Response:</p>
        <div>{JSON.stringify(items)}</div>
      </div>
    );
  }
}

export default Rest;

/*

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}

*/
