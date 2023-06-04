import type { RouterConfig } from '@nuxt/schema'
import routes from '~/utils/routes'


// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => routes
}
