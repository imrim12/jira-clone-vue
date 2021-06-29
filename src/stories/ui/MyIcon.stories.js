import { MyIcon } from '@/core/components/base/icon'
import { icons } from '../assets/iconList.js'

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
      <div v-for="icon in icons" class="inline-block text-gray mx-2 my-2" :title="icon">
        <my-icon v-bind:icon="icon" />
      </div>
    </div>
  `,
})
