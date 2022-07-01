function hello(name) {
  return function (req, res, next) {
    console.log(`${name || 'fulano'}, Welcome to API!`)
    next()
  }
}

module.exports = hello