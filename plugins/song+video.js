const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(" *Please give me url or title* ")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🌟 *LAKA-MD SONG DOWNLOADER* 🌟

*Title:* ${data.title}

*Description:* ${data.description}

*Time:* ${data.timestamp}

*Ago:* ${data.ago}

*Views:* ${data.views}


💗 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙻𝙰𝙺𝙰-𝙾𝙵𝙲 💗
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio + document message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + "mp3",caption:"LAKA-OFC"},{quoted:mek})

    
}catch(e){
console.log(e)
reply('${e}')
}
})


//==========video==============


cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply(" *Please give me url or title* ")
const search = await yts(q)
const data = search.videos[0];
const url = data.url

let desc = `
🌟 *LAKA-MD VIDEO DOWNLOADER* 🌟

*Title:* ${data.title}

*Description:* ${data.description}

*Time:* ${data.timestamp}

*Ago:* ${data.ago}

*Views:* ${data.views}


💗 𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙻𝙰𝙺𝙰-𝙾𝙵𝙲 💗
`
await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video + document message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + "mp4",caption:"LAKA-OFC"},{quoted:mek})


}catch(e){
console.log(e)
reply('${e}')
}
})
