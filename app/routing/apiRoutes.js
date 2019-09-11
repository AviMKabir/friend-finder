var friends = require('../data/friends.js');

module.exports = function (app) {
  // //api path to get the friends data, responds with a json object (an array of friends). Activated on both html pages with blue API Link
  app.get('/api/friends', function (req,res) {
      res.json(friends);
  });

  

};