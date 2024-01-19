const express = require("express");
const messagesController = require('./controllers/messages.controller');
const fruitsController = require ('./controllers/fruits.controller');
//const messagesController = require('./controllers/messages.controller');
const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/fruits', fruitsController.postFruit );
app.get("/fruits", fruitsController.getFruits );
app.get("/fruits/:fruitId", fruitsController.getFruit );

app.get("/messages", messagesController.getMessages );
app.post("/messages", messagesController.postMessage );

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
