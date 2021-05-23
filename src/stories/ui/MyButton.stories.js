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

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template: `<my-button v-bind="$props">My cool button</my-button>`,
})

export const types = () => ({
  components: { MyButton },
  template: `
    <div class="text-center">
      <my-button type="primary">My cool primary button</my-button>
      <div class="my-3" />
      <my-button type="light">My cool light button</my-button>
      <div class="my-3" />
      <my-button type="success">My cool success button</my-button>
      <div class="my-3" />
      <my-button type="danger">My cool danger button</my-button>
      <div class="my-3" />
      <my-button type="warning">My cool warning button</my-button>
      <div class="my-3" />
      <my-button type="info">My cool info button</my-button>
      <div class="my-3" />
      <my-button type="gray">My cool gray button</my-button>
    </div>
  `,
})

export const sizes = () => ({
  components: { MyButton },
  template: `
    <div class="text-center">
      <my-button type="primary" size="large">My cool large button</my-button>
      <div class="my-3" />
      <my-button type="primary" size="medium">My cool medium button</my-button>
      <div class="my-3" />
      <my-button type="primary" size="small">My cool small button</my-button>
      <div class="my-3" />
      <my-button type="primary" size="mini">My cool mini button</my-button>
    </div>
  `,
})
