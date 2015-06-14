//module.exports = require('./env/' + process.env.NODE_ENV + '.js');  set NODE_ENV with : export NODE_ENV=development or however it's done on a mac.
module.exports = require('./env/development.js');