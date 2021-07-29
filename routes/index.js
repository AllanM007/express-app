var express = require('express');
var router = express.Router();

var apiKeys = ['foo', 'bar', 'baz'];

var repos = [
  { name: 'express' , url: 'https://github.com/expressjs/express' },
  { name: 'stylus' , url: 'https://github.com/learnboost/stylus' },
  { name: 'cluster' , url: 'https://github.com/learnboost/cluster' }
];

var users = [
  { name: 'loki' },
  { name: 'thor' },
  { name: 'odin' }
]

var userRepos = {
  loki: [repos[0], repos[1]],
  thor: [repos[1]],
  odin: [repos[2]]
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ola', function (req, res, next) {
  res.render('ola', { title: 'Ola Amigo'})
})

router.get('/api/users', function (req, res, next) {
  console.log(users);
  res.send(users);  
})

router.get('/api/repos', function (req, res, next) {
  res.send(repos);  
})

router.get('/api/user/:name/repos', function(req, res, next){
  var name = req.params.name;
  var user = userRepos[name];

  if (user) res.send(user);
  else next();
});

module.exports = router;
