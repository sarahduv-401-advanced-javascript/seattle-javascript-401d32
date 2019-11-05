'use strict';

const mongoose = require('mongoose');
const MongoMemoryServer = require('mongodb-memory-server').default;

let mongoServer;

async function startDB() {
  mongoServer = new MongoMemoryServer();

  const mongoURI = await mongoServer.getConnectionString();

  const mongooseOptions  = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  await mongoose.connect(mongoURI, mongooseOptions);
}

async function stopDB() {
  await mongoose.disconnect();
}

beforeAll(startDB);
afterAll(stopDB);

if (!module.parent) {
  describe('supergoose', () => {
    it('can connect', async () => {
      expect(mongoose.connection.db).toBeDefined();
    });
  });
}