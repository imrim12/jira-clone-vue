<template>
  <div class="sandboxPageComponent">
    <MyIcon icon="code-block"></MyIcon>
    <my-draggable-list :data="data"></my-draggable-list>
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
      hehe: null,
      data: [
        {
          id: 1,
          title: 'To do',
          children: [
            {
              id: 2,
              title: 'sdfsdfsdf',
            },
            {
              id: 3,
              title: 'vcvcv',
            },
            {
              id: 9,
              title: 'sdfdsfcv',
            },
            {
              id: 10,
              title: 'dsf',
            },
          ],
        },
        {
          id: 4,
          title: 'In progress',
          children: [
            {
              id: 5,
              title: 'ghfghdsfsdfgfh',
            },
          ],
        },
        {
          id: 6,
          title: 'Done',
          children: [
            {
              id: 7,
              title: 'fghfghgfh',
            },
            {
              id: 83,
              title: 'nbnvbn',
            },
          ],
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
