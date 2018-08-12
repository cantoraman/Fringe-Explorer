const PubSub = require('../helpers/pub_sub.js');

const MapView = function(){

}


MapView.prototype.bindEvents = function () {

  PubSub.subscribe('Map:attractions-loaded', (event) => {
    const attractions = event.detail;
  //  console.log(attractions);
    console.log(attractions);

    for(let attraction in attractions.query.pages){
      console.log(attractions.query.pages[attraction]);
      attraction = attractions.query.pages[attraction];

      var marker = L.marker([attraction.coordinates[0].lat, attraction.coordinates[0].lon]).addTo(mymap);

      if(attraction.thumbnail!=null){
      marker.bindPopup(`<a href="https://en.wikipedia.org/?curid=${attraction.pageid}"><b>${attraction.title}</b></a><br><img src="${attraction.thumbnail.source}">`);
      }
      else
      {
      marker.bindPopup(`<b>${attraction.title}</b>`);
      }

      if(attraction.terms!=null){
      marker.bindPopup(`<a href="https://en.wikipedia.org/?curid=${attraction.pageid}"><b>${attraction.title}</b></a><br><p>${attraction.terms.description[0]}</p><img src="${attraction.thumbnail.source}">`);
    };


    }


    var popup = L.popup(maxWidth=5)
    .setLatLng([55.955, -3.150])
    .setContent('<img src="a.png" alt="some image">')
    .openOn(mymap);

  });



};

module.exports = MapView;
