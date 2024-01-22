const express = require('express');

const fruitsController = require ('../controllers/fruits.controller');

const fruitsRouter = express.Router();

fruitsRouter.use((req, res, next) => {
  console.log('ip address:', req.ip)

  next();
})
fruitsRouter.post('/', fruitsController.postFruit );
fruitsRouter.get("/", fruitsController.getFruits );
fruitsRouter.get("/:fruitId", fruitsController.getFruit );



module.exports = fruitsRouter;