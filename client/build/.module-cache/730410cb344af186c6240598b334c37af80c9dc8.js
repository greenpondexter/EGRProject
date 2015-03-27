// React
var React = require("react");
var jqueryUI = require("jquery-ui")


// Component
var Slider = React.createClass({
displayName: "Home",
propTypes: {},
mixins: [],

getInitialState: function () {},

componentDidUpdate: function () {

    var self = this();
    $(this.refs.sliderHolder.getDOMNode()).
      jqueryUI.slider();


},

componentWillMount: function () {},

componentWillUnmount: function () {},

componentDidMount: function () {},

render: function () {
  return (
    React.createElement("div", {ref: "sliderHolder"}
    )
  );
}
});


module.exports = Slider;
