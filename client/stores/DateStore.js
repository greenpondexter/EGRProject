var Biff = require("../biff");
//var _ = require("lodash");
//var _startDate = 10;
//var _endDate = 20;

// Creates a DataStore
var DateStore = Biff.createStore({
  // Initial setup
  //_recipes: [],
  data: {
    _startDate1: 10,
    _endDate1: 20,
    _startDate2: 5,
    _endDate2: 12, 
    _months : 
    ["January 2012", "February 2012", "March 2012", "May 2012", "June 2012",
    "July 2012", "August 2012", "September 2012", "October 2012", "November 2012",
    "December 2012", "January 2013", "February 2013", "March 2013", "May 2013", "June 2013",
    "July 2013", "August 2013", "September 2013", "October 2013", "November 2013",
    "December 2013"],
    _textBoxText1 : "Previous Period: ",
    _textBoxText2 : "Current Period: ",
    _headerData : {
      container1: 
        {
          ContainerTitle: "",
          ContainerDescription: ""
        },
      container2:
        {
          ContainerTitle: "PMPM Statistics",
          ContainerDescription: ""
        },
      container3: {
          ContainerTtile: "",
          ContainerDescription: ""
      }
    }

    },
  

  setDate: function(data){
    if(data.whichSlider == 1){
      this.data._startDate1 = data._startDate;
      this.data._endDate1 = data._endDate;
    }
    else{
      this.data._startDate2 = data._startDate;
      this.data._endDate2 = data._endDate;
    }

  },

  getStart: function (whichSlider) {
    if(whichSlider == 1){
      return this.data._startDate1;
    }
    else{
      return this.data._startDate2;
    }
  },

  getEnd: function (whichSlider) {
    if(whichSlider == 1){
      return this.data._endDate1;
    }
    else{
      return this.data._endDate2;
    }
  },

  getMonths: function () {
    return this.data._months; 
  },

  getTextBoxText: function(whichBox){
     if(whichBox === 1){
      return this.data._textBoxText1;
     }
     else{
      return this.data._textBoxText2;
     }
  },

  getHeaderData: function(){
    return this.data._headerData;
  }

}, function (payload) {
  if (payload.actionType === "DATE_CHANGE") {
    //this.setDate(payload.data);
    //console.log(this.data_startDate + "," + this.data_endDate);
    //_startDate = _startDate - 1;
    //DataStore.emitChange();
    this.emitChange();
  }
  if (payload.actionType === "SLIDER_DATE_CHANGE") {
    //console.log("a"+payload.data)
    this.setDate(payload.data)
    //console.log(this.data_startDate + "," + this.data_endDate);
    //_startDate = _startDate - 1;
    //DataStore.emitChange();
    this.emitChange();
  }

  return true;
});

module.exports = DateStore;
