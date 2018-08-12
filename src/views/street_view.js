const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const StreetView = function (){

};

StreetView.prototype.bindEvents = function () {
  PubSub.subscribe('SearchView:search-request', (event) => {
      const streetName = event.detail;
      this.getStreet(streetName);
    });

};



StreetView.prototype.getStreet = function (streetName) {
  const request = new Request("https://nominatim.openstreetmap.org/search/gb/edinburgh/leith%20walk/135?format=json&polygon=1&addressdetails=1");
  console.log(request);
  request.get( (data) => {
    console.log(data);
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


module.exports = StreetView;
