const { PHASE_PRODUCTION_BUILD } = require('next/constants')
const { withPlugins, optional } = require('next-compose-plugins')
const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withPlugins([
  [
    withTypescript,
    {
      webpack(config, options) {
        // Do not run type checking twice:
        if (options.isServer) {
          config.plugins.push(new ForkTsCheckerWebpackPlugin())
        }

        return config
      }
    }
  ],
  [
    optional(() => require('@zeit/next-bundle-analyzer')),
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
  ],
  [
    optional(() => require('./plugins/next-bundle-size-analyzer')),
    {
      outputDir: '../stats.txt'
    },
    [PHASE_PRODUCTION_BUILD]
  ]
])
