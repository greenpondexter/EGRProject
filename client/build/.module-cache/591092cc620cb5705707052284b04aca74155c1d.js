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
    
    if (u.value === u.values[0]){
       $(this.refs.sliderHolder.getDOMNode()).slider("values", 0, 1 );
    }

  },

  componentDidMount: function () {

    var self = this;

    $(this.refs.sliderHolder.getDOMNode()).slider({
      ref: self,
      range: true,
      values: [10,25],
      slide: function(event, ui){
          self.slideHandler(event, ui);
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
