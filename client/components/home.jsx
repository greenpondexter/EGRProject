// React
var React = require("react");
//var Buttons = require("./Button")

// Router
//var Router = require("react-router");
console.log("a");
console.log("B");

// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],

  getInitialState: function () { return null; },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      <div>
        <p>
          home render
        </p>

      </div>
    );
  }
});

React.render(<Home/>, document.getElementById('content'));

//module.exports = Home;
