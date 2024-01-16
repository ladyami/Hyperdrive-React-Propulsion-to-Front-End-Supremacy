const express = require("express");
const app = express();
const PORT = 3000;

const fruits = [
  { id: 0, name: "Apple", price: 0.5 },
  { id: 1, name: "Pineapple", price: 0.7 },
  { id: 2, name: "Banana", price: 0.4 },
  { id: 3, name: "Pear", price: 1 },
  { id: 4, name: "Mango", price: 0.9 },
];

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post('/fruits', (req, res) => {

if(!req.body.name){
 return res.status(400).json({
  error: 'Missing  fruits  name '
})
}

const newFruit ={
name: req.body.name,
id: fruits.length
};
fruits.push(newFruit);
res.json(newFruit)
});

app.get("/fruits", (req, res) => {
  res.json(fruits);
});
app.get("/fruits/:fruitId", (req, res) => {
  const fruitId = Number(req.params.fruitId);
  const fruit = fruits[fruitId];
  if (fruit) {
    res.json(fruit);
  } else {
    res.status(404).json({ message: "Fruit not found" });
  }
});

app.get("/messages", (req, res) => {
  res.send("this is messages!");
});

app.post("/messaages", (req, res) => {
  console.log("this is post messages!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});
