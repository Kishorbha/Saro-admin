import { IsNotEmpty, MinLength } from 'class-validator'

export class ResetPasswordData {
  @MinLength(6, { message: 'validations.short_password' })
  @IsNotEmpty({ message: 'validations.required' })
  password!: string

  @IsNotEmpty({ message: 'validations.required' })
  confirmPassword!: string
}

export class ResetPasswordOTPData {
  @MinLength(4, { message: 'validations.invalid_otp' })
  @IsNotEmpty({ message: 'validations.required' })
  otp!: string
}
