const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID,
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/20814386ac8526c7d91aa.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "
```💗 LAKA-MD WHATSAPP BOT💗```

LAKA-MD is designed to facilitate other functions within WhatsApp 📱🪄

I will always help you Love you forever 🍂✨

💗 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙻𝙰𝙺𝙰-𝙾𝙵𝙲 💗
",
};
