//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "basanzietech@gmail.com";
global.location = "Goba,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/basanzietech/shakira-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaJX1NzCxoAyVGHlfY2l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e11bafaedba6aebcd9410.jpg";
global.devs = "255657779003";
global.sudo = process.env.SUDO || "255657779003";
global.owner = process.env.OWNER_NUMBER || "255657779003";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://shakira-md-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1sbnlPYmlyMFl2NjJzQzNCTUV3ZThvK2N1ZnBHemVDcnFJSW1qTWZHST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3l3cWl5UDlHZjFuL1dBN3hUaWFxek9XQzZ5dnJVSXdFdHJKT1MrUHNFVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQmlxMjYyZjByZjhMMkc0VHV6K0dsQnBXdGhHbW9QK0dLd2lXbVpDdkdZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1ZU55ZXN0eXJXcE8xb2xBemplYi9uTXdMMTVDZ0J0anE1anJKYzdBbHh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhLcE1RR01mVFc3MS9RRThUMDRBZFlOc2tROG1sNjZLR1hmazVTWDU3bWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkzWmdEU2tjRGtoaUYwWUg2eDdDTHl6Njl2N0NUNCthMysvQlM4SU5LeEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUdWQ29kaFFZWDR4b2xwL01Yczg2eFNwZlBUSTU5dStxZC9jbjN5N0FGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGN0WVg0eWU1YndEZTBjeXhSeXhPZkN3aEsyK1FNbkExcHlHcmdCVGEyVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkMvR2srdncxbHBUSThLam9RcERIeWpZMFBqWk82N3dWYlQwM25hSENrWmZKSHJNYnhac0QyaXdaZkViT2JFQng4ZVk5N3BtRjhZQ2dXdThXVHVMeERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJkcHFxRWZ6MTMzdU9nSVVyMDlzRFlFVEhGWjIwLzQ1Nm45TXpWYWx0SElrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnellkV0RqQlJYS01xb0d5c1VUZGh3IiwicGhvbmVJZCI6ImJmOWMxZmE3LWRhNjktNDU2OC04NmQ3LWU0MTQwY2U3YjM0MCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OThSbTJORDkxZ29yYm1udG1ySXNuallwa0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEdiR3VacVlCVlc3QldpWUJLTUdCM0p4cy9zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVINEFCRzFLIiwibWUiOnsiaWQiOiIyNTU3MTg3MzIxMjI6NDZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tYT2hwRUdFSk9WejdRR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNSMnNGZSt0eEtnZm85Nm9WZWhvRzY1NG5ucis0M0tYbVhOS2NJVEY2VjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJBazFvYm1kVmpEN2s3bWgvVnNFcG4rRXRHV2cra3FCd2lTODQ3VWRVdU92Nmd6NkN6dTVadUM0WVVmS0dVay9lMFBnS2Z6K0o5UFppOStWN2N4L0JnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyb2IrZGlvK0JBQ0V2VlV2eUcySmpianVmVzVWeEd2UnN5b0loZzdaQ05hRHhQbnYwYUhwUWpuK0kxOXpDTzZCNUI0VVRFN09HV2NxdDlMd1ZBMm9CUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTcxODczMjEyMjo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVa2RyQlh2cmNTb0g2UGVxRlhvYUJ1dWVKNTYvdU55bDVselNuQ0V4ZWxlIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTYxNzAzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhTTSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "💻basanzietech | shakira-md❤️",
  author: process.env.PACK_AUTHER || "basanzietech",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "shakira-md",
  ownername: process.env.OWNER_NAME || "BENJAMINI OMARY",
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
  LANG: (process.env.THEME || "SHAKIRA").toUpperCase(),
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
