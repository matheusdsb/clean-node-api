import { forbidden } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors/'
import { AuthMiddleware } from './auth-middleware'

describe('Auth Middleware', () => {
  test('Should  return 403 if no x-access-token exists in headers', async () => {
    const sut = new AuthMiddleware()
    const httpReponse = await sut.handle({})
    expect(httpReponse).toEqual(forbidden(new AccessDeniedError()))
  })
})
