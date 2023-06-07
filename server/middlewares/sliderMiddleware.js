const sliderSchema = require("../validation/sliderValidation");

const sliderPostValidation = (req, res, next) => {
  const { body } = req;
  const { error } = sliderSchema.validate(body);

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

module.exports = sliderPostValidation;