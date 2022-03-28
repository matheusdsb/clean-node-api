import { LoadAccountByToken, Decrypter, LoadAccountByTokenRepository } from './db-load-account-by-token.-protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepositoryStub: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<LoadAccountByToken.Result> {
    let token: string
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null as any
    }
    if (token) {
      const account = await this.loadAccountByTokenRepositoryStub.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null as any
  }
}
