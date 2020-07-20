import React, { Component } from 'react';

import FlatList from "./flat_list.jsx";
import MapContainer from "./map_container";

import flats from "../../data/flats";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (flat) => {
    this.setState({ selectedFlat: flat });
  }

  render () {
    const { flats, selectedFlat } = this.state;
    const { test } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectFlat={this.selectFlat}
          selectedFlat={selectedFlat}
        />
        <MapContainer selectedFlat={selectedFlat} />
      </div>
    );
  }
}

export default App;
