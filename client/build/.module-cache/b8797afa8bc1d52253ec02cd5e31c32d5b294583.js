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
          "Title"
        ), 
        React.createElement("p", null), 
        React.createElement("div", null, 
          "Description"
        )
      )

    );
  }
});


module.exports = ContainerHeader;
