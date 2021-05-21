import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-pages',
  path: '/projects/:slug/pages',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
})
