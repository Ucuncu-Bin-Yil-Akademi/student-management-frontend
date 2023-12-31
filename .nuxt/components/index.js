export { default as Attendance } from '../../components/Attendance.vue'
export { default as Classes } from '../../components/Classes.vue'
export { default as DashboardMain } from '../../components/DashboardMain.vue'
export { default as DashboardPanel } from '../../components/DashboardPanel.vue'
export { default as Instructors } from '../../components/Instructors.vue'
export { default as Login } from '../../components/Login.vue'
export { default as ModalComponent } from '../../components/ModalComponent.vue'
export { default as Students } from '../../components/Students.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
