require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

// 1. Initialize the App FIRST
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

// 2. Define Command Handlers
app.command("/myslack-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `🐱 *Cat Fact:*\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/myslack-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text: `😂 *${response.data.setup}*\n\n_${response.data.punchline}_`,
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

app.command("/myslack-ping", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start;
  await respond({ text: `🏓 *Pong!*\nLatency: \`${latency}ms\`` });
});

// 3. Start the App
(async () => {
  await app.start(process.env.PORT || 3000);
  console.log("⚡️ Bot is running!");
})();