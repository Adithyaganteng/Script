//new bang
//subscribe yo @herman Chanel
//next video gw update ni sc
//tnggu video selanjutnya ye bang
//go 1k Subscriber aminn
const {
  WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require("./lib/function");
const { spawn, exec, execSync } = require("child_process");
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const brainly = require('brainly-scraper');
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const request = require('request');
const axios = require("axios");
const util = require('util')
const moment = require("moment-timezone");
const settings = JSON.parse(fs.readFileSync('./settings.json'))
const imgbb = require('imgbb-uploader')
const user = JSON.parse(fs.readFileSync('./database/regi.json'))
const antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/commands1.js')
let commandsDB = JSON.parse(fs.readFileSync('./lib/commands.json'))
const { uploadimg, upload } = require('./lib/uploadimg')
// special data bot to retrieve the database / to make it more simple @Herman Chanel
// Ubah Di Settings.json yahð
owner = ["6283146208804@s.whatsapp.net"];
premium = ["6283146208804@s.whatsapp.net"];
battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};
blocked = [];
shp = 'ââð'
roomttt = [];
defttt = ["0ï¸â£","1ï¸â£","2ï¸â£","3ï¸â£","4ï¸â£","5ï¸â£","6ï¸â£","7ï¸â£","8ï¸â£","9ï¸â£"];
antideleted = true;
self = false;

// for time
function tanggal(){
  myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];
	var tgl = new Date();
	var day = tgl.getDate();
	bulan = tgl.getMonth();
	var thissDay = tgl.getDay(),
	thisDay = myDays[thissDay];
	var yy = tgl.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	return `${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`;
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var ucapanWaktu = "Selamat malam";
}
if (time2 < "19:00:00") {
  var ucapanWaktu = "Selamat senja";
}
if (time2 < "18:00:00") {
  var ucapanWaktu = "Selamat sore";
}
if (time2 < "15:00:00") {
  var ucapanWaktu = "Selamat siang";
}
if (time2 < "11:00:00") {
  var ucapanWaktu = "Selamat pagi";
}
if (time2 < "05:00:00") {
  var ucapanWaktu = "Selamat malam";
}

