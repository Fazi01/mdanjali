const { igDownloader, igstalk } = require('../lib/scrapers')
module.exports = {
    name: "insta",
	alias: ["instagram"],
	category: "Downloader",
	desc: "Instagram Downloader",
    query:"_ENTER AN URL_",
    isUrl: true,
    wait: true,
    async mbb({msg,conn },{q}) {   
try{
    if (!q.includes('www.instagram.com')) return msg.reply("*INVALID LINK*")
    await conn.sendMessage("_*DOWNLOADING...*_")
    res = await igDownloader(match[1])
    ytm = res.result
    let buff = await conn.getBuffer(`${ytm.link}`)
    const insta = `${ytm.link}`
    await conn.sendFile(msg.from, buff, "", msg, { caption: `INSTA` ,quoted:msg})
  } 
  catch
  {
     await conn.sendMessage("error")
  }
}};
