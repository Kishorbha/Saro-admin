import { Controller, useForm } from 'react-hook-form'
import { ChangeEvent } from 'react'
import { useIntl } from 'react-intl'

import HeartLockOutlineWhite from '../../../../_badapp/assets/svg/HeartLockOutlineWhite'
import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import DevilHeadOutlineGradient from '../../../../_badapp/assets/svg/DevilHeadOutlineGradient'
import { LoginFormData } from '../validators/LoginFormData'
import MailOutlineWhite from '../../../../_badapp/assets/svg/MailOutlineWhite'
import { GradientButton, Href, Title } from '../../../../_badapp/particals'
import InputField from '../../../../_badapp/particals/content/form/InputField.component'

export function Login() {
  const intl = useIntl()
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: classValidatorResolver(LoginFormData),
    reValidateMode: 'onChange',
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginFormData) => {
    console.log(values)
  }

  return (
    <div className='bg-black'>
      <Title
        src=''
        title={intl.formatMessage({
          id: 'TITLE.LOGIN',
        })}
      />
      <div>
        <div className='flex  flex-col justify-center max-w-lg relative w-full min-h-screen m-auto pt-12 pb-16 px-4 '>
          <picture>
            <DevilHeadOutlineGradient className='w-[180px] mx-auto' />
          </picture>

          <form
            className='flex flex-col gap-y-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='flex flex-col gap-y-3'>
              <Controller
                name='email'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    type='text'
                    errorMsg={error?.message}
                    className='mt-8 w-full'
                    placeholder={intl.formatMessage({
                      id: 'AUTH.INPUT.EMAIL',
                    })}
                    leftElement={<MailOutlineWhite className='w-6 h-6 ' />}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      field.onChange(e.currentTarget.value)
                    }
                  />
                )}
              />
              <Controller
                name='password'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <InputField
                    type={'password'}
                    errorMsg={error?.message}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      field.onChange(e.target.value)
                    }
                    className='mt-6 w-full'
                    placeholder={intl.formatMessage({
                      id: 'AUTH.INPUT.PASSWORD',
                    })}
                    leftElement={<HeartLockOutlineWhite className='w-6 h-6' />}
                  />
                )}
              />

              <Href
                href='/auth/forgot-password'
                className='text-white block w-max text-xs ml-auto  hover:underline'
              >
                {intl.formatMessage({ id: 'AUTH.FORGOT.TITLE' })}
              </Href>
            </div>
            <GradientButton type='submit' variant='filled'>
              {intl.formatMessage({ id: 'AUTH.LOGIN.BUTTON' })}
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
