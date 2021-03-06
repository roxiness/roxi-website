
const { ssr } = require('@sveltech/ssr')
const template = '../dist/build/bundle.js'
const script = '../dist/__app.html'

module.exports = async (req, res) => {
    const html = await ssr(template, script, req.url)
    res.send(html + '\n<!--ssr rendered-->')
}