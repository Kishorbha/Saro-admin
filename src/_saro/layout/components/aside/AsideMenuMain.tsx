import HeartBrokenOutlineWhite from '../../../assets/svg/HeartBrokenOutlineWhite'
import HeartBrokenFilledWhite from '../../../assets/svg/HeartBrokenFilledWhite'
import { AsideMenuItemWithSub } from './AsideMenuItemWithSub'
import { useIntl } from 'react-intl'

export default function AsideMenuMain() {
  const intl = useIntl()
  return (
    <div className='flex flex-col gap-y-3'>
      <AsideMenuItemWithSub
        to='/dashboard'
        title={intl.formatMessage({
          id: 'MENU.DASHBOARD',
        })}
        Icon={(props: any) => <HeartBrokenOutlineWhite {...props} />}
        FilledIcon={(props: any) => <HeartBrokenFilledWhite {...props} />}
      />
      <AsideMenuItemWithSub
        to='/sticker'
        title={intl.formatMessage({
          id: 'MENU.STICKER',
        })}
        Icon={(props: any) => <HeartBrokenOutlineWhite {...props} />}
        FilledIcon={(props: any) => <HeartBrokenFilledWhite {...props} />}
      />
    </div>
  )
}
