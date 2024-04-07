var express = require('express');
const { getUsers, saveUser } = require('../services/user');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let users = await getUsers()
  res.json({data:users});
});
router.post('/', async function(req, res, next) {
  let user = await saveUser(req.body);
  res.json({user});
});

module.exports = router;
