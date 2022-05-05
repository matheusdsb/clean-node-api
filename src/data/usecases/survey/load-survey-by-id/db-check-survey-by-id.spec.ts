import { throwError } from '@/domain/test'
import { mockCheckSurveyByIdRepository } from '@/data/test'
import { DbCheckSurveyById } from './db-check-survey-by-id'
import { CheckSurveyByIdRepository } from '@/data/protocols/db/survey/check-survey-by-id-repository'

type SutTpes = {
  sut: DbCheckSurveyById
  checkSurveyByIdRepositoryStub: CheckSurveyByIdRepository
}

const makeSut = (): SutTpes => {
  const checkSurveyByIdRepositoryStub = mockCheckSurveyByIdRepository()
  const sut = new DbCheckSurveyById(checkSurveyByIdRepositoryStub)
  return {
    sut,
    checkSurveyByIdRepositoryStub
  }
}

describe('DbLoadSurveyById', () => {
  test('Should call CheckSurveyByIdRepository', async () => {
    const { sut, checkSurveyByIdRepositoryStub } = makeSut()
    const loadByIdSpy = jest.spyOn(checkSurveyByIdRepositoryStub, 'checkById')
    await sut.checkById('any_id')
    expect(loadByIdSpy).toHaveBeenCalledWith('any_id')
  })

  test('Should return true if CheckSurveyByIdRepository returns true', async () => {
    const { sut } = makeSut()
    const exists = await sut.checkById('any_id')
    expect(exists).toBe(true)
  })

  test('Should return false if CheckSurveyByIdRepository returns false', async () => {
    const { sut, checkSurveyByIdRepositoryStub } = makeSut()
    jest.spyOn(checkSurveyByIdRepositoryStub, 'checkById').mockReturnValueOnce(Promise.resolve(false))
    const exists = await sut.checkById('any_id')
    expect(exists).toBe(false)
  })

  test('Should throw if CheckSurveyByIdRepository throws', async () => {
    const { sut, checkSurveyByIdRepositoryStub } = makeSut()
    jest.spyOn(checkSurveyByIdRepositoryStub, 'checkById').mockImplementationOnce(throwError)
    const promise = sut.checkById('any_id')
    await expect(promise).rejects.toThrow(new Error())
  })
})
