const Telegraf = require("telegraf");
const { handleMessage } = require("./src");
const bot = new Telegraf("218509147:AAFLNoCdlCs3q7wOZVzhROCdn0cUE8sMGNc");
bot.on("text", handleMessage);
bot.launch();
