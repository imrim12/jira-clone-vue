import { MyAvatar } from './avatar'
import { MyAvatarGroup } from './avatar-group'
import { MyBreadcrumb } from './breadcrumb'
import { MyButton } from './button'
import { MyButtonIcon } from './button-icon'
import { MyDraggableList } from './draggable-list'
import { MyDropdown } from './dropdown'
import { MyDropdownButton } from './dropdown-button'
import { MyInput } from './input'
import { MyModal } from './modal'
import { MyPopover } from './popover'
import { MyTableSimple } from './table-simple'
import { MyTooltip } from './tooltip'

const components = [
  MyAvatar,
  MyAvatarGroup,
  MyBreadcrumb,
  MyButton,
  MyButtonIcon,
  MyDraggableList,
  MyDropdown,
  MyDropdownButton,
  MyInput,
  MyModal,
  MyPopover,
  MyTableSimple,
  MyTooltip,
]

// Use in main.js with Vue.use to register all components globally
export default {
  install(app) {
    components.forEach((component) => {
      app.component(component.name, component)
    })
  },
}

// Or import from @theme what you need
export {
  MyAvatar,
  MyAvatarGroup,
  MyBreadcrumb,
  MyButton,
  MyButtonIcon,
  MyDraggableList,
  MyDropdown,
  MyDropdownButton,
  MyInput,
  MyModal,
  MyPopover,
  MyTableSimple,
  MyTooltip,
}
