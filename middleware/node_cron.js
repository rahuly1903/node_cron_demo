const cron = require("node-cron");
const send_msg = require("./send_msg");
const task = cron.schedule(
  "* * * * * *",
  () => {
    console.log("stopped task");
    send_msg("Hello world");
  },
  {
    scheduled: false,
  }
);

module.exports = task;
