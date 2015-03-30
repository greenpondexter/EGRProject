// React
var React = require("react");
var ContainerHeader = require("./ContainerHeader");

var Container = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(ContainerHeader, null)
      )

    );
  }
});


module.exports = Container;
