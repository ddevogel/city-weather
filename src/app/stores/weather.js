import Dispatcher from '../flux/dispatcher'
import Store      from '../flux/store'
import Constants  from '../constants/constants'
import assign     from 'object-assign'

function getRandomWeather(){
  return {'temperature': getRandomInteger(-10, 100), 'sky': '', 'windspeed': getRandomInteger(0, 40), 'winddir': getRandomInteger(0, 359)}
}

function getRandomInteger(min, max){
  return Math.floor((Math.random() * max) + min)
}

var WeatherStore = assign({}, Store, {

  state:{},
  city: 0,
  conditions: {'temperature': 10, 'sky': '', 'windspeed': 0.0, 'winddir': 0},
  reports: [{ 'temperature': 70, 'sky': 'rain', 'windspeed': 3.7, 'winddir': 200}, { 'temperature': 80, 'sky': 'clear', 'windspeed': 23.4, 'winddir': 87.3}],

  getWeather: function(city){
    if(!city){
      return {'city': '', conditions: {'temperature': 0, 'sky': '', 'windspeed': 0.0, 'winddir': 0}};
    } else{
      return {'city': city, conditions: getRandomWeather()};
    }
    
    // if(city === 'Paris, FR'){
    //   return {'city': city, conditions: this.reports[0]};
    // } else {
    //   return {'city': city, conditions: this.reports[1]};
    // }
  },
  
  changeCity: function(city){
    this.emitChange(this.CHANGE_EVENT);
  }
});

module.exports = WeatherStore;
