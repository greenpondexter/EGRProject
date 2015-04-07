var Biff = require("../biff");
//var _ = require("lodash");
//var _startDate = 10;
//var _endDate = 20;

// Creates a DataStore
var EGRComponentsStore = Biff.createStore({
  // Initial setup
  //_recipes: [],
  data: {
    
    _textBoxText1 : "Previous Period: ",
    _textBoxText2 : "Current Period: ",
   

    },
  
  setTextBoxText: function(){
      this.data._textBoxText1 += this.data._textBoxText1;
  },
 
  getTextBoxText: function(whichBox){
     if(whichBox === 1){
      return this.data._textBoxText1;
     }
     else{
      return this.data._textBoxText2;
     }
  },

  

}, function (payload) {
  
  if (payload.actionType === "TEXTBOX_CHANGE") {
    this.setTextBoxText(); 
    this.emitChange();
  }

  return true;
});

module.exports = EGRComponentsStore;
