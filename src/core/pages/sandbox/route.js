import { Route } from '@/core/models/Route'

export default new Route({
  name: 'sandbox',
  path: '/sandbox',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
  },
})
