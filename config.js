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
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "255625774543";
global.sudo = process.env.SUDO || "255625774543";
global.owner = process.env.OWNER_NUMBER || "255625774543";
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
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =SUHAIL_14_48_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA2NixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDIyMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjM1LFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDEsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM4LFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMixcbiAgICAgICAgOTIsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDEzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicFhRUzJIUlRZQmtONnJLK0t6b2ljVnBtMTc1S1dIOWNCYmJMTS9HeXRnZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTU2MTI3OTI0NzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkY5REQyMDRFQjMyNzA4MjE1Rjg3QTg2RTFGQTc4NTFDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTIyNzY3NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiTGx1Z3Q2U1FxaVdJcmJzT0NaZ3h3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjBiZWIzY2Y5LTlhYmMtNGY0Yy1iMTc2LWRjMGJlMDQxMmI3NlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzcsXG4gICAgICAxMzksXG4gICAgICAyMzEsXG4gICAgICAxNzQsXG4gICAgICA2NCxcbiAgICAgIDI0MixcbiAgICAgIDEyOCxcbiAgICAgIDU1LFxuICAgICAgMjEsXG4gICAgICAyMDAsXG4gICAgICAxNjUsXG4gICAgICA1MyxcbiAgICAgIDIxMixcbiAgICAgIDIyNyxcbiAgICAgIDE3NSxcbiAgICAgIDEyNCxcbiAgICAgIDY5LFxuICAgICAgMjIyLFxuICAgICAgMTA2LFxuICAgICAgMTI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM1LFxuICAgICAgMjQsXG4gICAgICAxODcsXG4gICAgICAxNjcsXG4gICAgICA5NCxcbiAgICAgIDIzMCxcbiAgICAgIDEzMyxcbiAgICAgIDQ1LFxuICAgICAgMTAyLFxuICAgICAgMjEzLFxuICAgICAgMTE0LFxuICAgICAgODgsXG4gICAgICAxNTksXG4gICAgICAxNTcsXG4gICAgICAyMzAsXG4gICAgICAxNSxcbiAgICAgIDE2MyxcbiAgICAgIDE2MyxcbiAgICAgIDEyNCxcbiAgICAgIDE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdYTUVTRUFFXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2MTI3OTI0Nzc6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1OTA5ODg3NjI2MDUyNzozMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTDhyT1FFRUpTejM3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFDS2kzOWk1SXcrK3o0alFqdk90VkhXVzB0TCtsdEVjZmpvaTlWTDJhMWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTJQWFVEbWoxaFlvUUNjeXJYQ1hwSzRDSUQ1RVoxSklPeGNGSFFYZWc5SDlHSW40bEkyWUhXeGJtTlFMU1NyWlplM2c2Tlh4MG85Y0NPOXFlZjlxQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSVF3NTVaZ1JKNEd4WTlBM2hQZmhSUVBBeEpwQ2p2ejdoTlpSQUY3N1FJUXowRCtrcXpFTUZtNm1IaUgrRnFtQTBSVzVSUDY2eHpXSHNDczlHNDJ2Z0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1NjEyNzkyNDc3OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEyMjc2NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQb1dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBvVy5qc29uIjogIntcImtleURhdGFcIjpcIkRpU1U2bmtIYnFIa3BsYmtJb05KM2h6ek5pRW02UmlxZ08yS1ZzQjFqeWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTI4NDE5MzgwOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑-𝐌𝐃 ╠════ need support then ☞ https://rb.gy/izabex ═════╣",
  author: process.env.PACK_AUTHER || "VENOCYBER",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "VENOCYBER-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "VENOCYBER",
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
