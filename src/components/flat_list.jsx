import React from 'react';

import Flat from "./flat";

const FlatList = (props) => {
  const { flats, selectFlat, selectedFlat } = props;
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            flat={flat}
            key={flat.name}
            selectFlat={selectFlat}
            selectedFlat={selectedFlat}
          />
        );
      })}
    </div>
  );
};

export default FlatList;
