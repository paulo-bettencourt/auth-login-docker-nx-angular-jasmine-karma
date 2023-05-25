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

  if (Array.isArray(loginData) && loginData.length === 0) {
    res.status(500).json({ error: 'Something went wrong' });
  } else {
    console.log('loginData ', loginData, ' &&& token ', token);
    loginData[0].token = token;
    res.status(200).json(loginData);
  }
}

module.exports = { loginHandler };
