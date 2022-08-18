
const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Özel Fonksiyonlarımız
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

DATABASE_URL = process.env.DATABASE_URL === undefined ? './anjali.db' : process.env.DATABASE_URL;
DEBUG = process.env.DEBUG === undefined ? false : convertToBool(process.env.DEBUG);

module.exports = {
  owner: process.env.SUDO || "918113921898,0",
  thumbvideo: process.env.THUMBNAIL_VIDEO || "https://i.imgur.com/2kAp0f0.mp4",
  thumbImg: process.env.THUMBNAIL_IMAGE || "https://i.imgur.com/DfFk2Wx.jpeg",
  ownername: process.env.OWNER_NAME || "Neeraj-x0",
  prefix: process.env.PREFIX || ".",
  logs: ToBool(process.env.LOG_MSG) || true,
  bot_name: process.env.BOT_NAME || "Millie-MD",
  timezone: process.env.TIME_ZONE || "Asia/Kolkata",
  locale: "in",
  Session_Id: process.env.SESSION_ID || "U2_Fs_dG_Vk_X1_8L_Jr_3k_/3_HG_M4_ce_1d_1g_m+_IC_mR_Hc_5C_x9_kN_E;anjali",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME||'millietest',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY||'23dfcbe6-d1a1-4b17-a94b-ce9c3dbbc9d7',
  DB_URL:process.env.DATABASE_URL,
  BRANCH: "main",
  AI : process.env.AI||false

    DATABASE_URL: DATABASE_URL,
    DATABASE: DATABASE_URL === './anjali.db' ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: DEBUG }) : new Sequelize(DATABASE_URL, { dialectOptions: { ssl: { require: true, rejectUnauthorized: false } }, logging: DEBUG }),
    DEBUG: DEBUG,
};
