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

componentWillMount: function () {

  var self = this;
  var a = "bs";
  var b = $(this);
  $(this).slider();
},

componentWillUnmount: function () {




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
