var Dispatcher = require('../flux/dispatcher');
var Constants = require('../constants/constants');

var Actions = {
  changeCity: function(city){
    Dispatcher.handleViewAction({
      actionType:Constants.CHANGE_CITY,
      item: city
    })
  }
}

module.exports = Actions