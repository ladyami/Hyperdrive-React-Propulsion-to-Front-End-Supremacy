const model = require('../models/fruits.model');


function  postFruit (req, res)  {

  if(!req.body.name){
   return res.status(400).json({
    error: 'Missing  fruits  name '
  })
  }
  
  const newFruit ={
  name: req.body.name,
  id: model.length
  };
  model.push(newFruit);
  res.json(newFruit)
  }

  function getFruits (req, res) {
    res.json(model);
  }
  function getFruit(req, res)  {
    const fruitId = Number(req.params.fruitId);
    const fruit = model[fruitId];
    if (fruit) {
      res.json(fruit);
    } else {
      res.status(404).json({ message: "Fruit not found" });
    }
  }

  module.exports = {
    postFruit,
    getFruits,
    getFruit,

  }
  