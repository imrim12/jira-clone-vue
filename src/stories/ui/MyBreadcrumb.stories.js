import { MyBreadcrumb } from '@/core/components/theme/breadcrumb'

const storyConfig = {
  title: 'UI Components/MyBreadcrumb',
  component: MyBreadcrumb,
  //👇 Creates specific argTypes
  argTypes: {
    data: {
      control: {
        type: 'array',
      },
    },
  },
}

export default storyConfig

export const allOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyBreadcrumb },
  template: `
  <div class="text-center">
    <my-breadcrumb v-bind="$props"></my-breadcrumb>
  </div>
  `,
})
allOptions.args = {
  data: [
    {
      label: 'Home',
      route: { path: '/' },
    },
    {
      label: 'Projects',
      route: { path: '/projects' },
    },
    {
      label: 'PR-123',
      route: { path: '/projects/pr-123' },
    },
  ],
}
