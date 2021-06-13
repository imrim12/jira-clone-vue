import { MyTableSimple } from '@/core/components/theme/table-simple'

const storyConfig = {
  title: 'UI Components/MyTableSimple',
  component: MyTableSimple,
  //👇 Creates specific argTypes
  argTypes: {
    data: {
      control: {
        type: 'array',
      },
    },
    columns: {
      control: {
        type: 'array',
      },
    },
    hasFooter: {
      control: {
        type: 'boolean',
      },
    },
    classHeader: {},
    classBody: {},
    classFooter: {},
    classRow: {},
    classCell: {},
    classHeaderCell: {},
    classBodyCell: {},
    classFooterCell: {},
  },
}

export default storyConfig

export const allOptions = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyTableSimple },
  template: `
  <div class="text-center bg-white p-3" style="width: 320px">
    <my-table-simple v-bind="$props">
      <template slot="header-id">
        <span>ok</span>
      </template>
      <template v-slot:cell-id="{ id }">
        <span>#{{ id }}</span>
      </template>
    </my-table-simple>
  </div>
  `,
})
allOptions.args = {
  columns: [
    {
      header: 'ID',
      prop: 'id',
    },
    {
      header: 'Full name',
      prop: 'name',
    },
    {
      header: 'Address',
      prop: 'address',
    },
  ],
  data: [
    {
      id: 1,
      name: 'ABC',
      address: '123 ABCDEF',
    },
    {
      id: 2,
      name: 'DEF',
      address: '456 DEFGHI',
    },
  ],
}
