const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const DataLoad = function (){

};

DataLoad.prototype.bindEvents = function () {

  PubSub.subscribe('Map:attractions-loader', (event) => {
        const streetCoordinates = event.detail;
        this.getData(streetCoordinates.latitude, streetCoordinates.longitude, 10000, 10);
    } );

};

DataLoad.prototype.getData = function (latitude, longitude, radius, limit) {
  const request = new
  Request(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=coordinates|pageimages|pageterms&colimit=50&piprop=thumbnail&pithumbsize=144&pilimit=50&wbptterms=description&generator=geosearch&ggscoord=${latitude}|${longitude}&ggsradius=${radius}&ggslimit=${limit}`);
  request.get( (data) => {
      PubSub.publish('Map:attractions-loaded', data);
  });
};


module.exports = DataLoad;
