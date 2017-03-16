var convert = require('../index')
var ctof = '攝氏轉華氏'
var ftoc = '華氏轉攝氏'
var cfto = convert.ctof(ctof)
var fcto = convert.ftoc(ftoc)

console.log('ctof=%s => index=%s', ctof, cfto)
console.log('ftoc=%s => index=%s', ftoc, fcto)
