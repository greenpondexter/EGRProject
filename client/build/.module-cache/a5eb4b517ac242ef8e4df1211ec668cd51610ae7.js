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
        _startDate: 1,
        _endDate: 1

      });
  },

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("button", {type: "button", onClick: this.clickHandler}, "Apply"), 
        React.createElement("div", null, this.props.data._startDate)
      )
    );
  }
});


module.exports = Button;
