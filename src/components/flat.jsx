import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat, flat } = this.props;
    selectFlat(flat);
  }

  render() {
    const { selectedFlat, flat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
      url("${flat.imageUrl}")`
    };
    const classList = flat === selectedFlat ? "card active" : "card";
    return (
      <div className={classList} style={style} onClick={this.handleClick}>
        <div className="card-category">
          {flat.price}
          EUR
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" />
      </div>
    );
  }
}

export default Flat;