module.exports = (beta) => {
  beta.on("group-update", async(mem) => {
    metadata = await beta.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      beta.sendMessage(metadata.id, `*[ Group Opened ]* \n\n${mns}group telah di buka oleh admin${mns}\n${mns}sekarang semua member bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      beta.sendMessage(metadata.id, `*[ Group Closed ]* \n\n${mns}group telah di tutup oleh admin${mns}\n${mns}sekarang hanya admin yang bisa mengirim pesan${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    } else if (!mem.desc == "") {
      tag = mem.descOwner.split("@")[0] + "@s.whatsapp.net";
      beta.sendMessage(metadata.id, `*[ Group Description Change ]*\n\ndeskripsi group telah di ubah oleh owner ${mem.descOwner.split("@")[0]}\n\ndeskripsi baru: ${mem.desc}`, MessageType.text, {
        contextInfo:{mentionedJid:[tag]}
      });
      console.log(`[ DESCRIPTION CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "false") {
      beta.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di buka\nsekarang semua member dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    } else if (mem.restrict == "true") {
      beta.sendMessage(metadata.id, `*[ Group Setting Change ]*\n\nfitur edit group telah di tutup\nsekarang hanya admin yang dapat mengedit info group`, MessageType.text);
      console.log(`[ GROUP SETTING CHANGE ]\ngroup : ${metadata.subject}`);
    }
  });
  // Welcome Simple By Herman Chanel
  beta.on("group-participants-update", async (anu) => {
    try {
      groupMet = await beta.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await beta.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await beta.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(beta.user.jid)) {
        beta.sendMessage(anu.jid, "Halo!", "conversation");
      }
      if (anu.action == "add" && !mem.includes(beta.user.jid)) {
        mdata = await beta.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        let v = beta.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `Halo ${anu_user} Welcome, Jangan Lupa Baca Peraturan Grup kalo tydac gw kick lo`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/ae2c863e3810d87db4cb9.jpg`
        );
        buttons = [
          { buttonId: `fabetaganteng`, buttonText: { displayText: "SelamatDatang" }, type: 1 },
        ];
        imageMsg = (
          await beta.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: "Jangan Keluar Yah Kakâ¨",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await beta.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        beta.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(beta.user.jid)) {
        mdata = await beta.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = beta.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `Beban Grup Out banh aowoakak ga usah balik ya \nSayonara ${anu_user} we will miss you`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
           groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://telegra.ph/file/ae2c863e3810d87db4cb9.jpg`
        );
        buttons = [
          { buttonId: `fabetaganteng`, buttonText: { displayText: "Goodbye dek" }, type: 1 },
        ];
        imageMsg = (
          await beta.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: "Gausah Balik Lah Lu tod",
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await beta.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        beta.relayWAMessage(prep);
      }
      } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  beta.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist){
      blocked.push(i.replace("c.us","s.whatsapp.net"));
    }
  });
  beta.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  beta.on("message-delete",async(mek) => {
    if (mek.key.remoteJid == "status@broadcast") return;
    if (!mek.key.fromMe && mek.key.fromMe) return;
    if (antideleted === false) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
    let date = new Date();
    let region = 'id';
    let getTime = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((newdate * 1) + getTime) / 84600000) % 5];
    let localweek = newdate.toLocaleDateString(region, {
      weekday: 'long'
    });
    let localday = newdate.toLocaleDateString(region, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const type = Object.keys(mek.message)[0];
    beta.sendMessage(mek.key.remoteJid, `*[ ANTI DELETE ]*\n\n*nama* : @${mek.participant.split("@")[0]}\n*jam* : ${moment.localweek.localday}\n*Type* : ${type}`, MessageType.text, {quoted:mek.message, contextInfo: { "mentionedJid": [mek.participant]}})
  });
  beta.on("CB:Call", (num) => {
    let nomer;
    calling = JSON.parse(JSON.stringify(num));
    nomer = calling[1].from;
    beta.sendMessage(nomer, `Sorry ${beta.user.name} can't receive calls, \ncall = block`, MessageType.text)
    .then(() => {
      return beta.blockUser(nomer, 'add')
    })
  });
  beta.on("chat-update", async(mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = mek.messages.all()[0];
      if (!mek.message) return
      if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
      //if (mek.key.fromMe) return
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      global.blocked;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      const content = JSON.stringify(mek.message);
      const from = mek.key.remoteJid;
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType;
      const type = Object.keys(mek.message)[0];
      const cmd =
        type === "conversation" && mek.message.conversation
          ? mek.message.conversation
          : type == "imageMessage" && mek.message.imageMessage.caption
          ? mek.message.imageMessage.caption
          : type == "videoMessage" && mek.message.videoMessage.caption
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
          ? mek.message.extendedTextMessage.text
          : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
          ? mek.message[type].selectedButtonId
          : "";
      const prefix = /^[Â°â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢=|~!#$%^&.?/\\Â©^z+*@,;]/.test(cmd) ? cmd.match(/^[Â°â¢ÏÃ·ÃÂ¶âÂ£Â¢â¬Â¥Â®â¢=|~!#$%^&.?/\\Â©^z+*,;]/gi) : '#'
      body = 
        type === 'listResponseMessage' && mek.message.listResponseMessage.title 
          ? mek.message.listResponseMessage.title 
          : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
          ? mek.message.buttonsResponseMessage.selectedButtonId
          : type == "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      const q = args.join(' ')
      const botNumber = beta.user.jid
      const isGroup = from.endsWith("@g.us")
      const sender = mek.key.fromMe
        ? beta.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid
      const totalchat = beta.chats.all()
      const groupMetadata = isGroup ? await beta.groupMetadata(from) : ''
      const isUser = user.includes(sender)
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupOwner = isGroup ? groupMetadata.owner : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isOwner = owner.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const conts = mek.key.fromMe ? beta.user.jid : beta.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? beta.user.name : conts.notify || conts.vname || conts.name || '-'
      const more = String.fromCharCode(8206)
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const readMore = more.repeat(4001)
      beta.updatePresence(from, Presence.recording)
      const isPrem = premium.includes(sender)
const sendButtonMsg = (text, footer, but = [], options = {}) => {
        const buttonMessagek = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        beta.sendMessage(
          from,
          buttonMessagek,
          buttonsMessage,
          options
        )
      }
      const fvideo = {
	 key: { 
	      participant: '6283146208804@s.whatsapp.net'
	       },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`, 
                 'seconds': '62874', 
                 'caption': 'video',
                 'jpegThumbnail': fs.readFileSync('./lib/herman26.jpg')
                        }
                       }
	                  }
			
    const daftar1 = `
â­ââ ã DAFTAR DULU YA ã â
â ðHai ${pushname} ${ucapanWaktu} 
â ðSebelum Memakai Bot Verif Dulu Ya
ââ`
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nJika Button Tidak kelihatan Ketik .verify ya```'
       const daftar3 = [
          {
            buttonId: `.verify`,
            buttonText: {
              displayText: `ð§VERIFYð§`,
            },
            type: 1,
          },]
	mess = {
				wait: '*ãwããaããiããtã*',
				success: '*ê±á´á´ê±á´ê±...*',
				error: {
					stick: '*É¢á´É¢á´Ê, á´á´Êá´á´á´Éª á´á´ê±á´Êá´Êá´É´ ê±á´á´á´ á´á´É´É¢á´á´É´á´ á´Êê±Éª É¢á´á´Êá´Ê á´á´ ê±á´Éªá´á´á´Ê*',
					Iv: '*á´á´á´ê° ÊÉªÉ´á´ á´Éªá´á´á´ á´ á´ÊÉªá´!*'
				},
				only: {
					group: '*á´á´á´ê° á´©á´ÊÉªÉ´á´á´Ê ÉªÉ´Éª Êá´É´yá´ ÊÉªê±á´ á´Éª É¢á´É´á´á´á´É´ á´á´Êá´á´ É¢Êá´á´á´©!*',
					benned: '*á´á´á´ê° É´á´á´á´Ê á´á´á´á´ á´á´ Êá´É´É´á´á´ ê±ÉªÊá´Êá´á´É´ Êá´Êá´É´É¢Éª á´á´¡É´á´Ê á´É¢á´Ê á´á´á´Êá´á´á´ Êá´É´É´á´á´ á´É´á´á´*',
					ownerG: '*á´á´á´ê° á´©á´ÊÉªÉ´á´á´Ê ÉªÉ´Éª Êá´É´yá´ ÊÉªê±á´ á´Éª É¢á´É´á´á´á´É´ á´Êá´Ê á´á´¡É´á´Ê É¢Êá´á´á´©!*',
					ownerB: '*á´á´á´ê° á´©á´ÊÉªÉ´á´á´Ê ÉªÉ´Éª Êá´É´yá´ ÊÉªê±á´ á´Éª É¢á´É´á´á´á´É´ á´Êá´Ê á´á´¡É´á´Ê Êá´á´!* ',
					premium: '*á´á´á´ê° ê°Éªá´á´Ê ÉªÉ´Éª á´Êá´ê±á´ê± á´ê±á´Ê á´©Êá´á´Éªá´á´!*',
					userB: `Êá´ÊÊá´ á´á´á´ *${pushname}*, Êá´ Êá´Êá´á´ á´á´Êá´á´Òá´á´Ê ê±ÉªÊá´Êá´á´É´ á´á´á´Éªá´ \n*${prefix}daftar*`,
					admin: '*á´á´á´ê° á´©á´ÊÉªÉ´á´á´Ê ÉªÉ´Éª Êá´É´yá´ ÊÉªê±á´ á´Éª É¢á´É´á´á´á´É´ á´Êá´Ê á´á´á´ÉªÉ´ É¢Êá´á´á´©!*',
					Badmin: '*á´á´á´ê° á´©á´ÊÉªÉ´á´á´Ê ÉªÉ´Éª Êá´É´yá´ ÊÉªê±á´ á´Éª É¢á´É´á´á´á´É´ á´á´á´Éªá´á´ Êá´á´ á´á´É´á´á´á´Éª á´á´á´ÉªÉ´!*',
					publikG: `á´á´á´ê° Êá´á´ ê±á´á´á´Êá´É´É¢ ê±á´á´á´Ê á´Éªá´©ÊÉªá´ á´á´á´ á´Êá´Ê á´á´¡É´á´Ê\ná´É´á´á´á´ Êá´ÊÉªÊ á´á´Êá´ê±É´Êá´ á´á´á´Éªá´ \n*${prefix}infobot*`
				}
			}

		
      const sendStickerUrl = async(to, url) => {
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./lib/stick/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
beta.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time2, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))  
});
});
});
}
      if (self) {
        if (!isOwner || !botNumber) return
      }
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }
      for (let i = 0; i < commandsDB.length ; i++) {
            if (budy == commandsDB[i].pesan) {
            beta.sendMessage(from, commandsDB[i].balasan, text, {quoted: mek})
            }
            }

      const reply = (teks) => {
        beta.sendMessage(from, teks, text, {quoted:mek})
        
        const sendMess = (hehe, teks) => {
				beta.sendMess(hehe, teks, text, {quoted:mek})
			}
      }
      const fakethumb = (teks, yes) => {
            beta.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/fake.jpeg'),quoted:mek,caption:yes})
        }
        
      
      const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          beta.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      }
      
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      
      
      if (isCmd && !isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"))
      if (isCmd && isGroup) console.log("[",color("command","lime"),"]",time2,color(command,"lime"),"from",color(sender.split("@")[0],"cyan"),"in",color(groupName,"yellow"))
      if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"cyan"))
      
   if (listbut == 'menu' || command == `${prefix}start`) {
        var menu = `
${ucapanWaktu} kak ${pushname}

*â About Bot*
â *name* : ${beta.user.name}
â *battery* : ${battery.persen}
â *charger* : ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
â *self* : ${self ? "mode self" : "mode public"}
â *phone* : ${beta.user.phone.device_manufacturer}
â *Server Name* : ${beta.browserDescription[0]}
â *Server* : ${beta.browserDescription[1]}
â *version* : ${beta.browserDescription[2]}
â *model* : ${beta.user.phone.device_model}
â *version Wa* : ${beta.user.phone.wa_version}

*â About user*
â *name* : ${pushname}
â *owner* : ${isOwner ? "Owner":"bukan Owner"}
â *nomer* : ${sender.split("@")[0]}
${readMore}

*â Info menu*
 *${shp} ${prefix}totaluser*
 *${shp} ${prefix}report*
 
*â Sticker*
 *${shp} ${prefix}sticker* _<reply image,video,sticker>_

*â Groups Menu*
 *${shp} ${prefix}antilink*
 *${shp} ${prefix}daftar*
 *${shp} ${prefix}kicktime* _@_
 *${shp} ${prefix}hidetag*
 
*â Random Menu*
 *${shp} ${prefix}randombokep*
 *${shp} ${prefix}darkjokes*
 *${shp} ${prefix}tourl*
 *${shp} ${prefix}wangy*

*â Owner*
 *${shp} ${prefix}mode*
 *${shp} ${prefix}join*
 *${shp} ${prefix}leave*
 *${shp} >*
 *${shp} =>*
 *${shp} $*
 *${shp} ${prefix}delete*
 *${shp} ${prefix}addrespon*
 *${shp} ${prefix}delrespon*
 *${shp} ${prefix}addprem*
 *${shp} ${prefix}delprem*
 
â â¬â¬â¬ â´Xucz Botzâµ â¬â¬â¬ â
  ââââã *É´á´á´á´* ã
*ââÉ´á´ sá´á´á´ Êá´á´ á´É´á´ÉªÉ´É¢ð®*
*ââsá´á´á´â*
*ââá´á´Êá´á´É´/á´ á´â*
*ââÉ´á´ sá´É´á´ á´ ÉªÊá´á´x/á´ ÉªÊá´á´É´â*
*ââá´á´Êá´ á´á´á´ ÉªÉ´á´ Éªá´ Êá´á´ á´á´ É¢á´ Êá´?*
*ââá´á´á´ sÊá´Êá´á´É´Êá´ É¢á´É´ [á´á´É´á´sÉª á´á´Êá´ É¢á´É´]*
*ââá´á´Êá´ É¢á´á´ á´á´á´ á´á´É´á´sÉª*
*ââsá´Ês Êá´ É¢á´á´*
*ââhttps://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg*
*ââá´á´Êá´ á´á´á´Ê ss Êá´á´á´Éª á´ÉªÊÉªá´ á´á´*
*ââhttps://wa.me/6283146208804*
*ââsá´á´á´ÊÉªá´É´ sá´á´ á´ á´¡á´ É¢á´á´ Herman)*
  âââã
  â â¬â¬â¬ â´Xucz Botzâµ â¬â¬â¬ â
  ââââã *á´Ç«á´á´* ã
*âá´Êá´É´á´ Êá´ÊÂ²*
*âDenis (Dcode-Denpa)*
*âAdiwijayashing*                  
*âá´á´É´Êá´á´Éªá´ á´á´Éªá´á´Ê*
*âHOPEFULLY TEAM BOT*
*âAnker*
*âHerman Chanel*
*âaffis junianto*
*âá´ÊÊ á´Êá´á´á´á´Ê Êá´á´ Êá´ÉªÉ´É´Êá´*
 ââââã
â â¬â¬ â´Herman Botzâµ â¬â¬â¬ â
`;
       const sendButtonsLoc = (from, title, text, desc, button, msg, men, file) => {
            return beta.SendButtonsLoc(from, {"text": '',"contentText": title + '\n' + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: msg, contextInfo: {"mentionedJid": men ? men : []}})
        }
        sendButtonMsg(menu, `runtime: ${runtime(process.uptime())}`,[{
          buttonId: `${prefix}yt`,
          buttonText: {
            displayText: "YOUTUBE ð§"
          },
          type: 1
          },{
           buttonId: `${prefix}github`,
            buttonText: {
              displayText: "GITHUB ð§"
            },
            type: 1
            },{
            buttonId: `${prefix}owner`,
            buttonText: {
              displayText: "OWNER ð§"
            },
            type: 1
            },{
            buttonId: `${prefix}github`,
            buttonText: {
              displayText: "github"
            },
            type: 1
        }])
      } else if (listbut == "donasi") {
        const donate = `
*â Donate Pages*
â *gopay* :083146208804
`
        beta.sendMessage(from, fs.readFileSync("./lib/image/donasi.jpeg"), image, {quoted: fvideo, caption:donate})
              } else if (listbut == "github") {
        const donate = `
*â Donate Pages*
â *Base By* : Herman Chanel
`
        beta.sendMessage(from, fs.readFileSync("./lib/image/fake.jpeg"), image, {quoted: fvideo, caption:donate})
      } else if (listbut == "sosial media") {
        const medsos = `
*â Sosial Media*
â *github* : http://github.com/Hermanchanel
â *Wa* : https://wa.me/6283146208804
â *Yt* : https://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg
`
        beta.sendMessage(from, fs.readFileSync("./lib/image/medsos.jpeg"), image, {quoted: fvideo, caption: medsos})
      }   
      switch(command){
      case 'mode':
          sendButtonMsg(`${ucapanWaktu} ${isOwner == true ? "owner\nsilahkan pilih mode di bawah ini" : "kak\nanda bukan owner\njadi percumah kalo kamu pencet"}`,`${tanggal()}`,[{
            buttonId:`${prefix}self on`,
            buttonText: {
              displayText: `on`
            },
            type: 1
          },{
            buttonId: `${prefix}self off`,
            buttonText: {
              displayText: 'off'
            },
            type: 1
          }])
          break;
          case 'daftar':
					beta.updatePresence(from, Presence.composing)
					if (isUser) return reply('*á´á´á´á´ ê±á´á´á´Ê á´á´Êá´á´Òá´á´Ê!*')
					user.push(sender)
					fs.writeFileSync('./database/regi.json', JSON.stringify(user))
					try {
					ppimg = await beta.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					captionnya = `â­âã *_á´á´É´á´á´Òá´á´Êá´É´_* ã\`\`\`\nâ á´á´É´á´á´Òá´á´Êá´É´ Êá´ÊÊá´ê±ÉªÊ ê±É´: \nâTM08GK8PPHBSJDH10J\`\`\`\nâ\nâ\`\`\`á´á´á´á´ ${Date} ${time2}\`\`\`\nâ\`\`\`ã É´á´á´á´ ã: ${pushname}\`\`\`\nâ\`\`\`ã É´á´á´á´Ê ã: wa.me/${sender.split("@")[0]}\`\`\`\nâ\`\`\`á´É´á´á´á´ á´á´É´É¢É¢á´É´á´á´á´É´ Êá´á´\`\`\`\nâ\`\`\`ê±ÉªÊá´Êá´á´É´\`\`\`\nâ\`\`\`á´ÉªÊÉªá´ ${prefix}menu\`\`\`\nâ\`\`\`\nâá´á´á´á´Ê á´á´É´É¢É¢á´É´á´: ${user.length} á´Êá´É´É¢\`\`\`\nâ°ââââââââââââââââ`
            
                    daftarimg = await getBuffer(ppimg)
					beta.sendMessage(from, daftarimg, image, {quoted: fvideo, caption: captionnya})
					break 
						case 'bc':
					if (!isOwner) return reply('Kamu siapa?')
					if (args.length < 1) return reply('.......')
					anu = await beta.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await beta.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							beta.sendMessage(_.jid, bc, image, {caption: `ã *_ÊÊá´á´á´á´á´ê±á´_* ã\n\n${body.slice(4)}`})
						}
						beta.sendMessage(_.jid, bc, image, {caption: `ã *_ÊÊá´á´á´á´á´ê±á´_* ã\n\n${body.slice(4)}`})
						reply('Suksess broadcast')
						} else {
						for (let _ of anu) {
							sendMessage(_.jid, `ã *_ÊÊá´á´á´á´á´ê±á´_* ã\n\n${body.slice(4)}`)
						}
						reply('Suksess broadcast')
					}
					break
						case 'totaluser':
					beta.updatePresence(from, Presence.composing) 
					if (!isUser) return reply(mess.only.userB)
					if (!isOwner) return reply(mess.only.ownerB)    
					teks = `â­ââââã *TOTAL USER * ã\n`
					no = 0
					for (let hehehe of user) {
						no += 1
						teks += `[${no.toString()}] @${hehehe.split('@')[0]}\n`
					}
					teks += `â+ Total Pengguna : ${user.length}\nâ°âââââââ¿ *HERMAN BOTZ* âââââ`
					beta.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": user}})
					break
        case 'self':
          if (!isOwner) return reply("anda bukan owner yak:)")
          if (args[0] === "on") {
            self = true;
            reply("bot sekarang telah menjadi self mode")
          } else if (args[0] === "off") {
            self = false;
            reply("bot sekarang telah menjadi public mode")
          }
          break;
          case 'info':
					me = beta.user
					user.push(sender)
					uptime = process.uptime()
					teks = `â½ *É´á´á´á´ Êá´á´* : ${me.name}\nâ½ *á´á´¡É´á´Ê Êá´á´* : Hermansyah\nâ½ *á´Êá´ÒÉªx* : | ${prefix} |\n\nâ½ *á´á´á´ÉªÒ ê±á´á´á´á´* :${runtime(process.uptime)}\nâ½ *á´á´á´á´Ê á´á´É´É¢É¢á´É´á´* : ${user.length} á´ê±á´Ê\nâ½\n*ê±á´á´á´Éªá´Ê á´Êá´É´á´ê± á´á´* :\nâ½ á´ÊÊá´Ê ê±á´¡á´\nâ½ Òxá´7\nâ½ á´Êá´É´á´Êá´ÊÊá´Ê\nâ½ á´É´á´á´Ê\nâ½Affis junianto\nâ½ Angga\nâ½ Herman Chanel`
					const daca = fs.readFileSync('lord.jpg');
				    beta.sendMessage(from, daca, image, {quoted: fvideo, caption: teks})
					break 
					case 'addprem':
					beta.updatePresence(from, Presence.composing)
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
					addpremium = mek.message.extendedTextMessage.contextInfo.mentionedJid
					premium = addpremium
					reply(`*Berhasil Menambahkan ${premium} Ke database User Premium*`)
					break
				case 'delprem':
					if (!isOwner) return reply(mess.only.ownerB)
					rprem = body.slice(13)
					premium.splice(`${rprem}@s.whatsapp.net`, 1)
					reply(`Berhasil Remove wa.me/${rprem} Dari User Premium`)
					break
