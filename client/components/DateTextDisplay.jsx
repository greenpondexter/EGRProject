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

    var e = this.props.months[this.props.endDate].toString();
    var b = this.props.months[this.props.startDate].toString();
    var final = b + " - " + e;

    return (

      

      <div>
        <label className ="MIEGRPeriodTextBoxTitle" for="MIEGRfirstPeriodTextBox">{this.props.labelText}</label>
        <input type="text" id="MIEGRfirstPeriodTextBox" 
        value={final} />
      </div>
    );
  }
});


module.exports = DateTextDisplay;



















