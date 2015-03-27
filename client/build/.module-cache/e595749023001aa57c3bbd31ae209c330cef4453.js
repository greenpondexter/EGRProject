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

componentDidUpdate: function () {


},

componentWillMount: function () {},

componentWillUnmount: function () {

  var self = this;
  var a = "bs";
  var b = $(this.refs.sliderHolder.getDOMNode());
  $(this.refs.sliderHolder.getDOMNode()).slider();
},

componentDidMount: function () {




},

render: function () {
  return (
    React.createElement("div", {ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
