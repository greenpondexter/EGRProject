// React
var React = require("react");
var http = require("http");

var jqueryUI = require("jquery")
console.log("abc");

// Component
var Slider = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () {
      return {
        value: null
      };
  },



  componentDidMount: function () {

    var self = this;
    var a = "bs";
    var b = $(this);
    $(this.refs.sliderHolder.getDOMNode()).slider({
      range: true,
      values: [10,25]
    });

  },

  render: function () {

    return (
      React.createElement("div", { ref: "sliderHolder"}
      )
    );
  }
});


module.exports = Slider;
