// install supertest

'use strict';

const server = require('../server');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('testing server routes', () => {
  it('should send an array of posts', () => {
    mockRequest.get('/posts')
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.length).toBe(0);
      });
  });

  it('should post a new post', () => {
    mockRequest
      .post('/posts')
      .send({name: 'post1', content: 'my first post'})
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.name).toEqual('post1');
      });
  });
});


