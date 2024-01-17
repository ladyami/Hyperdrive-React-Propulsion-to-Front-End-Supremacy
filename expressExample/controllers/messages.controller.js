function getMessages (req, res) {
  res.send("this is messages!");
}

function postMessage (req, res) {
  console.log("this is post messages!")
}


module.exports = {
  getMessages,
  postMessage,
}

