
const TOKEN = "853423670:AAE-4tOmBqDwqFxWYx7e3cxIFK8AsdzSD4o";

const BOT_API = require('telegraf')

const bot = new BOT_API(TOKEN)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
