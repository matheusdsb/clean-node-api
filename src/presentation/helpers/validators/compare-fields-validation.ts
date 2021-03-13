import { InvalidParamError } from '../../errors'
import { Validation } from '../../protocols/validation'

export class CompareFieldsVaildation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldToCompareName
  ) { }

  validate (input: any): Error | null {
    if (input[this.fieldName] !== input[this.fieldToCompareName]) {
      return new InvalidParamError(this.fieldToCompareName)
    }
    return null
  }
}
