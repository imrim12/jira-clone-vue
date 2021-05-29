
import Vue from 'vue'

import '@/core/styles/css/main.css'
import '@/core/styles/scss/main.scss'

import { MyAvatar } from '@/core/components/theme/avatar'
import { MyAvatarGroup } from '@/core/components/theme/avatar-group'
import { MyBreadcrumb } from '@/core/components/theme/breadcrumb'
import { MyButton } from '@/core/components/theme/button'
import { MyButtonIcon } from '@/core/components/theme/button-icon'
import { MyDraggableList } from '@/core/components/theme/draggable-list'
import { MyDropdown } from '@/core/components/theme/dropdown'
import { MyDropdownItem } from '@/core/components/theme/dropdown-item'
import { MyDropdownButton } from '@/core/components/theme/dropdown-button'
import { MyIcon } from '@/core/components/theme/icon'
import { MyInput } from '@/core/components/theme/input'
import { MyModal } from '@/core/components/theme/modal'
import { MyPopover } from '@/core/components/theme/popover'
import { MyTableSimple } from '@/core/components/theme/table-simple'
import { MyTooltip } from '@/core/components/theme/tooltip'

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
