<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyDropdownItem',
  functional: true,
  render(h, { slots }) {
    // Prevent "Converting circular structure to JSON" error
    return h(
      'div',
      {
        class: { 'my-dropdown-item': true },
      },
      slots().default
    )
  },
})
</script>
