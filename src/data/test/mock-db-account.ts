import { AddAccountRepository } from '@/data/protocols/db/account/add-account-repository'
import { LoadAccountByEmailRepository } from '@/data/protocols/db/account/load-account-by-email-reposity'
import { LoadAccountByTokenRepository } from '@/data/protocols/db/account/load-account-by-token-reposity'
import { UpdateAccessTokenRepository } from '@/data/protocols/db/account/update-access-token-repository'
import { CheckAccountByEmailRepository } from '@/data/protocols/db/account/check-account-by-email-reposity'

export const mockAddAccountRepository = (): AddAccountRepository => {
  class AddAccountRepositoryStub implements AddAccountRepository {
    async add (accountData: AddAccountRepository.Params): Promise<AddAccountRepository.Result> {
      return await Promise.resolve(true)
    }
  }
  return new AddAccountRepositoryStub()
}

export const mockLoadAccountByEmailRepository = (): LoadAccountByEmailRepository => {
  class LoadAccountByEmailRepositoryStub implements LoadAccountByEmailRepository {
    async loadByEmail (email: string): Promise<LoadAccountByEmailRepository.Result> {
      return {
        id: 'any_id',
        name: 'any_name',
        password: 'any_password'
      }
    }
  }
  return new LoadAccountByEmailRepositoryStub()
}

export const mockCheckAccountByEmailRepository = (): CheckAccountByEmailRepository => {
  class CheckAccountByEmailReposityStub implements CheckAccountByEmailRepository {
    async checkByEmail (email: string): Promise<CheckAccountByEmailRepository.Result> {
      return false
    }
  }
  return new CheckAccountByEmailReposityStub()
}

export const mockLoadAccountByTokenRepository = (): LoadAccountByTokenRepository => {
  class LoadAccountByTokenRepositoryStub implements LoadAccountByTokenRepository {
    async loadByToken (token: string, role?: string): Promise<LoadAccountByTokenRepository.Result> {
      return {
        id: 'any_id',
        email: 'any_email@mail.com',
        name: 'any_name',
        password: 'any_password'
      }
    }
  }
  return new LoadAccountByTokenRepositoryStub()
}

export const mockUpdateAccessTokenRepository = (): UpdateAccessTokenRepository => {
  class UpdateAccessTokenRepositoryStub implements UpdateAccessTokenRepository {
    async updateAccessToken (id: string, token: string): Promise<void> { }
  }
  return new UpdateAccessTokenRepositoryStub()
}
