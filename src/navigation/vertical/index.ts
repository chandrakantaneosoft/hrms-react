// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'mdi:home-outline'
    },
    {
      title: 'RBAC',
      icon: 'mdi:list-box',
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
      icon: 'mdi:cog'
    },
    {
      title: 'Logout',
      icon: 'mdi:logout'
    }
  ]
}

export default navigation
