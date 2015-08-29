import React, { Component, PropTypes } from 'react';
import CityStore from '../../stores/city.store' 

const ENTER_KEY_CODE = 13;

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name};
    this._save = this._save.bind(this);
  }

  render() {
    return <input 
            className="blip"
            //id={this.props.id}
            //value={this.props.name}
            placeholder="City"
            // onBlur={ () => { 
            //   console.log('here');
            //   this.props.onSave(this.state.value); 
            //   this.setState({name: ''});
            // }}
            onBlur={this._save}
            onChange={ (/*object*/ event) => {
                  this.setState({name: event.target.value});
            }}  
            // onChange={this._onChange.bind(this)}
            onKeyDown={ () => {
              if (event.keyCode === ENTER_KEY_CODE) {
                this._save();
              }            
            }}  
            // onKeyDown={this._onKeyDown.bind(this)}
            />
  }
  
  _save() {
    this.props.onSave(this.state.name);
    this.setState({name: ''});
  }

  // _onChange(/*object*/ event) {
  //   this.setState({
  //     name: event.target.value
  //   });
  // }

  // _onKeyDown(/*object*/ event) {
  //   if (event.keyCode === ENTER_KEY_CODE) {
  //     this._save();
  //   }
  // }
};


  
City.propTypes = {
  name:  PropTypes.string,
  placeholder: PropTypes.string
};

City.defaultProps = {
  name: "",
  placeholder: "City",
  onSave: (value) => {console.log("Saved:" + value);}
}; 

export default City;