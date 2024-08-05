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
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
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
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUk4Vlk3M2xSeDgrMnNNWEsrWjFLdVRNQkJ3T1A0cG5yajdxQzJNbVpGVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVgxa0RhbXZyWEZPb1c5UFlIRUhCMm1oN0dwVTFrL2VLcnJaaWV2elJ4VT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQnF6VEsrUHd6MUdOa3BKWEZkM0tKWnEvc2dUa2FZeC82dVltbTBnN0ZnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnaE9Kd1pIbTVlay81SDdNWjJmbldjc1ZwYjFScFpZVlByTkN2ZXdNa0ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdFWU5aOW5hQTJlVXcvblhOQUlhL1RFbERETjRVRTZSMFBPOURJdlJDbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJKakxGSUtmcmhvSVMzcW9qeTQwa2ZqTEVpdXJMNks1VnQxQ2ZFcDg3Z1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0JPTE9udENBbGVybEVSMWEzVFR6ckgrOE1ER0xzSlp6R3hGczVEY0UzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYzkzTkVaRzA0TmZPR0h4clpDQ0xiSFQzd3ZhbFNOcWdackR1L1pWbkFGYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9VaHdtRXBSWEh4Q0Z5NHhFL3hsMmJoNFU2MkZ1TS9JbktSelp4U0tEaC9DRS9BNG90K1ZlUDNsR0l1cGJCOVNOYWd6Q0tuakhSOExjWHVEaHRrK2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgsImFkdlNlY3JldEtleSI6IklFL2I2ZDhablFHSTJBekh6YjhOZ25PSmpBeFlGUy8rVk1QS21WUzBsdE09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlZRbnFSVzVpU0NtZy1HNTI3dmFyZnciLCJwaG9uZUlkIjoiN2I3MjA1ZDctM2YyZi00NTEzLWJmNjItNzgyZTE2N2ZhYTM3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdhWXhWRVAvTUZscWdIZzR2eW1ZNVF4eDZCST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJETmtiZU14WlFLZW9yWDFOL3hMYWtxR2V6RkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEhUUzhERDYiLCJtZSI6eyJpZCI6Ijk0NzU0MDE1ODE1OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImNoYXLCoXRoIGthd8KhbmRh4oCm4Z2wLuGQnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDJBdTVVTEVQU3RnclVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNGJwc094YnJON05EWG1QQkQ5MEpiUk9GTGtDTWx3RThwUm00NlVrakhUQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZGJFOFVXbkhEOW1POFBuS3Y3eUZEWTZqQWErdFEvSks5aHA3clBoV2krOERpbklyUVpwZW95dmZGR2RqTUFDQ0QvVDhURXVUeWJCQ1VNclFvcFcyaWc9PSIsImRldmljZVNpZ25hdHVyZSI6ImZHWTZRTTJQQjNzc1pPK01ZMGVjNXZRdVUyMUhibGtiWHREeXhjNGZlQkJyblZsWFZpZHFpZHZRcXhIbDVyWG53OTVJaWV1ekJaTDRKUnVaYm5Yc2hRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTQwMTU4MTU6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUc2YkRzVzZ6ZXpRMTVqd1EvZENXMFRoUzVBakpjQlBLVVp1T2xKSXgwdyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMTgwMDQ0OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEeHUifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "@",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "ꜰɪʟᴇ ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴄʜᴀʀɪᴛʜ ᴋᴀᴡɪɴᴅᴀ",
  author: process.env.PACK_AUTHER || "ᴍʀ.ᴄᴋ",
  packname: process.env.PACK_NAME || "🫰🏻",
  botname: process.env.BOT_NAME || "ᴍʀ.ᴄᴋ",
  ownername: process.env.OWNER_NAME || "🄲🄷🄰🅁¡🅃🄷 🄺🄰🅆¡🄽🄳🄰…ᝰ.ᐟ",
  errorChat: process.env.ERROR_CHAT || "",
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
