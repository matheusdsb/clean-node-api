import { Controller, HttpRequest, HttpResponse, LoadSurveys } from './load-sorvey-controller-protocols'

export class LoadSurveysController implements Controller {
  constructor (private readonly loadSurveys: LoadSurveys) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.loadSurveys.load()
    return null as unknown as HttpResponse
  }
}
