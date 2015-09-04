import React, { Component, PropTypes } from 'react';

class Weather extends Component {
  
  render() {
    return  <div>
              <label>Temperature</label>
              <input readOnly value={this.props.conditions.temperature}/>
              <label>Wind Speed</label>
              <input readOnly value={this.props.conditions.windspeed}/>
              <label>Wind Direction</label>
              <input readOnly value={this.props.conditions.winddir}/>
            </div>
  }
}

Weather.propTypes = {
    conditions: PropTypes.shape({
      temperature: PropTypes.number.isRequired,
      winddir: PropTypes.number.isRequired,
      windspeed: PropTypes.number.isRequired
    }).isRequired
};

// Weather.defaultProps = {
//     conditions: ({
//       temperature: 0,
//       winddir: 0,
//       windspeed: 0
//     })
// }; 

export default Weather;