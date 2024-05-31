import { User } from '../schemas/User.js';
import express from 'express';

export const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  const newUser = new User({
    fullname: "Juan Perez",
    email: "asd@asd.com",
    password: "123456",
    type: "admin",
    image: "https://www.google.com"
  });
  newUser.save();
  res.send('Hello World');
});


