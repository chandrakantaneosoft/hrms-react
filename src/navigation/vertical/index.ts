// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: `icon-home-1`
    },
    {
      title: 'RBAC',
      icon: `icon-document`,
      children: [
        {
          title: 'Permanant Role',

          path: '/permanent-role'

          // path: '/second-page'
        },
        {
          title: 'Temporary Role',
          path: '/temporary-role-listing'
        },
        {
          title: 'Additional Duty Role',
          path: '/additional-duty-role-listing'
        }
      ]
    },
    {
      title: 'Setting',
      path: '/setting',
      icon: 'icon-setting-2'
    },
    {
      title: 'Logout',
      icon: 'icon-logout'
    }
  ]
}

export default navigation
