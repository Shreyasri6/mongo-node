const router = require('express').Router();
const item= require('./controller');

router.post('/items', item. create);
router.get('/items', item.getAll);
router.delete('/item/:id', item.delete);
router.patch('/item/:id', item.update);
module.exports = router;
console.log("working")