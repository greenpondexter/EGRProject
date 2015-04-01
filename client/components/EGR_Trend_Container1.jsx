// React
var React = require("react");
var ContainerHeader = require("./ContainerHeader");
var Slider = require("./Slider")

var EGR_Trend_Container1 = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      <div style={this.style}>
        <ContainerHeader/>
        {this.props.data}
        <Slider data = {this.props.data}/>
      </div>

    );
  }
});


module.exports = EGR_Trend_Container1;
