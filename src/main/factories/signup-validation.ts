import { ValidationComposite } from '../../presentation/helpers/validators/valitadion-composite'
import { RequiredFieldVaildation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldVaildation(field))
  }
  return new ValidationComposite(validations)
}
