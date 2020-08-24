
const fs = require('fs')
const { ssr } = require('@sveltech/ssr')
let script = 'dist/build/bundle.js'
let template = 'dist/__app.html'

console.log('readdir', fs.readdirSync('./'))

// template = fs.existsSync(template) ? fs.readFileSync(template, 'utf8') : template
// script = fs.existsSync(script) ? fs.readFileSync(script, 'utf8') : script



module.exports = async (req, res) => {
    const html = await ssr(template, script, req.url)
    res.send(html + '\n<!--ssr rendered-->')
}