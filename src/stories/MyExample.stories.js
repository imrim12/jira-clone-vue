import MyExample from './MyExample.vue'

export default {
  title: 'Example/MyExample',
  component: MyExample,
  argTypes: {
    otherProp: {
      control: {
        type: 'select',
        options: ['option 1', 'option 2', 'option 3'],
      },
    },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyExample },
  template: '<my-example @onClick="onClick" v-bind="$props" />',
})

export const Option1 = Template.bind({})
Option1.args = {
  someprop: 'Something',
  otherProp: 'option 1',
}

export const Option2 = Template.bind({})
Option2.args = {
  someprop: 'Something else',
  otherProp: 'option 2',
}

export const Option3 = Template.bind({})
Option3.args = {
  someprop: 'Something else else',
  otherProp: 'option 3',
}
