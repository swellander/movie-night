const { expect } = require('chai');
const db = require('../server/db');

describe('data layer', () => {
  it('the db exists', () => {
    expect(db).to.be.ok;
  });
})