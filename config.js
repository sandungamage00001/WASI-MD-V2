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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUw3d1FIVE5uYVJHbS9DcWVCdXQzSm1VeWp5eFdZU3U3c24xQmtwS3psRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidE5Xd1lJUk9XSmVHWHVzcFZLY2ZrRjdzeS9meVptVGh6OXZLZzg1NTVBbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQnRBWkYrMVVQY0E0UC8vWExtRUtCTkNVQ0htQS9aSDUxSkVFVVVnTlh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuWWlqOFhudkZJUjkvSGhLUU41SW9wMU1IOVY4NDhBYVJSaWxVRk5UbDM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRLaXdxY2VMbG5taC9hbnNhZUg1NFhMQ0xOcENTdVRGY3R1V085VTV0V3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik42a1RmT2JXcE1LZm1WUEFoczEvUytCRFFERCsvbitIVDAzNko3dkVwa289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUdFQ0dtNzBkNUtqdmRFZDhiSnk0WjVESUVOb3FETUUvZEh3R2htWUdsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDlMYysyQTk2c1kyRElsczVSQVllcFV0NHpCNXVIcDZ4VzVqZmZBQTIzOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9rZ0lpYzEzSVpZOUhyTFYvU2ZTZnUwbUFyN1gvdFBoU0h2YU5hOFZjcXFEV0JzUThNM1lzZ01TQ3pRY2g2S3JlYVpTNkNMNzBXUTdXZlZoTFRqZGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IjhwazUzOGpXa1BIUE4vdXJCMkk0Rmw2SW4ySW1KSWxWNWEwKzREYkdORDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3Mjg3NTY4OThAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0FCQTA1Mzg1NTRDOEFGQkYyMzMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg3NDEyN31dLCJuZXh0UHJlS2V5SWQiOjM0LCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzQsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoieFpob2FDejBTcVd4UjdCWWRIaml6QSIsInBob25lSWQiOiJkOTI3NmU0OC04MGQ4LTQ1ZWMtYWE1ZS04MTlkZDc2YzIxYjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGdtZEcrR0ZVWCsvTDFLcHlHaVM1STdESTJjPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhJeUNjdXprWDZZWmtKcjBzR05nbk5Yd1dWOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJQRTRTUVBWVCIsIm1lIjp7ImlkIjoiOTQ3Mjg3NTY4OTg6NDZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiOTQ3Mjg3NTY4OTgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BTSjVaNEtFUHp4dzdVR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFUWmxGYkVMQnExWHBiMlZoU1ZqRjdhYjdIZS8vWFRhRVpPVFpWQ2NTd0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6InhMQjB3SUFjSnZySkJwbXhFNEFQR29TZVUvY3RPd01wSHVmRHAyUGZkU1A4NXBtSzg1U3hNVm00NXdSQWlETnVvSW5VMm5CUHVsbE1pVWZ6d0oyM0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEMU5SVlcxQ3BwVG8xS3llbExKYWMwWGJRWHRQTVdMdStaZDh0bzc5bEoyR3RLQnY3YXIvN2kxaFlSUGhEUmdjTUsybG54aHI1Y2VPK0kxQmJiUlhpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzI4NzU2ODk4OjQ2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlFFMlpSV3hDd2F0VjZXOWxZVWxZeGUybSt4M3YvMTAyaEdUazJWUW5Fc0EifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjg3NDMxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBeGIifQ=="
module.exports = {
  menu: process.env.MENU || "https://github.com/sandungamage00001/BOT-VOICE-COMMANDS/blob/main/menu.mp3",
  HANDLERS: process.env.PREFIX || ":",
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
