import backlog from './backlog/route'
import board from './board/route'
import pages from './pages/route'
import roadmap from './roadmap/route'
import settings from './settings/route'
import { Route } from '@/core/models/Route'

// This page is not belong (children) to the product listing
// page, this is just good folder organizing
export default new Route({
  name: 'projects-slug',
  path: '/projects/:slug',
  redirect: '/projects/:slug/board',
  component: () => import('./index.vue'),
  meta: {
    title: 'projects.title',
    auth: false,
    permissions: ['ALL'],
  },
  children: [backlog, board, pages, roadmap, settings],
})