case 'report': // jan di ganti anjeng emang lu bisa fix bug?
                if (!isUser) return reply(mess.only.userB)
                if (args.length < 1) return reply(`Yang mau direport apaan? Contoh: #report fitur #info error`)
          				
                     const pesan = body.slice(8)
                      if (pesan.length > 300) return beta.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, {quoted: mek})
                        var nomor = mek.participant
                       const tekst1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`

                      var options = {
                         text: tekst1,
                         contextInfo: {mentionedJid: [nomor]},
                     }
                    beta.sendMessage('6283146208804@s.whatsapp.net', options, text, {quoted: mek})
                    reply('Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi.')
                    break
          case 'hidetag':
					if (!isGroup) return reply(mess.only.group)
					var value = body.slice(9)
					var group = await beta.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					beta.sendMessage(from, options, text,{quoted :mek})
					break
          case 'randombokep':
				beta.updatePresence(from, Presence.composing) 
				if (isPrem) return reply(mess.only.premium)    
				if (!isUser) return reply(mess.only.userB)
								
				 data = fs.readFileSync('./lib/18.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 randBokep = await getBuffer(randKey.image)
                 reply(mess.wait)
                 randTeks = randKey.teks
                 beta.sendMessage(from, randBokep, image, {quoted: mek, caption: randTeks})
				break
	case 'kicktime':
					if (!isUser) return reply(mess.only.userB)
									
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					setTimeout( () => {
					beta.sendMessage(from, 'Yok Sama" Al-fatihah', text)
					}, 8000)
					setTimeout( () => {
					reply('sukses min:D')
					}, 7000)
					setTimeout( () => {
					beta.groupRemove(from, mentioned)
					}, 6000)
					setTimeout( () => {
					beta.sendMessage(from, `Bismilah Kick @${mentioned[0].split('@')[0]}`, text) // ur cods
					}, 5000)
					setTimeout( () => {
					beta.sendMessage(from, 'Jangan Nangis Yaa', text)
					}, 2500)
					setTimeout( () => {
					reply('Perintah Diterima min:D')
					}, 0)
					break
					case 'delrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}delrespon key\n\nContoh : ${prefix}delrespon hai`)
          if (!checkCommands(body.slice(11), commandsDB)) return reply(`Key tersebut tidak ada di database`)
          deleteCommands(body.slice(11), commandsDB)
          reply(`Berhasil menghapus respon dengan key ${body.slice(11)}`)
          break;
          case 'wangy':
