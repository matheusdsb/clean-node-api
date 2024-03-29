import { LoadSurveys, SurveyModel, LoadSurveysRepository } from './db-load-surveys-protocols'
export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveysRepository: LoadSurveysRepository) {}

  async load (accountId: string): Promise<SurveyModel[]> {
    return await this.loadSurveysRepository.loadAll(accountId)
  }
}
