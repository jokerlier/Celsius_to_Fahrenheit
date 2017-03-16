var ctof = require('./ctof.js')
var ftoc = require('./ftoc.js')

var C = function (ctof) {
    console.log(sum1)
}

var F = function (ftoc) {
    console.log(sum2)
}

var M = module.exports = {}

M.charMap = function (s, s2t) {
  var t = s2t[s]
  return (typeof t === 'undefined') ? s : t
}

M.textMap = function (text, s2t) {
  var toText = []
  for (var i = 0; i < text.length; i++) {
    toText[i] = M.charMap(text[i], s2t)
  }
  return toText.join('')
}

M.ctof = function (text) {
  return M.textMap(text, ctof)
}

M.ftoc = function (text) {
  return M.textMap(text, ftoc)
}