if (!q) return
  qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} â¤ï¸ â¤ï¸ â¤ï¸ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya yametehhhh ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis â¤ï¸ â¤ï¸ â¤ï¸ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH â¤ï¸ â¤ï¸ â¤ï¸apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. â¤ï¸ â¤ï¸ â¤ï¸ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah â¤ï¸ â¤ï¸ â¤ï¸ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
reply(awikwok)
break
          case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await beta.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break
		  case 'addrespon':
          if (!isOwner) return reply('bukan kamu')
          if (args.length < 1) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input1 = body.slice(11)
          if (!input1.includes('|')) return reply(`Penggunaan ${prefix}addrespon key|respon\n\nContoh : ${prefix}addrespon hai|juga`)
          let input = input1.split("|")
          if (checkCommands(input[0], commandsDB) === true) return reply(`Command tersebut sudah ada`)
          addCommands(input[0], input[1], sender, commandsDB) 
          reply(`Key : ${input[0]}\nRespon : ${input[1]}\n\nRespon berhasil di set`)
    break

                  	case 'delete':
					case 'del':
					case 'd':
					if (!isGroup)return reply(mess.only.group)
					if (!isOwner) return reply(mess.only.ownerB)
					beta.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
        case 'swm':
        case 'stickerwm':
        case 'sticker':
          var a = "Dibuat Oleh Hermansyah";
          var b = "+6283146208804";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await beta.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          beta.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          beta.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await beta.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          beta.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./lib/stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          beta.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await beta.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, beta, mek, from)
          } else {
          reply(`Kirim gambar dengan caption ${prefix}swm atau tag gambar yang sudah dikirim`)
          }
          break;
          case 'join':
          if (args.length === 0 ) return reply(`please input params\n${prefix}join _link gc wa_`)
          var link = body.slice(6)
          res = link.replace("https://chat.whatsapp.com/", "");
          done = await beta.acceptInvite(res)
          reply(`berhasil bergabung di ${done.gid}`)
          break;

  case 'help':
        case 'menu':
       if (!isUser) return reply(mess.only.userB)
          var menulist = beta.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${ucapanWaktu} kak ${pushname} , Gunakan Bot Ini Dengan Bijak .Dilarang Keras Menyepam Bot Ni!! Nanti Kena Baned!! `,
              "description": `bot ini berjalan selama \n${runtime(process.uptime())}`,
              "buttonText": "Sellect",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `${tanggal()}`,
                "rows": [{
                    "title": "menu",
                    "rowId": "0",
                    "description": "Menu Bot"
                  },{
                    "title": "sosial media",
                    "rowId": "1",
                    "description": "Follow My Sosial Media"
                  },{
                    "title": "P",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "donasi",
                    "rowId": "2",
                    "description": "Donasi sekilasnya aja.."
                  }]
              }]
            }
          }, {})
          beta.relayWAMessage(menulist, {waitForAck: false})
          break;    
          case 'leave':
          if (!isGroup) return reply("khusus gc")
          if (!groupAdmins) return reply("khusus group admin")
          beta.groupLeave(from)
          .then((res) => {
            beta.sendMessage(sender, "perintah untuk keluar berhasil di eksekusi", text)
          })
          break;
          case 'darkjokes':
				beta.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/drak.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 darkjokes = await getBuffer(randKey.result)
                 beta.sendMessage(from, darkjokes, image, {quoted: mek, caption: '\`\`\`GELAPð¸ð\`\`\`'})
				break  
				case 'asupan':
				beta.updatePresence(from, Presence.composing) 
				if (!isUser) return reply(mess.only.userB)
								
				reply(mess.wait)
				 data = fs.readFileSync('./lib/asupan.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 asu = await getBuffer(randKey.result)
                 beta.sendMessage(from, asu, image, {quoted: fvideo, caption: '\`\`\`ASUPANðð¸\`\`\`'})
				break  
		
          case 'antilink':

	                if (!isGroup) return reply(mess.only.group)
					if (args.length < 1) return reply(`untuk mengaktifkan ketik : ${prefix}antilink 1`)
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply(mess.only.antiE)
						antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses mengaktifkan fitur antilink')
						beta.sendMessage(from, `ALLERT!!! Group ini sudah di pasang anti link\nJika Kamu Melanggar Maka Akan Saya Tendang`, text)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Sudah Mati Kak')
						var bro = antilink.indexOf(from)
						antilink.splice(bro, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('Sukses menonaktifkan fitur antilink')
					} else {
						reply('1 untuk mengaktifkan, 0 untuk mematikan')
					}
					break;
					case 'verify':
              
if (isRegister) return reply('Akun kamu sudah terverfikasi')
const serialUser = createSerial(18)
	         try {
								ppimg = await beta.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	         register.push(sender)
	        fs.writeFileSync('./database/regi.json', JSON.stringify(register))
	        addRegisterUser(sender, serialUser)
	     //////   addRegisteredUser(sender, serialUser)
	         const anuu = `ã *PENDAFTARAN USER* ã
