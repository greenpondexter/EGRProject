// React
var React = require("react");
var http = require("http");

var jqueryUI = require("jquery")


// Component
var Slider = React.createClass({
displayName: "Home",
propTypes: {},
mixins: [],

getInitialState: function () {return null;},

componentDidUpdate: function () {
  var self = this;
  var a = "bs";
  var b = $(this.refs.sliderHolder.getDOMNode());
  $(this).slider();

},

componentWillMount: function () {},

componentWillUnmount: function () {},

componentDidMount: function () {
  var self = this;
  var a = "bs";
  var b = $(this.refs.sliderHolder.getDOMNode());
  $(this).slider();

},

render: function () {
  return (
    React.createElement("div", {ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
