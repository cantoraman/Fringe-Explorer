const DataLoad = require('./models/dataLoad.js')
const StreetView = require('./views/street_view.js')
const SearchView = require('./views/search_view.js')
const MapView = require('./views/map_view.js')
const Request = require('./helpers/request.js');
const MapStarter = require('./helpers/map_starter.js');




document.addEventListener('DOMContentLoaded', () => {



  mapStarter = new MapStarter();
  mapStarter.initializeMap();


  const searchNode = document.querySelector('.search-form')
  const searchView = new SearchView(searchNode);
  searchView.bindEvents();

  const infoNode = document.querySelector('.info-text')
  streetView = new StreetView(infoNode);
  streetView.bindEvents();


  const mapView = new MapView();
  mapView.bindEvents();

  dataLoad = new DataLoad();
  dataLoad.bindEvents();

});
