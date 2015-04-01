var Biff = require("../biff");



var EGR_Actions = Biff.createActions({

  dateChange: function (data) {

    //var a = JSON.parse(data);
    var b = data;
    this.dispatch({
      actionType: "DATE_CHANGE",
      data: data
    });
  }
});

module.exports = EGR_Actions;
