import React from 'react';
import PropTypes from 'prop-types';

export default class Brocard extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const target = `https://steemgigs.org/@${this.props.name}`;
    const imgsrc = `https://steemitimages.com/u/${this.props.name}/avatar`;
    return (
      <div className="bro-card-wrapper">
        <div className="bro-card">
          <a href={target} target="_blank">
            <img src={imgsrc} alt="" />
          </a>
          <h4>{this.props.name}</h4>
          <p>{this.props.text}</p>
          <h6>Starting at {this.props.price} TEARDROPS</h6>
          <button type="button" className="">
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    );
  }
}
