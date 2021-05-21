import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-roadmap',
  path: '/projects/:slug/roadmap',
  component: () => import('./index.vue'),
  meta: {
    auth: false,
    permissions: ['ALL'],
  },
})
