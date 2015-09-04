import React, { Component, PropTypes } from 'react';

const ENTER_KEY_CODE = 13;

class City extends Component {
  
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  render() {
    return  <div>
              <label>City</label>
              <input 
                placeholder='Paris, FR'
                onBlur={this._onChange}
                onKeyDown={this._onKeyDown}
                />
            </div>
  }

  _onChange(event) {
    this.props.onChange(event.target.value);
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._onChange(event);
    }
  }
};

City.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default City;