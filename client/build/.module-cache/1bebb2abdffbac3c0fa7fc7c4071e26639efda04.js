// React
var React = require("react");
var jqueryUI = require("jquery-ui")


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
  var self = this();
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
