import { Controller, HttpRequest, HttpResponse, LoadSurveyById, SaveSurveyResult } from './save-survey-result-controller-protocols'
import { forbidden, serverError } from '@/presentation/helpers/http/http-helper'
import { InvalidParamError } from '@/presentation/errors/invalid-param-error'

export class SaveSurveyResultController implements Controller {
  constructor (
    private readonly loadSurveyById: LoadSurveyById,
    private readonly saveSurveyResult: SaveSurveyResult
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { surveyId } = httpRequest.params
      const { answer } = httpRequest.body
      const survey = await this.loadSurveyById.loadById(surveyId)
      if (!survey) {
        return forbidden(new InvalidParamError('surveyId'))
      }
      if (!survey.answers.find(a => a.answer === answer)) {
        return forbidden(new InvalidParamError('answer'))
      }
      await this.saveSurveyResult.save({
        accountId: httpRequest.accountId as string,
        surveyId,
        answer,
        date: new Date()
      })
      return null as unknown as HttpResponse
    } catch (error) {
      return serverError(error)
    }
  }
}
