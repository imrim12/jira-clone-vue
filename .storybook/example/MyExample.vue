<template>
  <div @click="onClick">
    {{ someprop }}
    <span>|</span>
    {{ otherProp }}
  </div>
</template>

<script>
export default {
  name: 'my-example',

  props: {
    someprop: {
      type: String,
      required: true,
    },
    primaryProp: {
      type: Boolean,
      default: false,
    },
    otherProp: {
      type: String,
      default: 'option 1',
      validator: function(value) {
        return ['option 1', 'option 2', 'option 3'].indexOf(value) !== -1
      },
    },
  },

  methods: {
    onClick() {
      this.$emit('onClick', 'something')
    },
  },
}
</script>
