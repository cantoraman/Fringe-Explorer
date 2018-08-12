const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const SearchView = function (element){
this.element = element;
};

SearchView.prototype.bindEvents = function () {

  this.element.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
      const searchInput = event.target.searchInput.value;
      console.log(searchInput);
      PubSub.publish('SearchView:search-request', searchInput);
    });

};




module.exports = SearchView;
