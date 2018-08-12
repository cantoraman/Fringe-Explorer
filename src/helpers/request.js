const Request = function (url) {
  this.url = url;
};

Request.prototype.get = function (onComplete) {
//fetch doesn't work as intended

  const xhr = new XMLHttpRequest(); //Builtin browser thing
  xhr.open('GET', this.url);
  xhr.setRequestHeader('Accept', 'application/json');
  // we attach this header to our request
  //we are telling, give us not html but json... we expect and accept that

  //then we send
  xhr.send();

  //then we wait for loading
  //because it is asynchronous
  xhr.addEventListener('load', () => {
  if (xhr.status != 200){
    return;
  }

  const jsonString = xhr.responseText;
  const data = JSON.parse(jsonString);
  onComplete(data);
  });

};



module.exports = Request;
