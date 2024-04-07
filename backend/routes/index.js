var express = require('express');
var router = express.Router();
var usersRouter = require("./users")
const config = require("../config");

router.get('/', function(req, res, next) {
  res.json({ ...config });
});
router.use('/users', usersRouter);

module.exports = router;
