// React
var React = require("react");
var http = require("http");

var jqueryUI = require("jquery")

// Component
var Slider = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],
  style : {
        color: 'white',
        width: '590px'
      },

  getInitialState: function () {
      return {
        value: null
      };
  },

  slideHandler: function (event, ui) {
    console.log("sliding");

  },

  componentDidMount: function () {

    var self = this;

    $(this.refs.sliderHolder.getDOMNode()).slider({
      range: true,
      values: [10,25],
      slide: function(event, ui){
        var a = event;
        var b = ui; 
      }
    });

  },

  render: function () {

    return (
      React.createElement("div", {style: this.style, ref: "sliderHolder"}
      )
    );
  }
});


module.exports = Slider;
