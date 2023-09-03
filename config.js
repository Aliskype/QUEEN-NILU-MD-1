const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

/*
TO GET PASSWORD WATCH THIS =>
*/
global.PASSWORD = 'janith'  // Put The Password Get From Yt video  https://youtube.com/

// PUT YOUR SESSION ID HERE 

global.SESSION_ID = 'QueenNilu;;;gjw0WAAB#7bZFMkHrAGUF19e-N6pxVv2Zjt4WSHEXL7ArF8JhePY' // PUT your session ID BY scan QR 



// ⚙️ OWNER SETTINGS  ⚙️

global.OWNER_NUMBER = '923420478099'

global.OWNER_NAME = 'ALI'

global.OPENAI_API_KEY = "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"


/*
⚙️ BOT  SETTINGS  ⚙️
*/

global.BOT_NAME = 'ǫᴜᴇᴇɴ ɴɪʟᴜ'
 
global.STICKER_NAME = '@Janiya 🤹‍♂️' //sticker

global.LANG = 'EN' // Language (EN-  TO english  ,  SI- TO sinhala )

global.PREFIX = '.' // Bot Prefix

global.CAPTION = 'ǫᴜᴇᴇɴ ɴɪʟᴜ  © 2023' // Caption

global.ALIVELOGO = 'https://telegra.ph/file/8d82990daf8c7207d8063.jpg' // Set Alive Logo link

global.MAX_SIZE = '10000' // Bot Uloading Max size 

global.ANTI_BAD = false // Antibad (on = True , Off = False )

global.ONLY_GROUP = 'false' // Only group mode

global.INBOX_BLOCK = 'off'  // TO Inbox Block On put "on"

global.ANTI_LINK = 'false' //Anti Bad (on = True , Off = False )

global.TIMEZONE = 'Asia/Colombo' 

global.SEX_DL = 'true' // 18 + video dl

global.AUTO_STICKER = false

global.AUTO_REPLY = false

global.ANTI_BAD_ACTION = false

global.GROUP_LINK = 'https://chat.whatsapp.com/' 


module.exports = {

MAX_SIZE: 100,

};
