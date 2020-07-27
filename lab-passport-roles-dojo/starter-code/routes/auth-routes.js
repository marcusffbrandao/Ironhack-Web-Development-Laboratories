const passport = require('passport');
const express = require('express');
const checkRoles = require('../middlewares/passport-middleware');
const router = express.Router();
const bcrypt = require('bcrypt');
const ensureLogin = require("connect-ensure-login");
const User = require('../models/User');

const saltRounds = 10;
const checkBoss  = checkRoles('Boss');

router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
  passReqToCallback: true,
}));

router.get('/user-management', checkBoss, (req, res) => {
  res.render('private/user-management', { user: req.user });
});

router.post('/create', checkBoss, async (req, res) => {
  const { name, username, password, role } = req.body;

  if (username === "" || password === "" || name === "" || role === "") {
    res.render("private/user-management", { message: "Indicate all fields" });
    return;
  }

  User.findOne({ username })
  .then(user => {
    if (user) {
      res.render("private/user-management", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(saltRounds);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      name,
      role,
      password: hashPass
    });
    newUser.save((err) => {
      if (err) {
        res.render("private/user-management", { message: "Something went wrong" });
      } else {
        res.redirect("/show-users");
      }
    });
  })
  .catch(error => {
    next(error)
  })
})

router.get('/show-users', ensureLogin.ensureLoggedIn(), async (req, res) => {
  try {
    const users = await User.find();
    res.render('private/show-users', { users });
  } catch (error) {
    console.log(error);
  }
});

router.get('/user-detail/:id', ensureLogin.ensureLoggedIn(), async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if(req.user.role === 'Boss'){
      res.render('private/user-detail-boss', user);
    } else {
      res.render('private/user-detail', user);
    }
  } catch (error) {
    console.log(error);
  }
});

router.post('/edit/:id', checkBoss, async (req, res) => {
  const { id } = req.params;
  const { name, role, username } = req.body;
  try {
    await User.findByIdAndUpdate(id, { name, role, username });
    res.redirect('/show-users');
  } catch (error) {
    console.log(error);
  }
});

router.get('/edit-password', ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render('private/edit-password', { id: req.user._id });
});

router.post('/edit-password/:id', ensureLogin.ensureLoggedIn(), async (req, res) => {
  const { id } = req.params;
  const { password } = req.body;
  console.log(password, 'string grandonaaaaaaaaaaaaaaaaaaaaaaaaaa');
  if (password === '') {
    res.render('private/edit-password', { errorMessage: 'Required password!' });
    return;
  }
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashPass = bcrypt.hashSync(password, salt);

  try {
    await User.findByIdAndUpdate(id, { password: hashPass });
    res.redirect('/show-users');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
