import { MyButton } from '@/core/components/base/button'
import { types as typeList } from '../assets/typeList'

const storyConfig = {
  title: 'UI Components/MyButton',
  component: MyButton,
  //👇 Creates specific argTypes
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: typeList,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini'],
      },
    },
    square: {
      control: {
        type: 'boolean',
      },
    },
    round: {
      control: {
        type: 'boolean',
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
      <div v-for="type in typeList">
        <my-button v-bind="$props" v-bind:type="type">
          My cool {{ type }} button
        </my-button>
        <div class="my-3" />
      </div>
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

export const round = () => ({
  components: { MyButton },
  template: `
    <div class="text-center">
      <my-button type="primary" size="large" round>OK</my-button>
      <div class="my-3" />
    </div>
  `,
})

export const square = () => ({
  components: { MyButton },
  template: `
    <div class="text-center">
      <my-button type="primary" size="large" square>OK</my-button>
      <div class="my-3" />
    </div>
  `,
})
