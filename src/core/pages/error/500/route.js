import { Route } from '@/core/models/Route'

export default new Route({
  name: '500',
  path: '/error',
  component: () => import('./index.vue'),
  meta: {
    layout: 'error',
    auth: false,
  },
})
