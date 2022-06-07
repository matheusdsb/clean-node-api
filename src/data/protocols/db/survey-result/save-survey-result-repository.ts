import { SaveSurveyResult } from '@/domain/usecases/survey-result/save-survey-result'

export interface SaveSurveyResultRepository {
  save: (data: SaveSurveyResult.Params) => Promise<void>
}

export namespace SaveSurveyResultRepository {
  export type Params = SaveSurveyResult.Params
}
