const { fallback, set, noAuth } = require("./handleFunctions");

const handlers = new Map([
  ["/set", set],
  ["NO_AUTH", noAuth],
  ["fallback", fallback]
]);

function handleController(message) {
  const { handlerName } = message;
  const selctedHandler = handlers.has(handlerName)
    ? handlers.get(handlerName)
    : handlers.get("fallback");
  return selctedHandler(message);
}

module.exports = { handleController };
