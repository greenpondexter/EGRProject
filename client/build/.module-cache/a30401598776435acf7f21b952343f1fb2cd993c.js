var React = require("react");
var EGR_Actions = require("../actions/EGR_Actions")
// Router
//var Router = require("react-router");

// Component
var DateTextDisplay = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("label", {class: "PeriodTextBoxTitle", for: "firstPeriodTextBox"}, "Previous Period:"), 
        React.createElement("input", {type: "text", id: "firstPeriodTextBox", value: this.props.startDate})
      )
    );
  }
});


module.exports = DateTextDisplay;



















