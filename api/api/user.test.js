const request = require('supertest')
const app = require('../app')

describe('User Api', () => {
  test("it should send array of users data", () => {
    return request(app)
      // endpoint api
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            message: expect.any(String),
            data: expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
                age: expect.any(Number),
                hobbies: expect.arrayContaining([expect.any(String)])
              })
            ])
          })
        )
      })
  })

  test("get user by id", () => {

  })

})