*âââð Nama:* ${pushname}
*ââð API:* ${sender.split('@')[0]}
*ââð Serial:* ${serialUser}
*ââð¤ Total:* ${register.length} Pengguna

*ã BOT WHATSAAP ã*`
         ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${register.length}&seri=${serialUser}&pp=${ppimg}&bg=https://telegra.ph/file/42e197bd1f295a71cab5b.jpg`)
             buttons = [{buttonId: `!menu`,buttonText:{displayText: `ð·ï¸MENU`},type:1},{buttonId:`${prefix}sc`,buttonText:{displayText:'SC BOTð'},type:1}]
              imageMsg = (await beta.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage
              buttonsMessage = {footerText: 'By Herman Chanel', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await beta.prepareMessageFromContent(from,{buttonsMessage},{quoted: fmek})
              beta.relayWAMessage(prep)
	         console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			beta.updatePresence(from, Presence.composing)
			reply(`*Terimakasih Telah Daftar Di ${NamaBot}*`)
		}, 2000)
		          man = fs.readFileSync('./ð§/hermanchanel2.mp3');
beta.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
        break;
          case 'owner':
          const vacrd = `BEGIN:VCARD\n`+`VERSION:3.0\n`+
                        `FN:owner Bot\n`+
                        `ORG:Developer ${beta.user.name}\n`+
                        'TEL;type=CELL;type=VOICE;waid=62882220799992' +
                        ':+62882220799992\n' + 
                        'END:VCARD'
          beta.sendMessage(from, {display: "owner Bot", vcard: vacrd}, contact, {quoted: mek})
          man = fs.readFileSync('./ð§/hermanchanel1.mp3');
