const Sequelize = require('sequelize');
const conn = new Sequelize(
  process.env.DATABASE_URL ||
  'postgres://localhost/brochat'
)

//TODO: create an Author model (plus seed dsata). Author has many messages, Message belongs to Author

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
  models: {
    Message
  },
  sync
}