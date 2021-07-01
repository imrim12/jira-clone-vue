<template>
  <div class="h-14 flex gap-2">
    <MyPopover
      trigger="click"
      placement="bottom-end"
      v-for="item in menu"
      :key="item.label"
      :visible-arrow="false"
    >
      <span
        slot="reference"
        class="flex items-center h-full"
        :class="[$route.name === item.route.name && 'border-b-2 border-dark']"
      >
        <span
          class="flex items-center duration-300 cursor-pointer px-1 py-1 rounded text-gray-800 font-medium hover:bg-gray-100"
        >
          <span class="mr-1"> {{ item.label }} </span>
          <MyIcon class="mt-1" icon="chevron-down" />
        </span>
      </span>
      <component :is="item.component"></component>
    </MyPopover>
    <span class="flex items-center">
      <MyButton type="dark">
        Create
      </MyButton>
    </span>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyNavbarMenu',
  props: {
    title: {
      type: String,
      default: 'Some title here',
    },
  },
  setup() {
    const menu = [
      {
        label: 'Your work',
        route: { name: 'your-work' },
        component: () => import('./MyNavbarMenuYourWork.vue'),
      },
      {
        label: 'Projects',
        route: { name: 'projects' },
        component: () => import('./MyNavbarMenuProjects.vue'),
      },
      {
        label: 'Filters',
        route: { name: 'filters' },
        component: () => import('./MyNavbarMenuFilters.vue'),
      },
      {
        label: 'Dashboards',
        route: { name: 'dashboards' },
        component: () => import('./MyNavbarMenuDashboard.vue'),
      },
      {
        label: 'People',
        route: { name: 'people' },
        component: () => import('./MyNavbarMenuPeople.vue'),
      },
      {
        label: 'Apps',
        route: { name: 'apps' },
        component: () => import('./MyNavbarMenuApps.vue'),
      },
    ]

    return { menu }
  },
})
</script>
