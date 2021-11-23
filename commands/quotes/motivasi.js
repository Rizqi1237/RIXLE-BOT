const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["motivasi"],

type: ["quotes"],
useLimit: true,
description: "quotes kata motivasi",
utilisation: userbot.prefix + "motivasi",

async execute(m) {
 let { conn, text } = data

 let tolol = await kntl('https://zenzapi.xyz/api/motivasi?apikey=exz123')
 let dot = await tolol.json()
 let json = dot.result.message

m.reply(json)
}
}
