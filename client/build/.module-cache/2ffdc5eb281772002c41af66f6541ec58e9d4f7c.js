// React
var React = require("react");

// Component
var ContainerHeader = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "MIEGRContainerTitle"}, 
          this.props.headerData.ContainerTitle
        ), 
        React.createElement("p", null), 
        React.createElement("div", {className: "MIEGRContainerDescription"}, 
          this.props.headerData.ContainerDescription
        )
      )

    );
  }
});


module.exports = ContainerHeader;
