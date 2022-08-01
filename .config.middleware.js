const {
  container: { ModuleFederationPlugin },
} = require('webpack')
const { imported, exported } = require('./.MF.module.js')
const { name, dependencies } = require('./package.json')
const {
  v5: { overrideConfig },
} = require('@npm.piece/cra-update')

const addPlugins = config => {
  config.plugins.unshift(
    new ModuleFederationPlugin({
      name,
      filename: 'remoteEntry.js',
      exposes: exported,
      remotes: imported,
      shared: {
        ...dependencies,
        // react: {
        //   singleton: true,
        //   version: dependencies['react'],
        // },
        // 'react-dom': {
        //   singleton: true,
        //   version: dependencies['react-dom'],
        // },
        // 'react-router-dom': {
        //   singleton: true,
        //   version: dependencies['react-router-dom'],
        // },
        // 'react-redux': {
        //   singleton: true,
        //   version: dependencies['react-router-dom'],
        // },
      },
    })
  )
  return config
}

const overrideSplitChunksName = config => ({
  ...config,
  optimization: {
    ...config.optimization,
    splitChunks: {
      ...config.optimization.splitChunks,
      name: false,
    },
  },
})

module.exports = [
  config => {
    console.log(process.env.NODE_ENV)
    const mode = process.env.NODE_ENV || 'development'
    // const publicPath = `//${process.env.HOST}:${process.env.PORT}/`

    config.mode = mode
    // config.output.publicPath = publicPath
    return overrideConfig(config, addPlugins)
  },
]