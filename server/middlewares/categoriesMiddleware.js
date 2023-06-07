const categoriesSchema = require("../validation/categoriesValidation");

const categoriesPostValidation = (req, res, next) => {
  const { body } = req;
  const { error } = categoriesSchema.validate(body);

  if (!error) {
    next();
    return;
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(",");
    res.status(403).send({
      error: message,
    });
  }
};

module.exports = categoriesPostValidation;