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
        React.createElement("div", null, 
          this.props.ContainerTitle
        ), 
        React.createElement("p", null), 
        React.createElement("div", null, 
          this.props.ContainerDescription
        )
      )

    );
  }
});


module.exports = ContainerHeader;
