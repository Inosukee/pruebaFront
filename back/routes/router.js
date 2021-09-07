const logicController = require('../controllers/logic.controller');


module.exports = (router) => {
  router.post("/getProduct", logicController.bringProducts);
  router.post("/getProductById", logicController.getProductById);
  router.post("/getProductDesc", logicController.getProductDesc);
}