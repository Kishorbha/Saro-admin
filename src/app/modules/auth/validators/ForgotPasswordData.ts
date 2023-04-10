import { IsEmail, IsNotEmpty } from 'class-validator'

export class ForgotPasswordFormData {
  @IsEmail({}, { message: 'Invalid email' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string
}
