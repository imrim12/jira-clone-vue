export class Route {
  required = ['name', 'path', 'component']
  /**
   * If the options property is not specify, route won't be displayed in
   * sidebar
   *
   * @param {{
   *  name: string,
   *  path: string,
   *  redirect?: string,
   *  alias?: string[],
   *  component: any,
   *  meta: {
   *    authNotRequired?: boolean,
   *    auth?: boolean,
   *    permissions?: string[]
   *  },
   *  options?: {
   *    label: string,
   *    icon: {
   *      type: string,
   *      class: string,
   *    }
   * }
   *  children?: Route[]
   * }} options
   * @returns
   */
  constructor(options) {
    this.name = options.name
    this.path = options.path
    this.redirect = options.redirect
    // aliases is not iterable
    if (options.alias) {
      this.alias = options.alias
    }
    this.component = options.component
    this.meta = options.meta
    this.options = options.options
    this.children = options.children
    this.checkRequiredProperties()
  }

  checkRequiredProperties() {
    this.required.forEach((key) => {
      if (!this[key])
        console.warn(
          `Invalid Route "${key}" property in: `,
          this,
          `Receiving ${this[key]}`
        )
    })
  }
}
