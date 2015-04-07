// Reacts
var React = require("react");
var Store = require("../stores/DateStore");
var Components = require("../stores/EGRComponentsStore")



// Component
var SearchBox = React.createClass({
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
      <div >
        
      </div>

    );
  }
});



module.exports = SearchBox;