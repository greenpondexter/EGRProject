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
    var b = this.props.months[8]
    var c = this.props.months[this.props.endDate]; 
    var a = this.props.months[this.props.endDate].toString();
    var text = this.props.months[this.props.startDate].toString();

    return (

      

      React.createElement("div", null, 
        React.createElement("label", {className: "MIEGRPeriodTextBoxTitle", for: "MIEGRfirstPeriodTextBox"}, this.props.labelText), 
        React.createElement("input", {type: "text", id: "MIEGRfirstPeriodTextBox", 
        value: text})
      )
    );
  }
});


module.exports = DateTextDisplay;



















