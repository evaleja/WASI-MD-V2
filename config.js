//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5JMlRsdDlaUEtCUlFEOGJkRy9rK2NtK2NLb2VZQmtsUEh2QytqSHJWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjhIN2hxSlB0Sk5KSFlSeVNiUUl1a2d0NjNuL1owTFoxMVRkTlRBWGEzMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRml2NktOd1ZqRjFDMzJvakF0NCtib2RSN3o5K1FXWGtoakN2T2lBTVY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3RC9yemJ2MS80aDcrYm44MitpNGFYemFmQU9MNEJFUTFYWURQdzhmU1FZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlOSmQ0eXdQRE01R1FzcEduOHJLMjhqRGdUdXNmcXRtZTRXU0swa3dDV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLUTRLTi8xcmZjc3FvQ2lpRnhwb1pLcXlhRm50SFFzYkxieDZYbEdZeGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUQ5cVlWMFhmWjFKYzYvU0FvbnJ5cmh5SlZtVGdwZHNxNkQ2VmlYbHNXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGR1bWF2UWxWeWROWlhiM1dJNGp6Tk9qVTBuaWZOUVMvL3JRZ2RFOSt5VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYyWUxSWmpiSXZJdUMxRFdQc0c0UEVPbklpNzJoVzBQVHQ5N0JwdFQ5YnVpSXd1WjZkSEl1amI2RHI0VElIZjMySnljY0JVR2kvVVBvMGphUkRPZUJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE2LCJhZHZTZWNyZXRLZXkiOiIvNG5hdWh5aGJ1SG05K2QzNEdubEZNMTJ1d1llZjVkaGhEeEtWZDhSMjdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0Zy1DR2RCalFtT0hzajlzYzdQdG53IiwicGhvbmVJZCI6IjUxYjEwOGIwLWVmMTItNDkyMC04OWE0LTQ5ZjVlNjI2ZDEyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiU2ZaYzFxd0NrOTM0OXB1VWkxamlFRUtTakU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaGZhVEl2azk0dW1qYVFTSFY1R2pRTWsxVVNVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVRU0dBSks2IiwibWUiOnsiaWQiOiIyNTQ3NDAzNjYzMDU6NDFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTGVubm94In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLT1VuOThIRUlYYnNiUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyRDFBaUFtU1dUVnkwRHdKemZLb3Q4UEhkWHZuSTc3WnVBVkl6RUpHL0JNPSIsImFjY291bnRTaWduYXR1cmUiOiJsOXdRL01CcG81TXJiaVZ3YTRpQzVlWHBsTnhhUEpFQTZYaUJYT0hYM1krNHZyMTdpRkFocHZ5THVMMUJ1aFQ4Z3haK2hOZXk2Y1VmTExqMDNtWE5BZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoidVN1aHpaZ3o3TmQ2cTVLUytRYnp5V0tLakNMcE40cnZla1lJOHRDMWNrc1l3OTc5VDduc0pKZ21sOGR1YzlVVlF1bDBFTHZVZ3Q4QlJPMmZYcW5PQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDAzNjYzMDU6NDFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXc5UUlnSmtsazFjdEE4Q2MzeXFMZkR4M1Y3NXlPKzJiZ0ZTTXhDUnZ3VCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDQ3OTEyMiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMQjYifQ==" 
global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIzOEJ4Z3dBbGlIMllHcEpqb3BySjN4VFg5ZUN5a2hRL084Tkxya1EwST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTnZtZXdQU0ZHL1h3aHh4REFjSll3YU4raEkvSkZnVG1PY1JDUTdjbi9WND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtUEhsa2FPWlZhYkhqeUc1Z3BzL29GVVhPbU5YdjM2OG9TMlFJUWZRbTNrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwNXdoWXRZdDBERDFOQWg1YWhzWVliVllIM3hhWG9SeW5ZOCtFaWtTc2k0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllIQ05jK0xpUDk1aWVQc2hxcE52d3VYdWkxbzlmZFFFcXdteHhqSFNra3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1aM1NwQUo2RG5LcWV3NFZPTW5rMEJZYThvY24vWjYwbUY4YzBHSGpOQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS04xcVBQM1pXMzIwTm5McCtGREJUMzcySnQwcGlLWFEzWXZESzM5eU5WST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXhBdEY1Y3AzNEtwQ3lCRkxhR0t3SngwWit4R0grZlFSZlBMTnM3akNqMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9sRlJuaDFRMWdEdTFRR3ZlMG9ROHNkd1hHeCtCRVBDeDhjNHRQeVZFOFdZZzBPMDJ0T2c1U3M5RmxhYlNaQzdrdzJDM2pBQkNCSVhwMjBDeWhuSmhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA0LCJhZHZTZWNyZXRLZXkiOiIzbE41QnpiUlN4WWRWMEJPSnVhekREbXlZUVQ0VTVETWVEQXlkSGF3UXNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0U0N5SFN4eFNQUy03UDJzeVd5NkpnIiwicGhvbmVJZCI6Ijg5MjNhMzZmLWVjZGMtNDAwNy05ZGFmLWNiMzRlNmMwNDEwZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOZmpyc1FDRWwzelZRTkRvTDRmOXpkaHhheGc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhSjBvZzNDbnZqemY0Nm9Hb3JINnBoQ0NlYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2M2dPNERFSmVrZ0xRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Imo4cDEycTRtbmk1UkVzYmxldWI0WjAzbllTdVJ2ZlhqMkdlcWRIKzdBRE09IiwiYWNjb3VudFNpZ25hdHVyZSI6ImFDQWN2SThoZ0NXRE10MEc1NHdEVUpwR21WdGJQS0JsR2FSSUxKMnFPMEZLYUFQVjBsUFR3ejV2bnhXT3BqbVBwSkZMMjNrcVdaSm1LZFBhOUNpYUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXOWZaWkR0NmhySjNmdWtxazFkeEJqUFdzOU10Qmh5dU01TWJEM2VLUUtDOWo1aHhQbmF2U3Qza3E4UnVNd3V3VTRpRWo0SzB6YXJpUHlUdEFkbERnQT09In0sIm1lIjp7ImlkIjoiOTIzMTkyMTczMzk4OjIzQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbTwnZG5IPCdkb7wnZGo8J2RuvCdkbAiLCJsaWQiOiIxNDQ1Nzc2MDg1NTY2MTk6MjNAbGlkIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzE5MjE3MzM5ODoyM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZL0tkZHF1SnA0dVVSTEc1WHJtK0dkTjUyRXJrYjMxNDlobnFuUi91d0F6In19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk2NjkyNzMsImxhc3RQcm9wSGFzaCI6IjJGOXl4eiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FtIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
