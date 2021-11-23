const kntl = require("node-fetch")
const fs = Ft.fs

module.exports = {

name: ["bucin"],

type: ["quotes"],
useLimit: true,
description: "quotes kata bucin",
utilisation: userbot.prefix + "bucin",

async execute(m) {
 let { conn, text } = data

 let tolol = await kntl('https://zenzapi.xyz/api/bucinquote?apikey=exz123')
 let dot = await tolol.json()
 let json = dot.result.message

m.reply(json)
}
}
