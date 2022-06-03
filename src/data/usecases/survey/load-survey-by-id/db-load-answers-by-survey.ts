import { LoadAnswersBySurvey } from './db-load-survey-by-id-protocols'
import { LoadAnswersBySurveyRepository } from '../../../protocols/db/survey/load-answers-by-survey-repository'

export class DbLoadAnswersBySurvey implements LoadAnswersBySurvey {
  constructor (private readonly loadAnswersBySurveyRepository: LoadAnswersBySurveyRepository) {}

  async loadAnswers (id: string): Promise<LoadAnswersBySurvey.Result> {
    return await this.loadAnswersBySurveyRepository.loadAnswers(id)
  }
}
