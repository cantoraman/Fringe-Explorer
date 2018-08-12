const PubSub = require('../helpers/pub_sub.js');

const MapView = function(){

}


MapView.prototype.bindEvents = function () {

  PubSub.subscribe('Map:attractions-loaded', (event) => {
    const attractions = event.detail;
    console.log(attractions);

    var marker = L.marker([55.955, -3.182]).addTo(mymap);
    marker.bindPopup('<b>Hello world!</b><br>I am a popup.<br><img src="a.png" alt="some image">').openPopup();

    var popup = L.popup(maxWidth=5)
    .setLatLng([55.955, -3.150])
    .setContent('<img src="a.png" alt="some image">')
    .openOn(mymap);

  });



};

module.exports = MapView;
