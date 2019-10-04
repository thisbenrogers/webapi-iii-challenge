
module.exports = function validateUserId(req, res, next) {
  const id = req.params.id;
  const body = req.body;
  if (id !== body.id) {
    res.status(400).json({
      message: "invalid user id"
    });
  } else {
    req.user = res.body;
    next();
  };
};

module.exports = function validateUser(req, res, next) {

};

module.exports = function validatePost(req, res, next) {

};