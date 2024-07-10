//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255742862266";
global.owner = process.env.OWNER_NUMBER || "254774657742";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 2;
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
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU5MM3pSSGlYbHRuWUNxOEptTUl6cWFjRHRNbk13YjN5Q0ZrTG9JZjIxOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV29kMjlJMTQ0TDI3SytmL1FTNDBKR1F0cmpzTk1rcGVDWHUrU0UwSk5YST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRUIrQ2FMVmlUSXNnK1hjUkt1UzRzK3gvOUJFM2k0MjIvSW43TUZCbldNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjdHFNMjBkanZLNlJQMHA0bUF5c3hOUjlYcVlsZ3VWcWdzU0dMZzZCVVFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVORXVNbmhXVzUyZkJwdGhmcndDaFo1d29RRlZZeGpvVTJJZ2tNQ1MwRVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRhbVdNL0FFOGF3N3Erek90QkRDSm8yM1h3NkUvZ05ZaXVFaXFyR1dEMkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT043QWRjNGlGamlCV0pJWmlZS3J5dzFkdERiNmJ5UlpyaVZidlhzRFFFST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibG9sM2dDSnNLTmw2NGt0eWlGSDBrQWpVT3BZVlFCMGs5YWJDaVpvOHZCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVWVWM0KzVqYUR4OUFNejE5WUgzZ2srcVlpUzBoOHJ2dzBvbEVDai9RRXhjOUpobWZZTGN5eUUyTnllUlVET0k5dEpiSnp3S1FTakJ3OTVQMzBEZWh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDQsImFkdlNlY3JldEtleSI6Ik1rbGJ2aEdhSFJrWUprdTErL3ZWaEZDaVZWNlFKaUJNcGRXSlVraUw5Tmc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkxENUR1dmhuUnppNThIbkcwY1FKOXciLCJwaG9uZUlkIjoiYmVlNjk0MzAtMGJhNi00YzBkLWIwODEtZmQ0MTQxNmViNWM4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxhSGVvNWpGNGxNQXR5SXpTWE5ueGdpb2FYRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5cjFPM0Mzbm42SVdUTkJrQWNKS2d2QWorbFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjVSOFJNQ1giLCJtZSI6eyJpZCI6IjI1NDc3NDY1Nzc0MjoxMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLmiJHlvojpq5jlhbTkvaDlpb0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlVWdhd0dFTzdBdXJRR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhhU0o4NllOMEEwd3M2My96VzZzeDVCMmlSa1FPMVRWTEljNjM4U1Q2bHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImZwMmxhc09nN3NMd1VPRzlEMXRIVzQycnpQWm9FR0FOWndOR1MwS1g5VVgwaSttMmtYVS82OW1KOFhkRDRjcnc2OXBDNWo2VVZvSnN2SFBHdVBZSEFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0S09qY0Y2cVpuYjZ2ZlZ1Y0FCSFpCR244RVhoWER2cUVTaEhEMVZTVGlBNWcvblNMb0l5cnljWW1EbjczQ3d1cjlzOXp5WDczMkdIcDBQYTBHNVZpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3NDY1Nzc0MjoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjV2tpZk9tRGRBTk1MT3QvODF1ck1lUWRva1pFRHRVMVN5SE90L0VrK3BiIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNjIzMjI3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhCWSJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "ROKID",
  packname: process.env.PACK_NAME || "ROKID",
  botname: process.env.BOT_NAME || "rokid3",
  ownername: process.env.OWNER_NAME || "ROKID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "rokid 3",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "ROKID").toUpperCase(),
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
