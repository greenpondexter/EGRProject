// React
var React = require("react");
var ContainerHeader = require("./ContainerHeader");

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
        this.props.d, 
        React.createElement(Slider, null)
      )

    );
  }
});


module.exports = EGR_Trend_Container1;
