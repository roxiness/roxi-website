const fs = require('fs')
const { ssr } = require('@sveltech/ssr')

const script = fs.readFileSync(require.resolve('../../dist/build/bundle.js'), 'utf8')
const template = fs.readFileSync(require.resolve('../../dist/__app.html'), 'utf8')

module.exports = async (req, res) => {
    const html = await ssr(template, script, req.url)
    res.send(html + '\n<!--ssr rendered-->')
}

