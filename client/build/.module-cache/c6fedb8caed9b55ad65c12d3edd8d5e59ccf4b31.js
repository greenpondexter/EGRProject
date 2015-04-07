// React
var React = require("react");
var ContainerHeader = require("./ContainerHeader");
var Slider = require("./Slider")
var DateTextDisplay = require("./DateTextDisplay");

var MIEGRTrendContainer1 = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", {className: "MIEGRDashboardContaine"}, 
        React.createElement(ContainerHeader, {headerData: this.props.data.headerData.container2})
          
      )

    );
  }
});


module.exports = MIEGRTrendContainer1;
