import { MyImage } from '@/core/components/base/image'

const storyConfig = {
  title: 'UI Components/MyImage',
  component: MyImage,
  //👇 Creates specific argTypes
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
    fit: {
      control: {
        type: 'select',
        options: ['cover', 'contain', 'fill', 'scale-down', 'none'],
      },
    },
  },
}

export default storyConfig

export const allObjectFits = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyImage },
  data() {
    return {
      objectFitOptions: argTypes.fit.control.options,
    }
  },
  template: `
  <div class="text-center">
    <my-image
      style="margin-right: 1rem; background-color: gray;"
      v-for="fit in objectFitOptions"
      v-bind="$props"
      v-bind:fit="fit"
      v-bind:title="fit"
    >
    </my-image>
  </div>
  `,
})
allObjectFits.args = {
  src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
  width: 200,
  height: 200,
}

export const tryAllOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyImage },
  template: `
  <div class="text-center">
    <my-image v-bind="$props" style="background-color: gray;"></my-image>
  </div>
  `,
})
tryAllOptions.args = {
  src: 'https://nguyenhuunguyeny.com/img/me/1.jpg',
  width: 200,
  height: 200,
}
