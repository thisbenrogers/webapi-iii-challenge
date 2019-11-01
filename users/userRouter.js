const express = require('express');

const Users = require('./userDb');
// TODO require posts

const router = express.Router();



router.post('/', (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: 'There was a server error while creating this user.' });
    })
});

router.post('/:id/posts', validateUserId, (req, res) => {
// TODO
});

router.get('/', (req, res) => {
  Users.get()
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting the users" })
    })
});

router.get('/:id', validateUserId, (req, res) => {
  const id = req.params.id;
  Users.getById(id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(500).json({ message: "Error getting this user." })
    })
});

router.get('/:id/posts', validateUserId, (req, res) => {
// TODO
});

router.delete('/:id', validateUserId, (req, res) => {
  const id = req.params.id;
  Users.getById(id)
    .then(user => {
      Users.remove(id)
        .then(() => {
          res.status(200).json(user)
        })
        .catch(err => {
          res.status(500).json({ error: "The server could not delete this asset." });
        })
    })
});

router.put('/:id', validateUserId, (req, res) => {
// TODO
const id = req.params.id;
const body = req.body;
Users.update(id, body)
  .then(() => {
    Users.getById(id)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(500).json({ error: "Error editing this user" })
      })
  })
});

//custom middleware


// ! I am not entirely satisfied with this function, but can't tell why. Something about it doesn't sit well with me.
function validateUserId(req, res, next) {

// * the 'id' variable is coerced from string to number with the '+' sign
const id = +req.params.id;

Users.get()
  .then(users => {
    const user = users.filter(user => user.id === id)[0]
    if (user) {
      req.user = user;
    } else {
      res.status(400).json({ message: "Invalid user id" })
    }
  })
  .catch(err => {
    res.status(400).json({ message: "Cannot Get Users" })
  })
  
next()
};

function validateUser(req, res, next) {
// TODO
};

function validatePost(req, res, next) {
// TODO
};

module.exports = router;
