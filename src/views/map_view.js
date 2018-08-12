const PubSub = require('../helpers/pub_sub.js');

const MapView = function(){

}

MapView.prototype.bindEvents = function () {

  PubSub.subscribe('Map:attractions-loaded', (event) => {
    const attractions = event.detail;
    markers.clearLayers();


    for(let attraction in attractions.query.pages){
      attraction = attractions.query.pages[attraction];

      var marker = L.marker([attraction.coordinates[0].lat, attraction.coordinates[0].lon])//.addTo(mymap);
      markers.addLayer(marker);

      if(attraction.thumbnail!=null){
      marker.bindPopup(`<a href="https://en.wikipedia.org/?curid=${attraction.pageid}"><b>${attraction.title}</b></a><br><img src="${attraction.thumbnail.source}">`);
      }
      else
      {
      marker.bindPopup(`<a href="https://en.wikipedia.org/?curid=${attraction.pageid}"><b>${attraction.title}</b></a>`);
      }

      if(attraction.terms!=null && attraction.thumbnail!=null){
      marker.bindPopup(`<a href="https://en.wikipedia.org/?curid=${attraction.pageid}"><b>${attraction.title}</b></a><br><p>${attraction.terms.description[0]}</p><img src="${attraction.thumbnail.source}">`);};
    };
    mymap.addLayer(markers);
    });
    mymap.on('popupopen', this.passPageId);


};



MapView.prototype.passPageId = function (e) {
  var textToParse = e.popup._content;
  var indexOfFirst = textToParse.indexOf("d=");
  var indexOfSecond = textToParse.indexOf('">');
  var id = textToParse.slice(indexOfFirst+2, indexOfSecond);
  PubSub.publish('MapView:select-marker', id);
  };




module.exports = MapView;
