const express = require('express')

const router = express.Router();

router.get("/home", function (req, res, next) {
  res.json({ title: 'Home', desc: 'Welcome to Study 163!' })
});

router.get("/user", function (req, res, next) {
  res.json({ name: '张三', age: '21', id: '001' })
});

module.exports = router