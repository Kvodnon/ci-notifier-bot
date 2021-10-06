const [CHAT_ID, BOT_TOKEN, commitTag, commitMessage, userEmail] =
  process.argv.slice(2);

const TelegramBot = require("node-telegram-bot-api");

const bot = new TelegramBot(BOT_TOKEN, { polling: false });

bot.sendMessage(CHAT_ID, `${commitTag} ${commitMessage} ${userEmail}`);
