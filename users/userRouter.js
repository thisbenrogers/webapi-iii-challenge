const express = 'express';

const router = express.Router();

router.post('/', (req, res) => {

});

router.post('/:id/posts', (req, res) => {

});

router.get('/', (req, res) => {

});

router.get('/:id', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id;
  if (id) {
    req.user = res.body;
  } else {
    res.status(400).json({
      message: "invalid user id"
    });
  };
};

function validateUser(req, res, next) {

};

function validatePost(req, res, next) {

};

module.exports = router;
