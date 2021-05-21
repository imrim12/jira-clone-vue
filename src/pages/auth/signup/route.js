import { Route } from '@/core/models/Route'

export default new Route({
  name: 'auth-signup',
  path: '/auth/signup',
  component: () => import('./index.vue'),
  meta: {
    authNotRequired: true,
  },
})
