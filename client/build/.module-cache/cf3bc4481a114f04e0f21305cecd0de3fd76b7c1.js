// React
var React = require("react");
var jqueryUI = require("jquery-ui")


// Component
var Slider = React.createClass({
displayName: "Home",
propTypes: {},
mixins: [],

getInitialState: function () { return null; },

componentWillMount: function () {},

componentWillUnmount: function () {},

render: function () {
  return (
    React.createElement("div", null, 
      "var a = $(\"olive\");" + ' ' +
      "a.jqueryUI.slider();"
    )
  );
}
});


module.exports = Slider;
