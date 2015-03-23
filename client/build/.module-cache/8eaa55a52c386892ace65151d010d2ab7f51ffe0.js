// React
var React = require("./react");

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
          "home rendereded"
        )

      )
    );
  }
});

module.exports = Home;
