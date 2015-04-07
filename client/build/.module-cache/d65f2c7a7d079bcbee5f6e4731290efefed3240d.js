// React
var React = require("react");
var EGR_Actions = require("../actions/EGR_Actions")
// Router
//var Router = require("react-router");

// Component
var Button = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  clickHandler: function() {
      EGR_Actions.dateChange({
        _startDate: 1
      });
  },

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", {className: "MIEGRapplyButtonHolder"}, 
        React.createElement("button", {type: "button", className: "MIEGRready", onClick: this.clickHandler}, "Apply Filter"), 
        React.createElement("div", null)
      )
    );
  }
});


module.exports = Button;
