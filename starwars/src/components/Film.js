import React from "react";

class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmName: ""
    };
  }

  componentDidMount() {
    this.getCharacters(this.props.film);
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
        this.setState({ filmName: data.title });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return <div className="filmNameText">Within film name</div>;
  }
}

export default Film;
