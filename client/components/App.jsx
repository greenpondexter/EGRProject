// React
var React = require("react");
var Slide = require("./Slider")
var EGR_Trend_Container1 = require("./EGR_Trend_Container1");
var Button = require("./Button");
var Store = require("../stores/DateStore");

getState = function(){
  return {
    errors: Store.getErrors(),
    pending: Store.getPending(),
    _startDate: Store.getDate()
  }
}


// Component
var App = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [Store.mixin],


  getInitialState: function () {

    return getState();
  },

  storeDidChange: function(){
    this.setState(getState());
  },

  render: function () {
    return (
      <div>
        <EGR_Trend_Container1 />

          {this.state._startDate}
        <Button data={this.state._startDate}/>
      </div>

    );
  }
});

$(window).load(function(){
  React.render(<App/>, document.getElementById('content'));
});

module.exports = App;
