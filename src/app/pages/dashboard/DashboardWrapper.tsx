/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react'
// import {useIntl} from 'react-intl'

import { EnableSidebar, PageTitle } from '../../../_saro/layout/core'

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <EnableSidebar>
      <PageTitle description='You’ve got 24 New Sales' breadcrumbs={[]}>
        {/* {intl.formatMessage({id: 'MENU.DASHBOARD'})} */}
        Hello, Paul
      </PageTitle>
    </EnableSidebar>
  )
}

export { DashboardWrapper }
