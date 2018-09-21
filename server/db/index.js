const db = require('./db');
const up = require('./seed');
require('./models');


const sync = () => {
  return db.sync({ force: true })
    .then(() => {
      require('./models').Movie.create(up)
    })
}

module.exports = {
  sync
}