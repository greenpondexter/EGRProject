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

      EGR_Actions.textBoxChange({
        _newText: "aa"
      })
  },

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      <div className = "MIEGRapplyButtonHolder">
        <button type="button" className = "MIEGRready" onClick={this.clickHandler}>Apply Filter</button>
        <div></div>
      </div>
    );
  }
});


module.exports = Button;
