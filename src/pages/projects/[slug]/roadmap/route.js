import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-roadmap',
  path: '/projects/:slug/roadmap',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects-roadmap.title',
    auth: false,
    permissions: ['ALL'],
  },
})
