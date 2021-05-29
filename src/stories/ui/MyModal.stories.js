import { MyModal } from '@/core/components/theme/modal'
import { MyButton } from '@/core/components/theme/button'

const storyConfig = {
  title: 'UI Components/MyModal',
  component: MyModal,
  //👇 Creates specific argTypes
  argTypes: {
    id: {
      control: false,
    },
    title: {
      control: 'text',
    },
    footer: {
      control: 'text',
    },
    fullscreen: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    isVisible: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default storyConfig

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyModal, MyButton },
  data() {
    return {
      isModalVisible: false,
      eventsHandlers: {
        click: 'showModal',
      },
    }
  },
  methods: {
    showModal() {
      this.isModalVisible = true
    },
  },
  template: `
    <div>
      <my-button type="primary" v-on:click="showModal">Show modal</my-button>
      <my-modal v-bind="$props" v-model="isModalVisible">
        My modal
      </my-modal>
    </div>
  `,
})
