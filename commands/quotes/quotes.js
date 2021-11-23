const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["quotes"],

type: ["quotes"],
useLimit: true,
description: "Kata2 quotes",
utilisation: userbot.prefix + "quotes",

async execute(m) {
 let { conn, text } = data

 let tolol = await kntl('https://zenzapi.xyz/api/random/quote?apikey=exz123')
 let dot = await tolol.json()
 let json = dot.result.quote

m.reply(json)
}
}
