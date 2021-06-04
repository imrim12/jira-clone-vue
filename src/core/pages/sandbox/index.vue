<template>
  <div class="sandboxPageComponent">
    <my-table-simple :data="data" :columns="columns">
      <template slot="header-id">
        <span>ok</span>
      </template>
      <template v-slot:cell-id="{ id }">
        <span>#{{ id }}</span>
      </template>
    </my-table-simple>
  </div>
</template>
<script>
export default {
  name: 'SandboxPage',
  beforeRouteEnter(to, from, next) {
    if (process.env.NODE_ENV === 'development') {
      next()
    } else {
      next({ name: 'dashboard' })
    }
  },
  data() {
    return {
      count: 0,
      isVisible: true,
      hehe: '',
      columns: [
        {
          header: '#',
        },
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
  },
  mounted() {
    setInterval(() => {
      this.count++
    }, 1000)
  },
}
</script>
