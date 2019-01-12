module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const {
        WebpackBundleSizeAnalyzerPlugin
      } = require('webpack-bundle-size-analyzer')

      config.plugins.push(
        new WebpackBundleSizeAnalyzerPlugin(nextConfig.outputDir || 'stats.txt')
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
