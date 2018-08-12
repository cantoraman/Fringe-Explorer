const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');


const SearchView = function (element){
this.element = element;
};

SearchView.prototype.bindEvents = function () {

  this.element.addEventListener('submit', (event) => {
      event.preventDefault();
      const searchInput = event.target.value;
      PubSub.publish('SelectView:change', selectedIndex);
    });

};




module.exports = SearchView;
