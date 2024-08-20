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

}catch(e){
console.log(e)
reply('${e}')
}
})

