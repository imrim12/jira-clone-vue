import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-backlog',
  path: '/projects/:slug/backlog',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
})
