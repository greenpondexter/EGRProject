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

  slideHandler: function (evt, u) {
    var a = evt;
    var b = u;
    console.log("sliding");

  },

  componentDidMount: function () {

    var self = this;

    $(this.refs.sliderHolder.getDOMNode()).slider({
      ref: self,
      range: true,
      values: [10,25],
      slide: function(event, ui){
          var a = self; 
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
