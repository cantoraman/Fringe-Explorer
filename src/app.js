const DataLoad = require('./models/dataLoad.js')
const StreetView = require('./views/street_view.js')
const SearchView = require('./views/search_view.js')
const MapView = require('./views/map_view.js')
const Request = require('./helpers/request.js');

document.addEventListener('DOMContentLoaded', () => {

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


  // dataLoad.getData(55.955, -3.182, 10000, 10);
  // str = new StreetView();
  // str.getStreet();

  //55.955, -3.182
  // fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=query&list=geosearch&gscoord=55.786952|-122.399523&gsradius=10000&gslimit=10&format=jsonfm")
  // .then(function(resp) {
  //     return resp.json()
  // });



  // button.addEventListener('click', ()=>{
  // //mouseover=)
  // console.log("CLCKD");
  // // const resultParagraph = document.querySelector('#button-result');
  // // resultParagraph.textContent = 'The Button is on fire!';
  // });

//api.php?action=query&list=geosearch&gscoord=37.786952|-122.399523&gsradius=10000&gslimit=10



});
