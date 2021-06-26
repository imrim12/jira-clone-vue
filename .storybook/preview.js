
import Vue from 'vue'

import '@/core/styles/css/main.css'
import '@/core/styles/scss/main.scss'

import { MyAvatar } from '@/core/components/base/avatar'
import { MyAvatarGroup } from '@/core/components/base/avatar-group'
import { MyBreadcrumb } from '@/core/components/base/breadcrumb'
import { MyButton } from '@/core/components/base/button'
import { MyButtonIcon } from '@/core/components/base/button-icon'
import { MyDraggableList } from '@/core/components/base/draggable-list'
import { MyDropdown } from '@/core/components/base/dropdown'
import { MyDropdownItem } from '@/core/components/base/dropdown-item'
import { MyDropdownButton } from '@/core/components/base/dropdown-button'
import { MyIcon } from '@/core/components/base/icon'
import { MyImage } from '@/core/components/base/image'
import { MyInput } from '@/core/components/base/input'
import { MyModal } from '@/core/components/base/modal'
import { MyPopover } from '@/core/components/base/popover'
import { MyTableSimple } from '@/core/components/base/table-simple'
import { MyTooltip } from '@/core/components/base/tooltip'

import { utils } from '@/core/utils'

const components = [
  MyAvatar,
  MyAvatarGroup,
  MyBreadcrumb,
  MyButton,
  MyButtonIcon,
  MyDraggableList,
  MyDropdown,
  MyDropdownItem,
  MyDropdownButton,
  MyIcon,
  MyImage,
  MyInput,
  MyModal,
  MyPopover,
  MyTableSimple,
  MyTooltip,
]

components.forEach((component) => {
    Vue.component(component.name, component)
})

Vue.use(utils)

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
