import { MyButton } from '@/core/components/theme/button'

const storyConfig = {
  title: 'UI Components/MyButton',
  component: MyButton,
  //👇 Creates specific argTypes
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'primary',
          'light',
          'success',
          'danger',
          'warning',
          'info',
          'gray',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
  },
}

export default storyConfig

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<my-button v-bind="$props">My cool button</my-button>`,
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
}

export const Light = Template.bind({})
Light.args = {
  type: 'light',
}

export const Small = Template.bind({})
Small.args = {
  type: 'primary',
  size: 'small',
}

export const Large = Template.bind({})
Large.args = {
  type: 'primary',
  size: 'large',
}
