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
global.email = "charithkawinda004@gmail.com";
global.location = "asia,colombo.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sanduntharaka:s12345@cluster0.f8a9jgn.mongodb.net/";
global.allowJids = process.env.ALLOW_JID || "";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://sanduntharaka:s12345@cluster0.f8a9jgn.mongodb.net/";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github = process.env.GITHUB || "";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaglXx3LikgF18gU651T";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8f400de01d6c1ec4e742.jpg";
global.devs = "94754015815";
global.sudo = process.env.SUDO || "94728756898";
global.owner = process.env.OWNER_NUMBER || "94754015815";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/0a776b2a20271ec6d93b4.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUt5bXJIQzBFK3gxUVYreXNLMEM0M0dPWmptM1c0UnlyUzF0aWRGZEkxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXR1ekNyeDcrYmhPL3g1OFBwS3Q2Y01pdmJPK0k3OVlrT1dxYlM4amRoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1Q0pRU2lhdXlibjVwY3I5S0Qwbjd5d2EvcTVIcFdwTVlzNkJCQS83azA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKeXdrM1U4anpsNjFVU3BIeE1KOTAxK005ODAzcGphS0M1bG5oUzFudnprPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdIQXVHaXB1aGlGTXlrV3pDNG0rSjZTU2xsMVRkZVBQZHJncmkrcWlhME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1mSjlId08rVFVDWDE0cHczdGJob0FHSHI4VXE1Y3I5MjZTK3dhaVZybDg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUcwNTZxS29WQkpScWJWaGtkSy9LR1BGWkdsR0tlRmozNjI1bVliZGFWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTy9CS0Q2a3M4ZkYxbmdpdkorVW1WZnNXU2RtNzR5Y01UclRZVXhwYWJBOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp2YTdQVk5rOHBicmRZRExvSWkxcnRjSmwrS0NELy9yUWtxQjlNRVBKZnZzY2d4U2R0UTBjUDM1MDFuTmdMWW0xY3d3QkhMSFd1TUJwU1R0M3IxRkRRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJKdEl5NjJQeDd0alpyUDRjS0hpdmZ2c2hOeVNtSVUrNnhyeUd6cFp3OFAwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDTHdqSXplSlF1LUh2bWg2NGdUZVBRIiwicGhvbmVJZCI6IjYzNWE5ZDIxLTY3MWYtNGMzMy1hOTliLWI4ZTU1MTdmZTI4ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKS29BMkdCbFZjM1RkU2tvbmZwd2Z1VldwR3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkhKRHEzUTdjYUV6djlHdzVFbGI4WXRSL1JFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkVISEdLQU5IIiwibWUiOnsiaWQiOiI5NDc1NDAxNTgxNTozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJjaGFywqF0aF9rYXfCoW5kYeKApuGdsC7hkJ8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0wyQXU1VUxFUFM1emJVR0dBMGdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjRicHNPeGJyTjdORFhtUEJEOTBKYlJPRkxrQ01sd0U4cFJtNDZVa2pIVEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlN1ZXZNZHhlSTNpV0RKZlI1cEFxelorS2FYei9JdUk1c21TMktwWVNrd1lDSlY3aEtnd2RLSi9EbGl0Qjl2VmlUUFVMSTcwaUZ2OHEvbHRCOWFDVWpRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1UVZjdFZlOHpCY05BNXBwaUlSbHJDT2xhMFd0ekI1MDRCckVwajQ0emlSZ0xQYUszNHBxNUtVdFFZQzV6ek9ROFFjWVZWM25qM3dDWVFBcjZIRUxDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzU0MDE1ODE1OjMyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVHNmJEc1c2emV6UTE1andRL2RDVzBUaFM1QWpKY0JQS1VadU9sSkl4MHcifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMzA3ODUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHg0In0="
module.exports = {
  menu: process.env.MENU || "https://github.com/sandungamage00001/BOT-VOICE-COMMANDS/blob/main/menu.mp3",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ꜰɪʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄʜᴀʀɪᴛʜ ᴋᴀᴡɪɴᴅᴀ",
  author: process.env.PACK_AUTHER || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ-ᴄᴋ ᴏꜰꜰɪᴄɪᴀʟ™️",
  packname: process.env.PACK_NAME || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ-ᴄᴋ ᴏꜰꜰɪᴄɪᴀʟ™️",
  botname: process.env.BOT_NAME || "ᴍʀ.ᴄᴋ",
  ownername: process.env.OWNER_NAME || "🄲🄷🄰🅁¡🅃🄷 🄺🄰🅆¡🄽🄳🄰…ᝰ.ᐟ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "false",
  LANG: (process.env.THEME || "mr~ck").toUpperCase(),
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
