import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ResetPasswordData } from '../validators/ResetPasswordData'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import InputField from '../../../../_saro/particals/content/form/InputField.component'
import HeartLockOutlineWhite from '../../../../_saro/assets/svg/HeartLockOutlineWhite'
import DevilHeadOutlineGradient from '../../../../_saro/assets/svg/DevilHeadOutlineGradient'
import { GradientButton, Title } from '../../../../_saro/particals'
import { useIntl } from 'react-intl'

export default function ResetPassword() {
  const intl = useIntl()
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
      <Title
        src=''
        title={intl.formatMessage({
          id: 'TITLE.RESET_PASSWORD',
        })}
      />

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
                  placeholder={intl.formatMessage({
                    id: 'AUTH.INPUT.PASSWORD',
                  })}
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
                  placeholder={intl.formatMessage({
                    id: 'AUTH.INPUT.CONFIRM_PASSWORD',
                  })}
                  leftElement={<HeartLockOutlineWhite className='w-6 h-6' />}
                />
              )}
            />
            <GradientButton loading={loading} type='submit' variant='filled'>
              {intl.formatMessage({
                id: 'AUTH.RESET_PASSWORD.BUTTON',
              })}
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
