import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-settings',
  path: '/projects/:slug/settings',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
})
