import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import * as path from 'path';
import cors from 'cors';
import api from './modules/api.js';
import bodyParser from 'body-parser';

const app = express();

// create application/json parser
const jsonParser = bodyParser.json();

const port = process.env.PORT || 3333;

// MONGOOSE CONNECTION TO DB
async function main() {
  await mongoose.connect(process.env.MONGOOSE_URI);
}

main()
  .then(() => console.log('connected'))
  .catch(() => console.log('error'));

// ENV FILES
//console.log('ENV FILE: ', dotenv.config()); // remove this after you've confirmed it is working
//console.log('ENV FILE: ', process.env); // remove this after you've confirmed it is working

////////////////////////////////

// APIS AND MICROSERVICES
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api/register-login', api.registerLoginHandler);
app.get('/api/get-login/:id', api.getLoginHandler);

app.post('/api/login/', jsonParser, api.loginHandler);

app.get('/api/token', api.getTokenHandler);

app.get('/api/', (req, res) => {
  res.send({ message: 'Welcome to be-express!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
