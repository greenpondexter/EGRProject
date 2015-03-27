// React
var React = require("react");
var Slide = require("./Slider")



// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, 
          "home render"
        ), 
          React.createElement("div", {id: "olive"}, " "), 
        React.createElement(Slide, null)
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(Home, null), document.getElementById('content'));
});
//module.exports = Home;
