import React, { Component } from "react";
import "./App.css";
import StarWarsList from "./components/StarWarsList";
import StartWarsList from "./components/StarWarsList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters("https://swapi.co/api/people/");
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          starwarsChars: data.results,
          prev: data.previous,
          next: data.next
        });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const prevLink = this.state.prev;
    console.log("-------prev link is -------" + prevLink);
    const nextLink = this.state.next;
    let prevButton;
    let nextButton;

    // Displays previous button only if it is not null
    if (prevLink !== null) {
      console.log("prev link is not null");
      prevButton = (
        <button
          className="paginationBtn"
          onClick={() => this.getCharacters(this.state.prev)}
        >
          Previous
        </button>
      );
    } else {
      console.log("prev link is null");
      prevButton = "";
    }

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StartWarsList characters={this.state.starwarsChars} />
        <div className="pagination">
          {prevButton}
          <button
            className="paginationBtn"
            onClick={() => this.getCharacters(this.state.next)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default App;
