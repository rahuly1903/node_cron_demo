const express = require("express");
const router = express.Router();
const cron_job = require("../middleware/node_cron");

router.get("/", (req, res) => {
  res.send({ msg: "Welcome to cron job demo" });
});

router.get("/cron-start", (req, res) => {
  res.send({ msg: "cron job start" });
  cron_job.start();
});

router.get("/cron-stop", (req, res) => {
  res.send({ msg: "cron job stop" });
  cron_job.stop();
});

module.exports = router;
