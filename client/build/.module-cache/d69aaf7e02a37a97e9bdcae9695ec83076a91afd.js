// React
var React = require("../../node_modules/react");

// Router
//var Router = require("react-router");

// Component
var Buttons = React.createClass({
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
          "Buttons"
        )

      )
    );
  }
});


module.exports = Buttons;
