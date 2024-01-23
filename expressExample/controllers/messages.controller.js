const path = require('path');

function getMessages (req, res) {
  
  res.sendFile(path.join(__dirname, '..', 'public', 'images',  'food.jpg'));
}

function postMessage (req, res) {
  console.log("this is post messages!")
}


module.exports = {
  getMessages,
  postMessage,
}

