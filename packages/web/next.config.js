const withTypescript = require('@zeit/next-typescript')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD
} = require('next/constants')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([
  [
    withTypescript,
    {
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer)
          config.plugins.push(new ForkTsCheckerWebpackPlugin())

        return config
      }
    }
  ],
  [
    withBundleAnalyzer,
    {
      analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: 'static',
          reportFilename: '../bundles/server.html'
        },
        browser: {
          analyzerMode: 'static',
          reportFilename: '../bundles/client.html'
        }
      }
    },
    [PHASE_PRODUCTION_BUILD]
  ]
])
