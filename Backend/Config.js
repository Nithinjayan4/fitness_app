const dotenv = require('dotenv')

dotenv.config();

module.exports.PORT = 3001;


module.exports.mongoURL = process.env.MONGODB;