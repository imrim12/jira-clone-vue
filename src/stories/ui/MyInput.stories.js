import { MyInput } from '@/core/components/base/input'
import { email } from '@/core/constants/validation/regex'

const storyConfig = {
  title: 'UI Components/MyInput',
  component: MyInput,
  //👇 Creates specific argTypes
  argTypes: {
    prefix: {
      control: {
        type: 'text',
      },
    },
    postfix: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    widthFocus: {
      control: {
        type: 'number',
      },
    },
    validate: {
      control: {
        type: 'object',
      },
    },
  },
}

export default storyConfig

export const allOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyInput },
  template: `
  <div class="text-center">
    <form>
      <my-input v-bind="$props"></my-input>
    </form>
  </div>
  `,
})
allOptions.args = {
  prefix: 'search',
  width: 180,
  widthFocus: 220,
  type: 'text',
  validate: {
    pattern: email,
    message: 'Invalid email format',
  },
}
