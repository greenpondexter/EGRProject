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
  var self = this;
  var a = "bs";
  var b = $(this.refs.sliderHolder.getDOMNode());
  $(this.refs.sliderHolder.getDOMNode()).parent().parent().slider();

  this.setState({value: 8});

},

componentWillMount: function () {},

componentWillUnmount: function () {},

componentDidMount: function () {
  var self = this;
  var a = "bs";
  var b = $(this.refs.sliderHolder.getDOMNode());
  $(this.refs.sliderHolder.getDOMNode()).slider();

  this.setState({value: 8});

},

render: function () {
  return (
    React.createElement("div", {ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
