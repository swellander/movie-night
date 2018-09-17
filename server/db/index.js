const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost/brochat'
)

const Message = conn.define('message', {
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

const sync = () => {
  return conn.sync({ force: true });
}

module.exports = {
  Message,
  sync
}