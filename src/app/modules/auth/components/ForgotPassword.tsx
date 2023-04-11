import { useState } from 'react'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { Controller, useForm } from 'react-hook-form'
import InputField from '../../../../_badapp/particals/content/form/InputField.component'
import MailOutlineWhite from '../../../../_badapp/assets/svg/MailOutlineWhite'
import { ForgotPasswordFormData } from '../validators/ForgotPasswordData'
import DevilHeadOutlineGradient from '../../../../_badapp/assets/svg/DevilHeadOutlineGradient'
import { GradientButton, Title } from '../../../../_badapp/particals'
import { useIntl } from 'react-intl'

export function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const intl = useIntl()

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
      <Title
        src=''
        title={intl.formatMessage({
          id: 'TITLE.FORGOT_PASSWORD',
        })}
      />
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
                  placeholder={intl.formatMessage({
                    id: 'AUTH.INPUT.EMAIL',
                  })}
                  leftElement={<MailOutlineWhite className='w-6 h-6' />}
                />
              )}
            />
            <GradientButton loading={loading} type='submit' variant='filled'>
              {intl.formatMessage({
                id: 'AUTH.SENDOTP.BUTTON',
              })}
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