beta.sendMessage(from, man, MessageType.audio, {quoted: fvideo, mimetype: 'audio/mp4', ptt:true})
          break;
        case 'github':
          beta.sendMessage(from, "*â My github for download this script*\n\nhttp://github.com/Hermanchanel", text)
          break;
          
          case 'youtube':
      reply('https://youtube.com/channel/UCPhU6uA_3gUaEvyrFZFgJqg Jangan Lupa Subscribe Ya Kakâ¨')
      break;
      case 'gc':
      reply('https://chat.whatsapp.com/Kt69lMVe90WLBkCFcoYIyA Jangan lupa masuk yað')
      break;
          default:
        if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply('Atasan grup mah bebas yakan :v')
				beta.updatePresence(from, Presence.composing)
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply('Link terdeteksi, Auto kick!')
			    beta.groupRemove(from, [kic]).catch((e) => { reply(mess.only.Badmin) })
			}
			if (budy.startsWith('$')){
if (!isOwner) return reply("anda bukan owner yak:)")
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`@HermanBotz:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('>')){
if (!isOwner) return reply("anda bukan owner yak:)")
try {
return beta.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: fvideo})
} catch(err) {
e = String(err)
reply(e)
}
}
if (budy.includes("Herman")){  // JAN DI UBAH TOD
        reply(`*${pushname}*, É´É¢á´á´á´ÉªÉ´ á´á´É´É¢É¢ÉªÊÂ² á´á´¡É´á´Ê É¢á´¡?`)
        const d = fs.readFileSync('./media/anjim.webp');
        beta.sendMessage(from, d, sticker, {quoted: mek, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "Subscribe Herman Chanel", 'jpegThumbnail': fs.readFileSync('./media/beta.webp')}}}})
        }

if (body.startsWith(`${prefix}${command}`)) {
comd = `      ââââââââââââââââ\nÊá´Éª *${pushname}* !!!\ná´á´ÊÉªÉ´á´á´Ê/á´á´á´á´á´É´á´ *${prefix}${command}*\ná´Éªá´á´á´ á´á´á´ á´á´Êá´á´ *${prefix}menu*\n      ââââââââââââââââ`
beta.sendMessage(from, comd, text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "á´á´á´á´á´É´á´ á´Éªá´á´á´ á´á´Êá´á´Òá´á´Ê", 'jpegThumbnail': fs.readFileSync('./media/lord.webp')}}}})
				  }
				  	if (budy.includes("bot")){
		beta.updatePresence(from, Presence.composing)
		const loli = fs.readFileSync('./media/hai.mp3')
        beta.sendMessage(from, loli, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
        }
if (budy.startsWith('=>')){
if (!isOwner) return reply("anda bukan owner yak:)")
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color(">", "green"), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
          if (isTTT && isPlayer2) {
            if (budy.startsWith("Y")){
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              number = tto[0].number;
              teksboard = `*[ TIC TAC TOE GAME ]*

Player1 @${tty.player1.split('@')[0]}=â
Player2 @${tty.player2.split('@')[0]}=â­

${number[1]}${number[2]}${number[3]}
${number[4]}${number[5]}${number[6]}
${number[7]}${number[8]}${number[9]}

giliran = @${tty.player1.split('@')[0]}`
              beta.sendMessage(from, teksboard, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
            }
            if (budy.startsWith('N')) {
              tto = roomttt.filter(gang => gang.id.includes(from))
              tty = tto[0]
              rooms = roomttt.filter(tokek => !tokek.id.includes(from))
              roomttt = rooms;
              beta.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:mek,contextInfo:{mentionedJid:[tty.player2]}})
            }
          }
          if (isTTT && isPlayer1) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = 'â'
            main[0].number[noober] = s
            main[0].turn = main[0].player1
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player1.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              beta.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player2]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1ï¸â£') && !ttt.includes('2ï¸â£') && !ttt.includes('3ï¸â£') && ! ttt.includes('4ï¸â£') && !ttt.includes('5ï¸â£') && !ttt.includes('6ï¸â£') && !ttt.includes('7ï¸â£') && !ttt.includes('8ï¸â£') && !ttt.includes('9ï¸â£')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=â\nPlayer2 @${tty.player2.split('@')[0]}=â­\n\n${ttt}\n\ngiliran = @${tty.player2.split('@')[0]}`
            beta.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
          if (isTTT && isPlayer2) {
            noober = parseInt(budy)
            if (isNaN(noober)) return 
            if (noober < 1 || noober > 9) return reply("masukan number dengan benar")
            main = roomttt.filter(gang => gang.id.includes(from))
            if (!defttt.includes(main[0].number[noober])) return reply("number sudah di isi, pilih number lain nya")
            if (main[0].turn.includes(sender)) return reply("tunggu giliran mu dulu ya")
            s = 'ð¾ï¸'
            main[0].number[noober] = s
            main[0].turn = main[0].player2
            rooms = roomttt.filter(bang => !bang.id.includes(from))
            roomttt = rooms;
            pop = main[0]
            roomttt.push(pop)
            tto = roomttt.filter(hgh => hgh.id.includes(from))
            tty = tto[0]
            number = tto[0].number;
            ttt = `${number[1]}${number[2]}${number[3]}\n${number[4]}${number[5]}${number[6]}\n${number[7]}${number[8]}${number[9]}`
            
            winningspeech = () => {
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\nyeyyy permainan di menangkan oleh *@${tty.player2.split('@')[0]}*\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              beta.sendMessage(from, ucapan1, text, {quoted:mek, contextInfo:{mentionedJid: [tty.player1]}}) 
              rooms = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt = rooms 
            }
            if (number[1] == s && number[2] == s && number[3] == s) return winningspeech()
            
            if (number[1] == s && number[4] == s && number[7] == s) return winningspeech()
            
            if (number[1] == s && number[5] == s && number[9] == s) return winningspeech()
            
            if (number[2] == s && number[5] == s && number[8] == s) return winningspeech()
            
            if (number[4] == s && number[5] == s && number[6] == s) return winningspeech()
            
            if (number[7] == s && number[8] == s && number[9] == s) return winningspeech()
            
            if (number[3] == s && number[5] == s && number[7] == s) return winningspeech()
            
            if (number[3] == s && number[6] == s && number[9] == s) return winningspeech()
            
            if (!ttt.includes('1ï¸â£') && !ttt.includes('2ï¸â£') && !ttt.includes('3ï¸â£') && ! ttt.includes('4ï¸â£') && !ttt.includes('5ï¸â£') && !ttt.includes('6ï¸â£') && !ttt.includes('7ï¸â£') && !ttt.includes('8ï¸â£') && !ttt.includes('9ï¸â£')){
              ucapan1 = `*[ Hasil pertandingan Tic Tac Toe ]*\n\npermainan seri Good Game\n`
              ucapan2 = `*[ Papan Hasil akhir ]*\n\n${ttt}`
              reply(ucapan1)
              naa = roomttt.filter(hhg => !hhg.id.includes(from))
              return roomttt= naa
            }
            ucapan = `*[ TIC TAC TOE GAME ]*\n\nPlayer1 @${tty.player1.split('@')[0]}=â\nPlayer2 @${tty.player2.split('@')[0]}=â­\n\n${ttt}\n\ngiliran = @${tty.player1.split('@')[0]}`
            beta.sendMessage(from, ucapan, text, {quoted: mek, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
          }
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
};
          