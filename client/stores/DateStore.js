var Biff = require("../biff");
//var _ = require("lodash");
var _startDate = 10;
var _endDate = 20;

// Creates a DataStore
var DateStore = Biff.createStore({
  // Initial setup
  //_recipes: [],


  setDate: function(data){
    _startDate = data._startDate;
    _endDate = data._endDate; 
  },

  getStart: function () {
    return _startDate;
  },

  getEnd: function () {
    return _endDate;
  }
}, function (payload) {
  if (payload.actionType === "DATE_CHANGE") {
    //this.setDate(payload.data);
    console.log(_startDate + "," + _endDate);
    //_startDate = _startDate - 1;
    //DataStore.emitChange();
    this.emitChange();
  }
  if (payload.actionType === "SLIDER_DATE_CHANGE") {
    //console.log("a"+payload.data)
    this.setDate(payload.data)
    console.log(_startDate + "," + _endDate);
    //_startDate = _startDate - 1;
    //DataStore.emitChange();
    this.emitChange();
  }

  return true;
});

module.exports = DateStore;
