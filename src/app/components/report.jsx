import React, { Component, PropTypes } from 'react';
import City from './city'; 
import Weather from './weather'; 
import WeatherStore from '../stores/weather'; 

function getWeather(city){
  return WeatherStore.getWeather(city)
}
  
class Report extends Component {
  constructor(props) {
    super(props);
    this.state = getWeather();
    this._onCityChange = this._onCityChange.bind(this);
  }

  render() {
    return  <div className="col-md-3">
                <div className="title">{this.props.title}</div>
                <City onChange={this._onCityChange}/>
                <Weather conditions={this.state.conditions}/>
            </div>
  }
  
  _onCityChange(city){
    this.setState(getWeather(city));
  }
};

Report.propTypes = {
    title: PropTypes.string.isRequired,
    conditions: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      winddir: PropTypes.number.isRequired,
      windspeed: PropTypes.number.isRequired
    })
}

export default Report;