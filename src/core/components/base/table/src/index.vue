<script>
// src\core\components\theme\table\src\index.vue
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyTable',
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
    classHeader: String,
    classBody: String,
    classFooter: String,
    classRow: String,
    classCell: String,
    classHeaderCell: String,
    classBodyCell: String,
    classFooterCell: String,
  },
  render(h) {
    return h('div', { class: 'my-table' }, [
      h('table', { class: 'my-table-inner' }, [
        h(
          'thead',
          {
            class: 'my-table-header',
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
                    [this.$slots['header-' + col.prop] || col.header]
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

        h(
          'tbody',
          { class: 'my-table-body', attrs: { class: this.classBody } },
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
                        class: 'my-table-cell',
                        attrs: {
                          key: 'table-cell-' + idx,
                          class: this.classCell,
                        },
                      },
                      // If use default slot
                      this.$scopedSlots?.default
                        ? this.$scopedSlots?.default({
                            ...row,
                          })
                        : // If use dynamic cell slot
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

        this.hasFooter
          ? h(
              'tfoot',
              {
                class: 'my-table-footer',
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
                        [this.$slots['footer-' + col.prop] || col.header]
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

<style lang="scss">
.my-table {
  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #f0f0f0;
  }
}
</style>
