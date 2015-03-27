// React
var React = require("react");
var http = require("http");

var jqueryUI = require("jqueryui")


// Component
var Slider = React.createClass({
displayName: "Home",
propTypes: {},
mixins: [],

getInitialState: function () {return null;},

componentDidUpdate: function () {


},

componentWillMount: function () {},

componentWillUnmount: function () {},

componentDidMount: function () {
  var self = this;
  var a = "bs";
  $(this.refs.sliderHolder.getDOMNode()).
    jqueryUI.slider();

},

render: function () {
  return (
    React.createElement("div", {ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
