import { ValidationComposite } from '../../../presentation/helpers/validators/validation-composite'
import { RequiredFieldVaildation } from '../../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../../presentation/protocols/validation'
import { CompareFieldsVaildation } from '../../../presentation/helpers/validators/compare-fields-validation'
import { EmailValidation } from '../../../presentation/helpers/validators/email-validation'
import { EmailValidatorAdapter } from '../../../utils/email-validator-adapter'

export const makeSignUpValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
    validations.push(new RequiredFieldVaildation(field))
  }
  validations.push(new CompareFieldsVaildation('password', 'passwordConfirmation'))
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
  return new ValidationComposite(validations)
}
