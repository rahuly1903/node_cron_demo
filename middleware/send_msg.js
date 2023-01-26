const bot = require("./telegram");

function send_msg(msg) {
  bot.sendMessage(686711438, msg);
}

module.exports = send_msg;
