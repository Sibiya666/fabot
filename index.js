const BOT_API = require('node-telegram-bot-api');
const AGENT = require('socks5-https-client/lib/Agent');
const PYRAMID = require('./pyramid');
const TOKEN = "853423670:AAE-4tOmBqDwqFxWYx7e3cxIFK8AsdzSD4o";

const bot = new BOT_API(TOKEN, {
  polling: true,
  request: {
    agentClass: AGENT,
    agentOptions: {
      socksHost: "127.0.0.1",
      socksPort: "9150",
    }
  }
});

bot.onText(/\/help/, (msg, match) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `
    Список доступных команд:
      1. '/pyramid weight and repeat' - где weight вес вашего максимального разового выполнения, repeat максимальное кол-во повторений.
  `)
});

bot.onText(/\/pyramid (.+) and (.+)/, (msg, match) => {
  PYRAMID.onStart(match[1], match[2]);
  const chatId = msg.chat.id;
  const settings = PYRAMID.settings;
  const template = settings.reduce((acc, item, ) =>
    `${acc}
    Повторения: ${item.repeat}; Вес: ${item.weight};`,
    ``);
  bot.sendMessage(chatId, template);
  PYRAMID.settings = [];
});