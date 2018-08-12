const API_KEY = require('./api_key.js');


const MapStarter = function (){

};

MapStarter.prototype.initializeMap = function () {
  const headNode = document.querySelector('#map');
  mymap = L.map(headNode).setView([55.953056, -3.188889], 13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox.streets',
  accessToken: API_KEY
  }).addTo(mymap);
  markers = new L.FeatureGroup();

};


module.exports=MapStarter;
