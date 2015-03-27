// React
var React = require("react");
var Slide = require("./Slider")



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
          <div> </div>
        <Slide/>
      </div>

    );
  }
});

$(window).load(function(){
  React.render(<Home/>, document.getElementById('content'));
});
//module.exports = Home;
