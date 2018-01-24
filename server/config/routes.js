// const games = require('./../controllers/games.js');
const path = require('path');

module.exports = function(app){
 
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('./public/dist/index.html'));
  })
 

}
