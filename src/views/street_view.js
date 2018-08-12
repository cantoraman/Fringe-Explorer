const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const StreetView = function (element){
this.element = element;
};

StreetView.prototype.bindEvents = function () {

  PubSub.subscribe('SearchView:search-request', (event) => {
    const streetName = event.detail;
    this.getStreet(streetName);
    });

  PubSub.subscribe('MapView:select-marker', (event) => {
    const infoParagraph = event.detail;
    const infoNode = document.createElement('p');
    infoNode.textContent = infoParagraph;
    this.element.innerHTML = '';
    this.element.appendChild(infoParagraph);


    });
};


//https://en.wikipedia.org/w/api.php?pageids=18630637&format=json&action=query&prop=extracts&exsentences=3




StreetView.prototype.getStreet = function (streetName) {
  const request = new Request(`https://nominatim.openstreetmap.org/search/gb/edinburgh/${streetName}/135?format=json&addressdetails=1`);
  console.log(request);
  request.get( (data) => {
    let streetCoordinates = this.getStreetCoordinates(data);
    PubSub.publish('Map:attractions-loader', streetCoordinates);
  });
};

StreetView.prototype.getStreetCoordinates = function (streetObject) {
    let streetCoordinates = {
                        latitude: streetObject[0].lat,
                        longitude: streetObject[0].lon
                      };
    return streetCoordinates;
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
