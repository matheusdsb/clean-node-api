import { LoadAccountByToken, AccountModel, Decrypter, LoadAccountByTokenRepository } from './db-load-account-by-token.-protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepositoryStub: LoadAccountByTokenRepository
  ) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepositoryStub.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null as unknown as AccountModel
  }
}
