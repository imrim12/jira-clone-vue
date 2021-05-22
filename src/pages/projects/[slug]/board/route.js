import { Route } from '@/core/models/Route'

export default new Route({
  name: 'projects-slug-board',
  path: '/projects/:slug/board',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects-board.title',
    auth: false,
    permissions: ['ALL'],
  },
})
