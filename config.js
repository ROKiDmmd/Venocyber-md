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
global.owner = process.env.OWNER_NUMBER || "255742862266";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
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
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0EyaGo4WGxBd2licWUwanlLM0d5S2JTZjM0d1ZXbUFOdjVEWWZ6enoxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkc0TG1UelVZLzdQUlo2YVhvdERvRjg1NDhDSE1Ld3F6VHMvQ1FFd2xXTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlUGNHc1lIZ0RoczQ1NGxyK2ovWFZNd1NRTzBRNXd2dElTc3ZtUHBtWUVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkbGxpL2tqRFFZVDJpS3lYUE9uME1BMllEQ3IyRkttTjV4K3lCUzYrcVZVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQbXFJV1crZisrSHhGV0d0dmhyZW1IVUFSVlNQMTJFVXVGSlBFellaa3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNnSWNiRDJXZWJNMXpzN0pSR0ZpR3pFSWM0L0QzMU0rVG92c3pPdzVDamc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxVbTMyQkkyUmQ2RXo3bzY3MUJpNVBsYlROZzBteWE4OWZjNU1HVXJVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUgySFZKNEFjSGZGb3VaZUVaT3hrNENwTEd0bXBlN1NiU0VxWWIrMm1oWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOK3ZKcDh2MGxPVEFsSG5vUXF1cHZPemRPUXRXbGFwZjVWN3k5ODZhNE10YnhEN2FrenBpb2NjY1VQYTZmRWE0bkZ3NWtCSnNEUTdkU1lFVUxSZkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJqNDZPbEk2VjdJT2dlRzhiUzBaUG1zV3habzFHWmJlb2RodCtzdXZoRldnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2SE1kSVQ0M1JEbW9UbzhjN0NpLWhRIiwicGhvbmVJZCI6Ijc1NjY2MWJiLTI2ZTItNGFiYS1iY2QzLTM4MGI4ZWRjZjNiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPL2lzZnVKNHVQMnhQcHkxem9kb0xrS251VFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjA4L0NueFBhbTRJZlJhQ3hCbnB1aVltSkUwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlQxNjE0RFJMIiwibWUiOnsiaWQiOiIyNTQ3NzQ2NTc3NDI6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLmiJHlvojpq5jlhbTkvaDlpb0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xlVWdhd0dFS0NrdDdRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhhU0o4NllOMEEwd3M2My96VzZzeDVCMmlSa1FPMVRWTEljNjM4U1Q2bHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJtd0xQTHhta0J3SVc3WVNWODdLMTAxODN1ZTZ5c2NQRFg4TUF0TkZLNWR4RWRaMitGWVpkM0R5WEdVOVF1OFFlem5Pb0dvUEpYMmdjekZlQ2dRcUNnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVYTl6Q1ZHSEQ2ZjdGNjBMc21aNHN6YkdtYXJqTDhrRzVTMEJvNi8wRnZDK1l4Vk9aUUJLTFNNYTJaSXRRY2xIeTJpeGU2SlBSZXlmajEwSkViUTRCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc3NDY1Nzc0Mjo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNXa2lmT21EZEFOTUxPdC84MXVyTWVRZG9rWkVEdFUxU3lIT3QvRWsrcGIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1NzA0MTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSEJZIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
