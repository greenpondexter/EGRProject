// React
var React = require("react");
var ContainerHeader = require("./ContainerHeader");
var Slider = require("./Slider")
var DateTextDisplay = require("./DateTextDisplay");

var EGR_Trend_Container1 = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", {style: this.style}, 
        React.createElement(ContainerHeader, null), 
          React.createElement("div", {class: "MIEGRsliderHolder"}, 
            React.createElement(Slider, {data: this.props.data}), 
            React.createElement(DateTextDisplay, {data: this.props.data, whichSlider: 1}), 
            React.createElement(Slider, {data: this.props.data, whichSlider: 2}), 
            React.createElement(DateTextDisplay, {data: this.props.data})
          )
      )

    );
  }
});


module.exports = EGR_Trend_Container1;
