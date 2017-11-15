if (process.env.NODE_ENV === 'production') {
  //In Prod
  module.exports = require('./prod');
} else {
  //In Non Prod
  module.exports = require('./dev');
}
