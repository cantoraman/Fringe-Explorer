const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const DataLoad = function (){

};

DataLoad.prototype.getData = function (latitude, longitude, radius, limit) {
  const request = new Request(`https://en.wikipedia.org/w/api.php?format=json&origin=*&action=query&list=geosearch&gscoord=${latitude}|${longitude}&gsradius=${radius}&gslimit=${limit}`);
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


module.exports = DataLoad;
