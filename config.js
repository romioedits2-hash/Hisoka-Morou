const fs = require('fs')
const chalk = require('chalk')

// ========== උඹේ Details මෙතන දාපන් ==========
global.owner = ['94768073555'] // <<< උඹේ WhatsApp Number එක 94 එක්ක
global.ownername = 'ROMIO' // <<< උඹේ නම
global.botname = 'MAHASONA-MD' // Bot එකේ නම
global.packname = 'MAHASONA' // Sticker Pack Name
global.author = '@MAHASONA' // Sticker Author
// ============================================

global.prefa = ['.'] // Command Prefix -.ping.menu වගේ
global.mode = 'self' // self = උඹට විතරයි, public = හැමෝටම
global.autoread = true // Msg ආපු ගමන් Blue Tick
global.autotyping = false // typing... පෙන්නන්න ඕන නම් true

global.thumb = 'https://i.imgur.com/WOz5D6l.jpeg'

// මේක අල්ලන්න එපා
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
