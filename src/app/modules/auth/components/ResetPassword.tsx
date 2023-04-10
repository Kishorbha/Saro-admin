import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ResetPasswordData } from '../validators/ResetPasswordData'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import InputField from '../../../../_badapp/particals/content/form/InputField.component'
import HeartLockOutlineWhite from '../../../../_badapp/assets/svg/HeartLockOutlineWhite'
import DevilHeadOutlineGradient from '../../../../_badapp/assets/svg/DevilHeadOutlineGradient'
import { GradientButton } from '../../../../_badapp/particals'

export default function ResetPassword() {
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit } = useForm<ResetPasswordData>({
    resolver: classValidatorResolver(ResetPasswordData),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (values: ResetPasswordData) => {
    setLoading(true)
    console.log(values)
  }

  return (
    <div className='bg-black'>
      <div>
        <div className='flex  flex-col justify-center max-w-lg relative w-full min-h-screen m-auto pt-12 pb-16 px-4 '>
          <picture>
            <DevilHeadOutlineGradient className='w-[180px] mx-auto' />
          </picture>
          <form
            className='flex flex-col gap-y-5'
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name='password'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  type={'password'}
                  errorMsg={error?.message}
                  onChange={(e) => field.onChange(e.currentTarget.value)}
                  className='mt-6 w-full'
                  placeholder={'Password'}
                  leftElement={<HeartLockOutlineWhite className='w-6 h-6' />}
                />
              )}
            />
            <Controller
              name='confirmPassword'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <InputField
                  type={'password'}
                  errorMsg={error?.message}
                  onChange={(e) => field.onChange(e.currentTarget.value)}
                  className='mt-6 w-full'
                  placeholder={'Confirm Password'}
                  leftElement={<HeartLockOutlineWhite className='w-6 h-6' />}
                />
              )}
            />
            <GradientButton loading={loading} type='submit' variant='filled'>
              RESET PASSWORD
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
