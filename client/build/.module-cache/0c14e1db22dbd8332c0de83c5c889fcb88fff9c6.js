// React
var React = require("../../node_modules/react");
var React = require("./Button")

// Router
//var Router = require("react-router");

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
          "home renderededed"
        ), 
        React.createElement(Buttons, null)
      )
    );
  }
});

React.render(React.createElement(Home, null), document.body);

module.exports = Home;
