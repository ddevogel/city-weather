import React, { Component, PropTypes } from 'react';
import CityStore from '../../stores/city.store' 

const ENTER_KEY_CODE = 13;

class City extends Component {
  
  constructor(props) {
    super(props);
    this.state = {name: props.name};
    this._save = this._save.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
  }

  render() {
    return <input 
            className="blip"
            placeholder={this.props.placeholder}
            onBlur={this._save}
            // onBlur={ () => { 
            //   console.log('here');
            //   this.props.onSave(this.state.value); 
            //   this.setState({name: ''});
            // }}
            onChange={this._onChange}
            // onChange={ (/*object*/ event) => {
            //       this.setState({name: event.target.value});
            // }}  
            onKeyDown={this._onKeyDown}
            // onKeyDown={ () => {
            //   if (event.keyCode === ENTER_KEY_CODE) {
            //     this._save();
            //   }            
            // }}  
            />
  }
  
  _save() {
    this.props.onSave(this.state.name);
    this.setState({name: ''});
  }

  _onChange(event) {
    this.setState({ name: event.target.value });
  }

  _onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }
};

City.propTypes = {
  name:  PropTypes.string,
  placeholder: PropTypes.string,
  onSave: PropTypes.func.isRequired,
};

City.defaultProps = {
  name: "",
  placeholder: "City",
  onSave: (value) => {console.log("Saved:" + value);}
}; 

export default City;