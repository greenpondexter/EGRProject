// Reacts
var React = require("react");
var Slide = require("./Slider")
var MIEGRTrendContainer1 = require("./MIEGRTrendContainer1");
var MIEGRTrendContainer2 = require("./MIEGRTrendContainer2")
var Button = require("./Button");
var Store = require("../stores/DateStore");

getState = function(){
  return {
    errors: Store.getErrors(),
    pending: Store.getPending(),
    startDate1: Store.getStart(1),
    endDate1: Store.getEnd(1),
    startDate2: Store.getStart(2),
    endDate2: Store.getEnd(2),
    months: Store.getMonths(), 
    textBox1: Store.getTextBoxText(1),
    textBox2: Store.getTextBoxText(2),
    headerData: Store.getHeaderData()
  }
}


// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [Store.mixin],


  getInitialState: function () {

    return getState();
  },

  storeDidChange: function(){
    this.setState(getState());
  },

  render: function () {
    return (
      React.createElement("div", {className: "MIEGRMasterContainer"}, 
        React.createElement(MIEGRTrendContainer1, {data: this.state}), 
        React.createElement(Button, {data: this.state, className: "MIEGRapplyButtonHolder"}), 
        React.createElement(MIEGRTrendContainer2, {data: this.state})
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, null), document.getElementById('content'));
});

module.exports = App;
