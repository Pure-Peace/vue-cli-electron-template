import apiV1 from './api_v1'
import apiV2 from './api_v2'
import common from './common'

export default {
  apiV1,
  apiV2,
  ...common // Deconstruction
}
