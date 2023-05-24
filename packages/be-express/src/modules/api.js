import mongoose from 'mongoose';
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const loginSchema = new mongoose.Schema({
  username: 'string',
  password: 'string',
  token: 'string',
});

const LoginModel = mongoose.model('login-collection', loginSchema);

async function loginHandler(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  let loginData = await LoginModel.find({
    username: username,
    password: password,
  });
  console.log('aksljdflkasjdf ', loginData);
  loginData[0].token = token;

  res.send({ loginData });
}

function getTokenHandler(req, res) {
  res.send({ token: token });
}

function registerLoginHandler(req, res) {
  const instanceLogin = new LoginModel({
    username: 'kminchelle',
    password: '1111',
  });

  instanceLogin
    .save()
    .then(res.send({ message: 'user has been added' }))
    .catch(console.log('Error'));
}

async function getLoginHandler(req, res) {
  const id = req.params.id;
  const loginModelQueryResponse = await LoginModel.findById(id);

  res.send(loginModelQueryResponse);
}

module.exports = {
  loginHandler,
  registerLoginHandler,
  getLoginHandler,
  getTokenHandler,
};
