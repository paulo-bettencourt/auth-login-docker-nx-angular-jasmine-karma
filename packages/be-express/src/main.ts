import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import * as path from 'path';
import cors from 'cors';
import mongoose from 'mongoose';
import api from './modules/api.js';
const app = express();
const port = process.env.PORT || 3333;

// ENV FILES
//console.log('ENV FILE: ', dotenv.config()); // remove this after you've confirmed it is working
//console.log('ENV FILE: ', process.env); // remove this after you've confirmed it is working

// MONGOOSE

const kittySchema = new mongoose.Schema({
  name: String,
});

const Kitten = mongoose.model('Kitten', kittySchema);

main().then((data) => console.log('connected ', data));

async function main() {
  console.log('KEY API ', process.env);
  await mongoose.connect(process.env.MONGOOSE_URI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

////////////////////////////////

app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.post('/api/login', api.loginHandler);

app.get('/api/', (req, res) => {
  res.send({ message: 'Welcome to be-express!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
