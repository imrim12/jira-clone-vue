import { Route } from '@/core/models/Route'

export default new Route({
  name: 'dashboard',
  path: '/',
  component: () => import('./index.vue'),
  alias: ['/dashboard', '/home'],
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
  options: {
    // hidden: true, // For sidebar
    label: 'Dashboard', // If left empty, it will take the title
    icon: {
      type: 'fa',
      class: 'fas fa-tachometer-alt',
    },
  },
})
