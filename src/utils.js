const { head, tail } = require("ramda");
const { GROUP_ID, AUTH_USER_LIST } = require("../constants");

function isSenderAuth(from, chat) {
  return chat.id === GROUP_ID && AUTH_USER_LIST.includes(from.id);
}

function pad(v) {
  return v < 10 ? "0" + v : v;
}

function getDateString(d) {
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hour = pad(d.getHours());
  const min = pad(d.getMinutes());
  const sec = pad(d.getSeconds());
  return `${year}/${month}/${day}  ${hour}:${min}:${sec}`;
}

function msgTemplate({ date, from }, paylaod) {
  return `[${getDateString(date)}]: Get from @${from.username} with id: ${
    from.id
  } ${paylaod}`;
}

function unwrapMessage(message) {
  const { from, chat, date, text } = message.update.message;
  const payload = text.split(" ");
  return {
    handlerName: isSenderAuth(from, chat) ? head(payload) : "NO_AUTH",
    args: tail(payload),
    from,
    chat,
    date: new Date(date * 1000),
    send: message.reply
  };
}

module.exports = {
  getDateString,
  msgTemplate,
  unwrapMessage
};
