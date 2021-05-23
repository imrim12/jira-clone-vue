import { MyIcon } from '@/core/components/theme/icon'

const storyConfig = {
  title: 'UI Components/MyIcon',
  component: MyIcon,
  //👇 Creates specific argTypes
  argTypes: {
    icon: {
      control: false,
    },
  },
}

export default storyConfig

const icons = [
  'add-item',
  'backlog',
  'bell',
  'board',
  'code',
  'codeblock',
  'link',
  'pages',
  'question',
  'roadmap',
  'setting',
]

export const tryAllOptions = (args, { argTypes }) => ({
  components: { MyIcon },
  props: Object.keys(argTypes),
  data() {
    return {
      icons,
    }
  },
  template: `
    <div class="text-center">
      <div v-for="icon in icons" class="inline-block text-gray mx-2 my-2">
        <my-icon v-bind="$props" v-bind:icon="icon" />
      </div>
    </div>
  `,
})
