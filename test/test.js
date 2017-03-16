var assert = require('assert')                                        //test
var convert = require('../index')

describe('convert', function () {
  it('test ctof', function () {
    assert.equal(convert.ctof("攝氏轉華氏"), '攝氏轉華氏')
  })
  it('test ftoc', function () {
    assert.equal(convert.ftoc("華氏轉攝氏"), '華氏轉攝氏')
  })
})
