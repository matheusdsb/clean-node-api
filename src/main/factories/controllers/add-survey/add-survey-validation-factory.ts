import { ValidationComposite, RequiredFieldVaildation } from '../../../../validation/validators'
import { Validation } from '../../../../presentation/protocols/validation'

export const makeAddSurveyValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['question', 'answers']) {
    validations.push(new RequiredFieldVaildation(field))
  }
  return new ValidationComposite(validations)
}
