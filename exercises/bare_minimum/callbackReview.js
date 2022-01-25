/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  // read the whole file and store it in a string
  var file = fs.readFile(filePath, (error, data) => {
    // split the string using '\n' character
    if (!data) {
      callback(error);
    } else {
      var arrOfStrings = data.toString().split('\n');
      //  this gives you an array of strings
      callback(error, arrOfStrings[0]);
      //  return the array's first element
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (error, response) => {
    if (error) {
      callback(error);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
