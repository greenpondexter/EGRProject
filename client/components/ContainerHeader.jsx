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
      <div>
        <div>
          {this.props.ContainerTitle}
        </div>
        <p></p>
        <div>
          {this.props.ContainerDescription}
        </div>
      </div>

    );
  }
});


module.exports = ContainerHeader;
