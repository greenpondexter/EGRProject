// React
var React = require("react");
var http = require("http");

var jqueryUI = require("jquery");
var EGR_Actions = require("../actions/EGR_Actions");

// Component
var Slider = React.createClass({
  displayName: "Home",
  propTypes: {},
  mixins: [],
  style : {
        color: 'white',
        width: '590px'
      },

  getInitialState: function () {
      return {
        value: null
      };
  },

  slideHandler: function (evt, u) {
    
    if (u.value === u.values[0]){
       var dateStart = $(this.refs.sliderHolder.getDOMNode()).slider("values", 0);
       var dateEnd = $(this.refs.sliderHolder.getDOMNode()).slider("values", 1);
       EGR_Actions.SliderDateChange({
        _startDate: dateStart,
        _endDate: dateEnd
      });
    }

  },

  componentDidMount: function () {

    var self = this;

    $(this.refs.sliderHolder.getDOMNode()).slider({
      ref: self,
      range: true,
      values: [10,25],
      min: 0,
      max: 23,
      stop: function(event, ui){
          self.slideHandler(event, ui);
      }
    });

  },

  render: function () {

    return (
      React.createElement("div", {style: this.style, ref: "sliderHolder"})
    );
  }
});


module.exports = Slider;
