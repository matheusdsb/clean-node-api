import { ValidationComposite } from '../../presentation/helpers/validators/valitadion-composite'
import { makeSignUpValidation } from './signup-validation'
import { RequiredFieldVaildation } from '../../presentation/helpers/validators/required-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'

jest.mock('../../presentation/helpers/validators/valitadion-composite')

describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldVaildation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
