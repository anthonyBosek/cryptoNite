const supertest = require('supertest');
const app = require('./app');
const server = require('./server')
const request = supertest(app);


describe('server app', () => {
    afterAll(() => {
        server.close();
      });
  it('should export the express app correctly', () => {
    expect(app).toBeTruthy();
  });
  describe('test server app is running and responds', () => {
    it('should respond with 200', async () => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
});