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
        React.createElement("label", {class: "MIEGRPeriodTextBoxTitle", for: "MIEGRfirstPeriodTextBox"}, "Previous Period:"), 
        React.createElement("input", {type: "text", id: "MIEGRfirstPeriodTextBox", value: this.props.data.startDate})
      )
    );
  }
});


module.exports = DateTextDisplay;



















