const [CHAT_IT, BOT_TOKEN, commitTag, commitMessage] = process.argv.slice(2);

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.sendMessage(CHAT_IT, `${commitTag} ${commitMessage}`);
