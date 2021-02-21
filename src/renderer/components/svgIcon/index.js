const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('svg', true, /\.svg$/)
requireAll(req)

export default {
  ...req.keys().map(filePath =>
    filePath
      .split('/')
      .slice(-1)[0]
      .replace('.svg', '')
  )
}
