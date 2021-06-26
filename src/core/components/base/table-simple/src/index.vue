<script>
// src\core\components\theme\table-simple\src\index.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyTableSimple',
  props: {
    data: {
      type: Array,
      default() {
        return []
      },
    },
    columns: {
      type: Array,
      default() {
        return []
      },
    },
    hasFooter: {
      type: Boolean,
      default: false,
    },
    classHeader: { type: String },
    classBody: { type: String },
    classFooter: { type: String },
    classRow: { type: String },
    classCell: { type: String },
    classHeaderCell: { type: String },
    classBodyCell: { type: String },
    classFooterCell: { type: String },
  },
  render(h) {
    /**
     * @param {*} col
     * @param {"header" | "footer"} slotPrefix
     *
     * @returns {VNode} slot or scopedSlot vnode
     */
    const tableHeaderSlotBlock = (col, slotPrefix) => {
      // If has default header / footer with or without scope
      // For <template v-slot:header="scope">
      return this.$scopedSlots?.[slotPrefix]
        ? this.$scopedSlots?.[slotPrefix]({
            ...col,
          })
        : this.$slots[slotPrefix] ||
          // If not check custom header / footer with or without scope
          // For <template v-slot:header-something="scope">
          this.$scopedSlots?.[`${slotPrefix}-` + col.prop]
        ? this.$scopedSlots?.[`${slotPrefix}-` + col.prop]({
            ...col,
          })
        : // Else
          this.$slots[`${slotPrefix}-` + col.prop] || col.header
    }

    return h('div', { class: 'my-table-simple' }, [
      h('table', { class: 'my-table-simple-inner' }, [
        /* TABLE HEADER */
        h(
          'thead',
          {
            class: 'my-table-simple-header',
            attrs: { class: this.classHeader },
          },
          [
            this.columns?.length
              ? this.columns.map((col, index) =>
                  h(
                    'th',
                    {
                      attrs: {
                        class: this.classHeaderCell,
                        key: 'table-header-' + index,
                      },
                    },
                    [tableHeaderSlotBlock(col, 'header-')]
                  )
                )
              : Object.keys(this.data[0]).map((header, index) =>
                  h(
                    'th',
                    {
                      attrs: {
                        class: this.classHeaderCell,
                        key: 'table-header-' + index,
                      },
                    },
                    [header]
                  )
                ),
          ]
        ),

        /* TABLE BODY */
        h(
          'tbody',
          { class: 'my-table-simple-body', attrs: { class: this.classBody } },
          [
            this.data.map((row, index) =>
              h(
                'tr',
                { attrs: { key: 'table-row-' + index, class: this.classRow } },
                [
                  this.columns.map((col, idx) =>
                    h(
                      'td',
                      {
                        class: 'my-table-simple-cell',
                        attrs: {
                          key: 'table-cell-' + idx,
                          class: this.classCell,
                        },
                      },
                      // If use default slot
                      // For <template v-slot:cell="scope">
                      this.$scopedSlots?.default
                        ? this.$scopedSlots?.default({
                            ...row,
                          })
                        : // If use dynamic cell slot
                        // For <template v-slot:cell-something="scope">
                        this.$scopedSlots?.['cell-' + col.prop]
                        ? this.$scopedSlots?.['cell-' + col.prop]({
                            ...row,
                          })
                        : // Else
                          this.$slots['cell-' + col.prop] || [row[col.prop]]
                    )
                  ),
                ]
              )
            ),
          ]
        ),

        /* TABLE FOOTER */
        this.hasFooter
          ? h(
              'tfoot',
              {
                class: 'my-table-simple-footer',
                attrs: { class: this.classFooter },
              },
              [
                this.columns?.length
                  ? this.columns.map((col, index) =>
                      h(
                        'th',
                        {
                          attrs: {
                            key: 'table-footer-' + index,
                            class: this.classFooterCell,
                          },
                        },
                        [tableHeaderSlotBlock(col, 'footer-')]
                      )
                    )
                  : Object.keys(this.data[0]).map((footer, index) =>
                      h(
                        'th',
                        {
                          attrs: {
                            key: 'table-footer-' + index,
                            class: this.classFooterCell,
                          },
                        },
                        [footer]
                      )
                    ),
              ]
            )
          : null,
      ]),
    ])
  },
})
</script>
