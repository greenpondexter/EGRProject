// Reacts
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");
var Button = require("./Button");
var Store = require("../stores/DateStore");

getState = function(){
  return {
    errors: Store.getErrors(),
    pending: Store.getPending(),
    startDate: Store.getStart(),
    endDate: Store.getEnd()
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
      React.createElement("div", null, 
        React.createElement(EGR_Trend_Container1, {data: this.state}), 
        React.createElement(Button, {data: this.state})
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, null), document.getElementById('content'));
});

module.exports = App;
