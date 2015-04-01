// React
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");
var Button = require("./Button");
var data = {
  _startDate: 0,
  _endDate: 0
}

// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () {

    return {

    };

  },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(EGR_Trend_Container1, null), 
        React.createElement(Button, {data: this.props.data})
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(App, {data: data}), document.getElementById('content'));
});

module.exports = App;
