const fs = require('fs')
const chalk = require('chalk')

// ========== මෙතන උඹේ Number එක දාපන් ==========
global.owner = ['94768073555'] // <<< 94 එක්ක Number එක
global.ownername = 'ROMIO' // <<< උඹේ නම 
global.botname = 'MAHASONA MD'
global.packname = 'My Sticker'
global.author = '@OwnerBot'
// ============================================

global.prefa = ['.'] // Prefix එක
global.mode = 'self' // උඹට විතරයි වැඩ
global.autoread = true
global.autotyping = false

global.thumb = 'https://i.imgur.com/WOz5D6l.jpeg'

// මේ ටික අල්ලන්න එපා
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache
	require(file)
})
