const { expect } = require('chai');
const db = require('../server/db');
const { Message, sync } = db;

describe('data layer', () => {
  beforeEach(() => {
    return sync()
      .then(() => {
        Promise.all([
          Message.create({ content: 'First message' }),
          Message.create({ content: 'Second message' }),
          Message.create({ content: 'Third message' }),
        ])
      })
      .catch(err => { throw err })
  })
  it('the db exists', () => {
    expect(db).to.be.ok;
  });
  it('has messages', () => {
    return Message.findAll()
      .then(messages => expect(messages.length).equal(3))
  })
})