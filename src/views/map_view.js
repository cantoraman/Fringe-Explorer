const PubSub = require('../helpers/pub_sub.js');

const MapView = function(){

}


MapView.prototype.bindEvents = function () {

  PubSub.subscribe('Instrument:all-instruments-ready', (event) => {
    const instruments = event.detail;
    this.fillSelections(instruments);
  });



};
