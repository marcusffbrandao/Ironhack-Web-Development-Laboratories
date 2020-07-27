const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../../models/Users');

const router = express.Router();
const saltRounds = 10;

router.get('/signup', (req, res) => {
  res.render('public/signup');
});

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (name === '' || email === '' || password === '') {
    res.render('public/signup', { errorMessage: 'Please fill all required fields!' });
    return;
  }

  const user = await User.findOne({ email });
  if (user) {
    res.render('public/signup', { errorMessage: 'This email is already registered!' });
    return;
  }

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);

  const newUser = new User({ name, email, password: hash });

  try {
    await newUser.save();
    res.redirect('/events');
  } catch (error) {
    console.log(error);
  }
});

router.get('/login', (req, res) => {
  res.render('public/login');
});

router.post('/login', (req, res, next) => {
  const { email, password } = req.body;

  if (email === '' || password === '') {
    res.render('public/login', {
      errorMessage: 'Please enter both, username and password to sign up.',
    });
    return;
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.render('public/login', {
          errorMessage: "The username doesn't exist.",
        });
        return;
      }

      if (bcrypt.compareSync(password, user.password)) {
        // Save the login in the session!
        req.session.currentUser = user;
        res.redirect('/events');
      } else {
        res.render('public/login', { errorMessage: 'Incorrect password' });
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.redirect('/login');
  });
});

module.exports = router;
