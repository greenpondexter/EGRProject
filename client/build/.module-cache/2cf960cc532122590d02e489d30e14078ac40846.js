// React
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");
var Button = require("./Button");


// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],
  data: {
    _startDate : 0,
    _endDate : 0,
    _dates : [_startDate, _endDate]


  },

  getInitialState: function () {

    return {
        ContainerTitle: "Trend",
        ContainerDescription: "Descrip",
        d: "fuck"
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
  React.render(React.createElement(Home, {data: this.data}), document.getElementById('content'));
});

module.exports = App;
