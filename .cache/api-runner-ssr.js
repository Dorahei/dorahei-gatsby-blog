var plugins = [{
      name: 'gatsby-plugin-gtag',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":"G-HD9GBT5R2C","pluginConfig":{"head":true,"anonymize":true}},
    },{
      name: 'gatsby-plugin-google-adsense',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-google-adsense/gatsby-ssr'),
      options: {"plugins":[],"publisherId":"ca-pub-7971674755780338"},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"DORAHEI LOOSE LIFE | ドラヘイの生活","short_name":"DORAHEI | ドラヘイの生活","start_url":"/","background_color":"#ffffff","theme_color":"#479454","display":"standalone","icon":"src/images/Dorahei_icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"705fa2d7831fe5e391029352bd987437"},
    },{
      name: 'gatsby-plugin-gatsby-cloud',
      plugin: require('D:/Study_prog/gatsby/dorahei-gatsby-blog/node_modules/gatsby-plugin-gatsby-cloud/gatsby-ssr'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
