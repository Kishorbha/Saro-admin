import { classValidatorResolver } from '@hookform/resolvers/class-validator'
import { ResetPasswordOTPData } from '../validators/ResetPasswordData'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { CodeInput, GradientButton, Title } from '../../../../_saro/particals'
import Countdown from 'react-countdown'
import DevilHeadOutlineGradient from '../../../../_saro/assets/svg/DevilHeadOutlineGradient'
import { useIntl } from 'react-intl'

export default function VerityOtp() {
  const [loading, setLoading] = useState(false)
  const { control, handleSubmit } = useForm<ResetPasswordOTPData>({
    resolver: classValidatorResolver(ResetPasswordOTPData),
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      otp: '',
    },
  })
  const time = Date.now()
  const intl = useIntl()

  const onSubmit = (values: ResetPasswordOTPData) => {
    setLoading(true)
    console.log(values)
  }

  return (
    <div className='bg-black'>
      <Title
        src=''
        title={intl.formatMessage({
          id: 'TITLE.VERIFY_OTP',
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
              name='otp'
              control={control}
              render={({ field, fieldState: { error } }) => (
                <CodeInput value={field.value} onChange={field.onChange} />
              )}
            />
            <div className='flex justify-center'>
              <Countdown
                date={time}
                renderer={(props) =>
                  props.completed ? (
                    <button
                      onClick={() => {
                        console.log('resend')
                      }}
                      disabled={loading}
                      className='text-white text-sm font-bold hover:bg-gray-800 px-4 py-2 '
                    >
                      {intl.formatMessage({
                        id: 'AUTH.GENERAL.RESEND_OTP',
                      })}
                    </button>
                  ) : (
                    <span className='text-md font-bold px-4 py-2 border border-gray-800 text-white'>
                      {props.seconds}
                    </span>
                  )
                }
              ></Countdown>
            </div>

            <GradientButton loading={loading} type='submit' variant='filled'>
              {intl.formatMessage({
                id: 'AUTH.GENERAL.VERIFY_OTP',
              })}
            </GradientButton>
          </form>
        </div>
      </div>
    </div>
  )
}
