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
style : {
      color: 'white',
      width: '590px'
    },

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
    React.createElement("div", {style: this.style, ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
