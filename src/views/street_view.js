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
    //id'den wikipedia sayfasi bul

    const request = new Request(`https://en.wikipedia.org/w/api.php?pageids=${event.detail}&format=json&origin=*&action=query&prop=extracts&exsentences=3`);

    request.get( (data) => {
      this.displayWikiText(data);
    });
  });
};

StreetView.prototype.displayWikiText = function (data) {
  this.element.innerHTML = '';
  const title = data.query.pages[Object.keys(data.query.pages)[0]].title;
  const extract = data.query.pages[Object.keys(data.query.pages)[0]].extract;

  const infoNode = document.createElement('div');
  const header = document.createElement('h3');
  header.textContent = title;
  infoNode.innerHTML = extract;
  this.element.appendChild(header);
  this.element.appendChild(infoNode);
};

StreetView.prototype.getStreet = function (streetName) {
  const request = new Request(`https://nominatim.openstreetmap.org/search/gb/edinburgh/${streetName}/135?format=json&addressdetails=1`);
  request.get( (data) => {
    let streetCoordinates = this.getStreetCoordinates(data);
    mymap.setView([streetCoordinates.latitude, streetCoordinates.longitude], 16);
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


module.exports = StreetView;
