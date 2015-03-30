// React
var React = require("react");
var Slide = require("./Slider")
var Container = require("./EGR_Trend_Container1");


// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () {

    return {
        ContainerTitle: "Trend",
        ContainerDescription: "Descrip",
        d: "fuck"
    };

  },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      React.createElement("div", null, 


        React.createElement(EGR_Trend_Container1, {data: this.state.D})
      )

    );
  }
});

$(window).load(function(){
  React.render(React.createElement(Home, null), document.getElementById('content'));
});

module.exports = Home;
