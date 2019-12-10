const { msgTemplate } = require("../utils");

function fallback({ handlerName, from, args, date, send }) {
  send(
    msgTemplate(
      { date, from },
      `unregistred command: ${handlerName} ${
        !args.length ? "with no arguments" : `with arguments: ${args}`
      }`
    )
  );
}

function unAuth({ send }) {
  send("This is wrong place! And wrong time. This is wrong cocpit!");
}

function set({ send, args, ...rest }) {
  const [what, value] = args;
  send(msgTemplate(rest, `${what} set to ${value}`));
}

module.exports = {
  fallback,
  unAuth,
  set
};
