const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const DataLoad = function (){

};

DataLoad.prototype.bindEvents = function () {

  PubSub.subscribe('Map:attractions-loader', (event) => {
        const streetCoordinates = event.detail;
        console.log("Street Coordinates", streetCoordinates);
        this.getData(streetCoordinates.latitude, streetCoordinates.longitude, 10000, 10);
    } );

};

DataLoad.prototype.getData = function (latitude, longitude, radius, limit) {
  const request = new //Request(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=geosearch&gscoord=${latitude}|${longitude}&gsradius=${radius}&gslimit=${limit}`);
  Request(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&prop=coordinates|pageimages|pageterms&colimit=50&piprop=thumbnail&pithumbsize=144&pilimit=50&wbptterms=description&generator=geosearch&ggscoord=${latitude}|${longitude}&ggsradius=${radius}&ggslimit=${limit}`);
  request.get( (data) => {
      PubSub.publish('Map:attractions-loaded', data);
  });
};


// const url = "https://munroapi.herokuapp.com/api/munros";
//
//
// const request = new Request(url);
// request.get().then((data) => {
//   console.log("data is:");
//   console.log(data);
// }).catch((err) => {
//   console.error(err)
// });


module.exports = DataLoad;
