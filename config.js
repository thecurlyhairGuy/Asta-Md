//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "zannupeter2005@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://thecurlyhairguy:<testimony>@cluster0.k59do8u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/𝖪𝖨𝖭𝖦 𝖡𝖠𝖫𝖣𝖶𝖨𝖭 𝖨𝖵 ❤️🤚🏼/Md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/KN6df7wVBQLIjevehckmcd";
global.website = process.env.GURL || "https://chat.whatsapp.com/KN6df7wVBQLIjevehckmcd";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2cc5d6af9bcfe706e9bc3.mp4,https://telegra.ph/file/b2060bb35d25e28a59a78.mp4,https://telegra.ph/file/41c13d61d03d9357c02e2.mp4,https://telegra.ph/file/355cd0efb6e0397d8799d.mp4";
global.devs = "2348039607375";
global.sudo = process.env.SUDO || "2347086606304";
global.owner = process.env.OWNER_NUMBER || "2347086606304";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/2cc5d6af9bcfe706e9bc3.mp4,https://telegra.ph/file/b2060bb35d25e28a59a78.mp4,https://telegra.ph/file/41c13d61d03d9357c02e2.mp4,https://telegra.ph/file/355cd0efb6e0397d8799d.mp4";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "/",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©𝖪𝖨𝖭𝖦 𝖡𝖠𝖫𝖣𝖶𝖨𝖭 𝖨𝖵 ❤️🤚🏼",
  author: process.env.PACK_AUTHER || "𝖪𝖨𝖭𝖦 𝖡𝖠𝖫𝖣𝖶𝖨𝖭",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝖪𝖨𝖭𝖦 𝖡𝖠𝖫𝖣𝖶𝖨𝖭 𝖨𝖵 ❤️🤚🏼",
  ownername: process.env.OWNER_NAME || "𝖪𝖨𝖭𝖦 𝖡𝖠𝖫𝖣𝖶𝖨𝖭 𝖨𝖵",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ASTA").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
