// React
var React = require("react");

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
      <div>
        <p>
          Buttons
        </p>

      </div>
    );
  }
});


module.exports = Buttons;
