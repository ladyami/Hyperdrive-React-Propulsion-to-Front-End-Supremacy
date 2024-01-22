const express = require("express");


const fruitsRouter = require('./routes/fruits.router');
const messagesRouter = require("./routes/messages.router");
//const messagesController = require('./controllers/messages.controller');
const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.use('/fruits', fruitsRouter);
app.use('/messages', messagesRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
