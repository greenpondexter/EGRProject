// React
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");


// Component
var Home = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],


  getInitialState: function () {

    return {
        ContainerTitle: "Trend",
        ContainerDescription: "Descrip",
        d: "fuck"
    };

  },

  componentWillMount: function () {},

  componentWillUnmount: function () {},

  render: function () {
    return (
      <div>


        <EGR_Trend_Container1 data={this.state.d}/>
      </div>

    );
  }
});

$(window).load(function(){
  React.render(<Home/>, document.getElementById('content'));
});

module.exports = Home;
