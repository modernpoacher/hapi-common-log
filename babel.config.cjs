const debug = require('debug')

const log = debug('@modernpoacher/hapi-common-log')

const {
  env: {
    NODE_ENV = 'development'
  }
} = process

log('`@modernpoacher/hapi-common-log` is awake')

function env () {
  log({ NODE_ENV })

  return (
    NODE_ENV === 'production'
  )
}

module.exports = (api) => {
  if (api) api.cache.using(env)

  return {
    presets: [
      [
        '@babel/env',
        {
          targets: {
            node: 'current'
          },
          useBuiltIns: 'usage',
          corejs: 3
        }
      ]
    ]
  }
}
