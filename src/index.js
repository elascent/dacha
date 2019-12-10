const { pipe } = require("ramda");
const { handleController } = require("./handlers");
const { getDateString, msgTemplate, unwrapMessage } = require("./utils");

const handleMessage = pipe(
  unwrapMessage,
  handleController
);

module.exports = {
  handleMessage,
  getDateString,
  msgTemplate
};
