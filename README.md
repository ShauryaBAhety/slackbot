# AI-Enabled Slack Bot

A Slack bot built with **Node.js** and **Slack Bolt**. It connects to Slack using Socket Mode and exposes slash commands that reply directly to users.

## Features

- `/myslack-catfact` fetches and shares a random cat fact from [Cat Fact Ninja](https://catfact.ninja/).
- `/myslack-joke` fetches a random joke from the Official Joke API.
- `/myslack-ping` replies with a pong and the measured command acknowledgement latency.
- Uses `dotenv` for local environment configuration and `axios` for HTTP requests.

## Requirements

- Node.js and npm
- A Slack app configured with Socket Mode and the required slash commands
- Slack bot token, app-level token, and signing secret

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root:

   ```env
   SLACK_BOT_TOKEN=xoxb-your-bot-token
   SLACK_APP_TOKEN=xapp-your-app-level-token
   SLACK_SIGNING_SECRET=your-signing-secret
   PORT=3000
   ```

3. In your Slack app settings, enable Socket Mode, create an app-level token with the `connections:write` scope, and configure the three slash commands to point to this app. Grant the bot the scopes needed for slash commands and responses, then install the app to your workspace.

4. Start the bot:

   ```bash
   node index.js
   ```

   The process logs `Bot is running!` after it starts. Try `/myslack-catfact`, `/myslack-joke`, or `/myslack-ping` in a Slack workspace where the app is installed.

## AI integration

The project is described as an AI-integrated Slack bot. The current `index.js` on the repository's `main` branch contains the three commands above, but does not yet call an AI model or AI API. Add the model request and its secret configuration before documenting a specific provider, model, or AI-powered behavior here.

## Project structure

```text
slackbot/
├── index.js          # Slack app setup and slash-command handlers
├── package.json      # Project metadata and dependencies
├── package-lock.json # Locked dependency versions
└── .env              # Local credentials; keep this file private
```

## Security

Keep Slack tokens, signing secrets, and any future AI API keys in environment variables. Do not commit `.env` or paste credentials into Slack messages or source files. If a token is exposed, revoke and replace it in the relevant provider's settings.
