require('./config')
const { Telegraf } = require('telegraf')
const fs = require('fs')
const os = require('os')
const chalk = require('chalk')
const speed = require('performance-now')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const { menu, start } = require('./command/menu.js')
const { color, bgcolor } = require('./lib/color')
const { exec, spawn, execSync } = require("child_process")
const { getBuffer, isUrl, fetchJson, tinyurl, format, UrlOri } = require('./lib/function.js')

global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')

console.log(bgcolor('Script By FatihArridho\n\nName Bot : ' + settings.nameBot, 'green'))
setTimeout(function () {
    console.log(color('Success Conected !', 'magenta'))
}, 1000);
  const run = new Telegraf(settings.tokenBot)
  const todays = new Date * 1
  
  run.on("callback_query", async (fth) => {
    var body = fth.callbackQuery.data
    const chat = fth.update.callback_query.message.text || fth.update.callback_query.message.caption || ""
	var prefa = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chat) ? chat.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '/'
	const pushname = fth.update.callback_query.from.last_name ? fth.update.callback_query.from.first_name + ' ' + fth.update.callback_query.from.last_name : fth.update.callback_query.from.first_name;
	const chatId = fth.update.callback_query.message.chat.id;
    const messageId = fth.callbackQuery.message.message_id;
    const userId = fth.callbackQuery.from.id;
    const username = fth.callbackQuery.from.username;
    const command = body.split(" ")[0];
    const args = body.split(" ").slice(1);
    
    if (command == 'ttwm'){
    fth.reply(mess.wait)
    let data = await fetchJson(api('zenz', '/downloader/musically', { url: isUrl(body)[0] }, 'apikey'))
    let { url_wm } = data.result
    try {
    fth.replyWithVideo({ url: url_wm, filename: `TikTok With Watermark-${todays}.mp4`, mime_type: 'video/mp4' }, { caption: 'TikTok With Watermark' })
    } catch (e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    if (command == 'ttnowm'){
    fth.reply(mess.wait)
    let data = await fetchJson(api('zenz', '/downloader/musically', { url: isUrl(body)[0] }, 'apikey'))
    let { url_nowm } = data.result
    try {
    fth.replyWithVideo({ url: url_nowm, filename: `TikTok Without Watermark-${todays}.mp4` }, { caption: 'TikTok Without Watermark', mime_type: 'video/mp4' })
    } catch (e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    if (command == 'ttnowmhd'){
    fth.reply(mess.wait)
    let data = await fetchJson(api('zenz', '/downloader/musically', { url: isUrl(body)[0] }, 'apikey'))
    let { url_hd } = data.result
    try {
    fth.replyWithVideo({ url: url_hd, filename: `TikTok Without Watermark HD-${todays}.mp4` }, { caption: 'TikTok Without Watermark HD', mime_type: 'video/mp4' })
    } catch (e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    if (command == 'ttmp3'){
    fth.reply(mess.wait)
    let data = await fetchJson(api('zenz', '/downloader/musically', { url: isUrl(body)[0] }, 'apikey'))
    let { audio } = data.result
    try {
    fth.replyWithAudio({ url: audio, filename: `TikTok Audio-${todays}.mp3` }, { caption: 'TikTok Audio', mime_type: 'audio/mpeg' })
    } catch (e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    if (command == 'playAudio'){
    fth.reply(mess.wait)
    try {
    fth.replyWithAudio({ url: isUrl(body)[0], filename: `Audio-${todays}.mp3`, mime_type: 'audio/mp3' })
    } catch(e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    if (command == 'playVideo'){
    fth.reply(mess.wait)
    try {
    fth.replyWithVideo({ url: isUrl(body)[0], filename: `Video-${todays}.mp4`, mime_type: 'video/mp4' })
    } catch(e) {
    fth.reply(mess.error)
    console.error(e)
    }
    }
    switch (body) {
    	case "allmenu": {
        return fth.editMessageText(menu(settings.owner,prefa),{
reply_markup: {
inline_keyboard: [
[{ text: 'Source Code', url: 'https://github.com/FatihArridho/Obito-Uchiha'}],
[{ text: 'Main APIs', url: 'https://zenzapis.xyz'}],
[{ text: 'Back' ,callback_data: 'start'}]
]}, disable_web_page_preview: "true" })
}
        break
    case 'start': {
   	return fth.editMessageText(start(pushname, settings.nameBot),{
reply_markup: {
inline_keyboard: [
[{ text: 'Source Code', url: 'https://github.com/FatihArridho/Obito-Uchiha'}],
[{ text: 'Main APIs', url: 'https://zenzapis.xyz'}],
[{ text: 'All Menu' ,callback_data: 'allmenu'}]
]}, disable_web_page_preview: "true" })
   	}
	break
    }
    })
    
    run.on("message", async(obito) => {
try {
	const chats = obito.message.text || obito.message.caption || ""
    var prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ_&<`™©®Δ^βα¦|/\\©^]/.test(chats) ? chats.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ_&<!`™©®Δ^βα¦|/\\©^]/gi) : '.'
    const command = chats.trim().split(" ").shift().toLowerCase()
	const isOwner = obito.message.from.username == settings.owner
	const pushname = obito.message.from.last_name ? obito.message.from.first_name + ' ' + obito.message.from.last_name : obito.message.from.first_name
	const from = obito.message.from.id.toString()
	const quotedMsg = obito.message.reply_to_message
	const isCmd = chats.startsWith(prefix)
	const args = chats.trim().split(/ +/).slice(1)
	const query = q = args.join(' ')
	const today = new Date()
    const time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

   const getLink = async(file_id) => { try { return (await run.telegram.getFileLink(file_id)).href } catch { throw "Error while get url" } }
   const isImage = obito.message.hasOwnProperty("photo")
   const isText = obito.message.hasOwnProperty("text")
   const isVideo = obito.message.hasOwnProperty("video")
   const isAudio = obito.message.hasOwnProperty("audio")
   const isSticker = obito.message.hasOwnProperty("sticker")
   const isContact = obito.message.hasOwnProperty("contact")
   const isLocation = obito.message.hasOwnProperty("location")
   const isDocument = obito.message.hasOwnProperty("document")
   const isAnimation = obito.message.hasOwnProperty("animation")
   const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
   const Quoted = obito.message.reply_to_message || {}
   const isQuotedImage = Quoted.hasOwnProperty("photo")
   const isQuotedVideo = Quoted.hasOwnProperty("video")
   const isQuotedAudio = Quoted.hasOwnProperty("audio")
   const isQuotedSticker = Quoted.hasOwnProperty("sticker")
   const isQuotedContact = Quoted.hasOwnProperty("contact")
   const isQuotedLocation = Quoted.hasOwnProperty("location")
   const isQuotedDocument = Quoted.hasOwnProperty("document")
   const isQuotedAnimation = Quoted.hasOwnProperty("animation")
   const isQuoted = obito.message.hasOwnProperty("reply_to_message")
var file_id = ""
  if (isQuoted) {
   file_id = isQuotedImage ? obito.message.reply_to_message.photo[obito.message.reply_to_message.photo.length - 1].file_id :
    isQuotedVideo ? obito.message.reply_to_message.video.file_id :
     isQuotedAudio ? obito.message.reply_to_message.audio.file_id :
      isQuotedSticker ? obito.message.reply_to_message.sticker.file_id :
       isQuotedDocument ? obito.message.reply_to_message.document.file_id :
        isQuotedAnimation ? obito.message.reply_to_message.animation.file_id : ""
         } else {
file_id = isImage ? obito.message.photo[obito.message.photo.length - 1].file_id :
 isVideo ? obito.message.video.file_id :
  isAudio ? obito.message.audio.file_id :
   isDocument ? obito.message.document.file_id :
    isSticker ? obito.message.sticker.file_id :
     isAnimation ? obito.message.animation.file_id : ""
  }
     var mediaLink = file_id != "" ? await getLink(file_id) : ""


if (isCmd) {
	console.log(color('[CMD]', 'green'), color(time, 'blue'), color(chats.split(" ")[0] || chats, 'cyan'), color("By", "green"), color(pushname, 'white'))
	}

switch (command) {
   case prefix+'start': {
   let text = start(pushname, settings.nameBot)
    let options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Source Code', url: 'https://github.com/FatihArridho/Obito-Uchiha'}],
                [{ text: 'Main APIs', url: 'https://zenzapis.xyz'}],
                [{ text: 'All Menu', callback_data: 'allmenu' }]
            ]}, disable_web_page_preview: "true"
    }
    await obito.reply(text, options)
   	}
	break

    // DOWNLOADER
    case prefix+'tiktok': {
    if (!isUrl(query)) return obito.reply(mess.no.linktt)
    if (!query.includes('tiktok.com')) return obito.reply(mess.no.linktt)
    let data = await fetchJson(api('zenz', '/downloader/musically', { url: isUrl(query)[0] }, 'apikey'))
    let text = `Please choose which one to download?`
    let options = { caption: text,
    reply_markup: {
    inline_keyboard: [
    [{ text: "🎥 With WaterMark", callback_data: `ttwm ${isUrl(query)[0]}` }],
    [{ text: "🎥 No WaterMark", callback_data: `ttnowm ${isUrl(query)[0]}` }],
    [{ text: "🎥 No WaterMark HD", callback_data: `ttnowmhd ${isUrl(query)[0]}` }],
    [{ text: "🎵 Audio", callback_data: `ttmp3 ${isUrl(query)[0]}` }]
    ]}
    }
    await obito.replyWithPhoto({ url : data.result.thumb }, options)
    }
    break
    
    case prefix+'play': {
    if (!query) return obito.reply(mess.no.query)
    let data = await fetchJson(api('zenz', '/downloader/y2mate', { query: query }, 'apikey'))
    let { title, getAudio, sizeAudio, getVideo, sizeVideo, thumb, quality, id } = data.result
    let text = `• Title : ${title}\n• Size Audio : ${sizeAudio}\n• Size Video : ${sizeVideo}\n• Url Video : https://youtu.be/${id}`
    let shortVid = await tinyurl(getVideo.replace(/https/, 'http'))
    let shortAud = await tinyurl(getAudio.replace(/https/, 'http'))
        let options = { caption: text,
        reply_markup: {
        inline_keyboard: [
        [{ text: "Url Alternatif", url: 'https://www.y2mate.com/id/youtube/'+id }],
        [{ text: "🎥 Video", callback_data: `playVideo ${shortVid}` }],
        [{ text: "🎵 Audio", callback_data: `playAudio ${shortAud}` }]
        ]}
        }
    await obito.replyWithPhoto({ url: thumb }, options)
    }
    break

    case prefix+'pindl': {
    if (!isUrl(query)) return obito.reply(mess.no.linkpin)
    if (!query.includes('pinterest.com')) return obito.reply(mess.no.linkpin)
    obito.reply(mess.wait)
    let { result } = await fetchJson(api('zenz', '/downloader/pinterestdl', { url: isUrl(query)[0] }, 'apikey'))
    if (result.includes('.mp4')) {
    await obito.replyWithVideo({ url: result, filename: `video-${todays}.mp4` }, { caption: 'Pinterest Video' })
    } else if (result.includes('.gif')) {
    await obito.replyWithDocument({ url: result, filename: `gif-${todays}.gif` }, { caption: 'Pinterest Gif' })
    } else {
    await obito.replyWithPhoto({ url: result, filename: `photo-${todays}.jpg` }, { caption: 'Pinterest Photo' })
    }
    }
    break

    case prefix+'twitter': {
    if (!isUrl(query)) return obito.reply(mess.no.linktw)
    if (!query.includes('twitter.com')) return obito.reply(mess.no.linktw)
    let data = await fetchJson(api('zenz', '/downloader/twitter', { url: isUrl(query)[0] }, 'apikey'))
    let { desc, thumb, hd, sd } = data.result
    let text = `• Description : ${desc}`
      let options = { caption: text,
        reply_markup: {
        inline_keyboard: [
        [{ text: "URL Twitter", url: isUrl(desc)[0] }],
        [{ text: "🎥 HD", callback_data: `playVideo ${await tinyurl(hd)}` }],
        [{ text: "🎥 SD", callback_data: `playVideo ${await tinyurl(sd)}` }]
        ]}
        }
    await obito.replyWithPhoto({ url: thumb }, options)
    }
    break

    case prefix+'youtube': {
    if (!isUrl(query)) return obito.reply(mess.no.linkyt)
    if (!query.includes('youtu')) return obito.reply(mess.no.linkyt)
    let data = await fetchJson(api('zenz', '/downloader/youtube', { url: isUrl(query)[0] }, 'apikey'))
    let { title, getAudio, sizeAudio, getVideo, sizeVideo, thumb, views, channel, uploadDate } = data.result
    let text = `• Title : ${title}\n• Size Audio : ${sizeAudio}\n• Size Video : ${sizeVideo}\n• Viewers : ${views}\n• Channel : ${channel}\n• Upload Date : ${uploadDate}`
        let options = { caption: text,
        reply_markup: {
        inline_keyboard: [
        [{ text: "🎥 Video", callback_data: `playVideo ${getVideo}` }],
        [{ text: "🎵 Audio", callback_data: `playAudio ${getAudio}` }]
        ]}
        }
    await obito.replyWithPhoto({ url: thumb }, options)
    }
    break
    
    case prefix+'mediafire': {
    if (!isUrl(query)) return obito.reply(mess.no.linkmf)
    obito.reply(mess.wait)
    let { result } = await fetchJson(api('zenz', '/downloader/mediafire', { url: isUrl(query)[0] }, 'apikey' ))
    let seplit = result.split('/')
    let nama = seplit[5]
    let mimes = nama.split('.')
    let mimep = mimes.length-1
    let mime = mimes[mimep]
    await obito.replyWithDocument({ url: result, filename: `${nama}`, mime_type: mime })
    }
    break

    case prefix+'instagram': {
    if (!isUrl(query)) return obito.reply(mess.no.linkig)
    if (!query.includes('instagram.com')) return obito.reply(mess.no.linkig)
    obito.reply(mess.wait)
    let data = await fetchJson(api('zenz', '/downloader/instagram', { url: isUrl(query)[0] }, 'apikey'))
    for (let i of data.result) {
    if (i.includes('.mp4')) {
    await obito.replyWithVideo({ url: i }, { caption: 'Instagram Video' })
    } else {
    await obito.replyWithPhoto({ url: i }, { caption: 'Instagram Photo' })
    }
    }
    }
    break

    case prefix+'soundcloud': {
    if (!isUrl(query)) return obito.reply(mess.no.linksc)
    if (!query.includes('soundcloud.com')) return obito.reply(mess.no.linksc)
    let data = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(query)[0] }, 'apikey'))
    let { title, thumb, url } = data.result
    let text = `• Title : ${title}`
    let options = { caption: text,
        reply_markup: {
        inline_keyboard: [
        [{ text: "🎵 Audio", callback_data: `playAudio ${await tinyurl(url)}` }]
        ]}
        }
    await obito.replyWithPhoto({ url: thumb }, options)
    }
    break

	case '>': {
	if (!isOwner) return obito.reply(mess.owner)
	try {
    	let evaled = await eval(chats.slice(2))
    	if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
    	obito.reply(`${evaled}`)
	} catch (err) {
    	obito.reply(`${err}`)
	}
	}
	break
    case '$': {
    if (!isOwner) return obito.reply(mess.owner)
    let bro = chats.slice(2)
    exec(bro, (err, stdout) => {
    if (err) return obito.reply(`${err}`)
    if (stdout) return obito.reply(`EXEC: ${bro}\n\n${stdout}`)
    })
    }
    break
    case prefix+'ping': {
    const uptime = process.uptime();
    const timestamp = speed();
    const latensi = speed() - timestamp
    const tutid = moment().millisecond()
    const tmenu = `Host : _${os.hostname()}_
Platfrom : _${os.platform()}_
Penggunaan RAM : _${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require(`os`).totalmem / 1024 / 1024)}MB_

Ping : ${tutid}MS
Runtime : ${await format(uptime)}
Speed : ${latensi.toFixed(4)} Second` 
obito.reply(tmenu, {reply_markup: {
    inline_keyboard:[
    [
    { text: 'Back', callback_data: 'start'}]
    ]
    },
    parse_mode: "Markdown"
    })
    }
    break
}
} catch(e) {
console.log(e)
obito.reply(mess.error)
}
})

run.launch()
process.once('SIGINT', () => run.stop('SIGINT'))
process.once('SIGTERM', () => run.stop('SIGTERM'))

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})