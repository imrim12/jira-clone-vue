<template>
  <div class="text-2xl">
    <MyPopover trigger="click" :visible-arrow="false">
      <MyButton slot="reference" round size="medium" type="light">
        <MyIcon icon="app-list" />
      </MyButton>
      <div class="w-96 px-2 py-5">
        <div v-if="title" class="font-medium text-lg mb-5 px-2">
          {{ title }}
        </div>
        <template v-for="(group, index) in data">
          <div
            v-if="group.groupName"
            :key="`${group.groupName}-${index}`"
            class="text-xs text-gray px-3 py-1 font-medium uppercase mt-5"
          >
            Some group something
          </div>
          <template v-for="(item, idx) in group.children">
            <router-link :to="item.url" :key="`${item.title}-${index}-${idx}`">
              <div
                class="w-full h-12 flex items-center hover:bg-gray-100 cursor-pointer px-2 py-2 rounded"
              >
                <MyImage
                  class="rounded-xl shadow-lg"
                  width="35"
                  height="35"
                  :src="item.logo"
                />
                <div v-if="item.title && item.subTitle" class="pl-3">
                  <div v-if="item.title" class="text-sm">
                    {{ item.title }}
                  </div>
                  <div v-if="item.subTitle" class="text-xs text-gray">
                    {{ item.subTitle }}
                  </div>
                </div>
              </div>
            </router-link>
          </template>
        </template>
      </div>
    </MyPopover>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'MyNavbarAppList',
  props: {
    title: {
      type: String,
      default: 'Some title here',
    },
    data: {
      type: Array,
      default() {
        return [
          {
            children: [
              {
                logo: 'https://picsum.photos/seed/picsum/300/200',
                title: 'Something something',
                url: '',
              },
            ],
          },
          {
            groupName: 'Discover',
            children: [
              {
                logo: 'https://picsum.photos/seed/picsum/300/200',
                title: 'Something something',
                subTitle: 'Some subtitle',
                url: '',
              },
            ],
          },
          {
            groupName: 'More',
            children: [
              {
                logo: 'https://picsum.photos/seed/otherSeed/300/200',
                title: 'Something something',
                url: '',
              },
              {
                logo: 'https://picsum.photos/seed/anotherSeed/300/200',
                title: 'Something something',
                subTitle: 'Some subtitle',
                url: '',
              },
            ],
          },
        ]
      },
    },
  },
  setup() {
    //
  },
})
</script>
