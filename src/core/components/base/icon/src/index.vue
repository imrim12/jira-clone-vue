<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyIcon',
  functional: true,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  render: (h, { props }) => h('i', { attrs: { class: `icon-${props.icon}` } }),
})
</script>
