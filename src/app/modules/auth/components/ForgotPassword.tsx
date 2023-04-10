import { useState } from 'react'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Controller, useForm } from 'react-hook-form'
import InputField from '../../../../_badapp/particals/content/form/InputField.component'
import MailOutlineWhite from '../../../../_badapp/assets/svg/MailOutlineWhite'
import { ForgotPasswordFormData } from '../validators/ForgotPasswordData'
import DevilHeadOutlineGradient from '../../../../_badapp/assets/svg/DevilHeadOutlineGradient'
import { GradientButton } from '../../../../_badapp/particals'
import Title from '../../../../_badapp/particals/content/Title'

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)

  const { control, handleSubmit } = useForm<ForgotPasswordFormData>({
    resolver: classValidatorResolver(ForgotPasswordFormData),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (values: ForgotPasswordFormData) => {
    setLoading(true)
    console.log(values)
  }

  return (
    <div className='bg-black'>
      <Title src='' title='Badapp | Forgot-password' />
      <div>
        <div className='flex  flex-col justify-center max-w-lg relative w-full min-h-screen m-auto pt-12 pb-16 px-4 '>
          <picture>
            <DevilHeadOutlineGradient className='w-[180px] mx-auto' />
          </picture>
          <form
            className='flex flex-col gap-y-6'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name='email'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  type='text'
                  errorMsg={error?.message}
                  onChange={(e) => field.onChange(e.currentTarget.value)}
                  className='mt-8 w-full '
                  placeholder={'Email'}
                  leftElement={<MailOutlineWhite className='w-6 h-6' />}
                />
              )}
            />
            <GradientButton loading={loading} type='submit' variant='filled'>
              Send OTP
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
