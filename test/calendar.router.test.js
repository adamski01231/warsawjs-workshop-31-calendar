const express = require('express');
const supertest = require('supertest');
const router = require('../web/routing/calendar.router');

const Ajv = require('ajv');
const ajv = Ajv();

let app;

beforeEach(() => {
  app = express();
  router(app);
});

it('should response on /api/calendar', async () => {
  const res = await supertest(app)
    .get('/api/calendar')
    .expect(200);

    expect(res.body).not.toBeNull();
});

it('should be consistent with calendar schema', async () => {
 const schema = require('../docs/schemas/calendar.scheme.json');
 const validate = ajv.compile(schema);

 const res = await supertest(app)
  .get('/api/calendar')
  .expect(200);

 const valid = validate(res.body);
 expect(valid).toBeTruthy();
 expect(validate.errors).toBeNull();
});