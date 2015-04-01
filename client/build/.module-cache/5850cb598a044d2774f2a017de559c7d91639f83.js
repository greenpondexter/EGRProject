// React
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");
var Button = require("./Button");
var Store = require("../stores/DateStore");

getState = function(){
  return {
    _startDate: Store.getDate()
  }
}


// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () {

    //return getState();
    return null;

  },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  onChange: function () {
    //this.setState(getState());
  },

  shouldComponentUpdate: function() {
    //this.setState(getState());
    //return true;
  },

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(EGR_Trend_Container1, null), 

          this.props.data._startDate, 
        React.createElement(Button, {data: this.props.data})
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, {data: getState()}), document.getElementById('content'));
});

module.exports = App;
