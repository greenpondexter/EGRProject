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
        <div className = "MIEGRContainerTitle">
          {this.props.headerData.ContainerTitle}
        </div>
        <p></p>
        <div className = "MIEGRContainerDescription">
          {this.props.headerData.ContainerDescription}
        </div>
      </div>

    );
  }
});


module.exports = ContainerHeader;
