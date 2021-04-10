import { Middleware, HttpRequest, HttpResponse } from '../protocols'
import { forbidden, ok, serverError } from '../helpers/http/http-helper'
import { AccessDeniedError } from '../errors'
import { LoadAccountByToken } from '../../domain/usecases/load-account-by-token'

export class AuthMiddleware implements Middleware {
  constructor (
    private readonly loadAccountByToken: LoadAccountByToken
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const accessToken = httpRequest.headers?.['x-access-token']
      if (!accessToken) {
        return forbidden(new AccessDeniedError())
      }
      const account = await this.loadAccountByToken.load(accessToken)
      if (!account) {
        return forbidden(new AccessDeniedError())
      }
      return ok({ accountId: account.id })
    } catch (error) {
      return serverError(error)
    }
  }
}
