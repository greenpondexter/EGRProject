var Biff = require("../biff");
//var _ = require("lodash");
var _startDate = 5;

// Creates a DataStore
var DateStore = Biff.createStore({
  // Initial setup
  //_recipes: [],




  setDate: function(data){
    _startDate -= 1;
  },

  getDate: function () {
    return _startDate;
  }
}, function (payload) {
  if (payload.actionType === "DATE_CHANGE") {
    //this.setDate(payload.data);
    console.log(_startDate);
    _startDate = _startDate - 1;
    //DataStore.emitChange();
    this.emitChange();
  }

  return true;
});

module.exports = DateStore;
