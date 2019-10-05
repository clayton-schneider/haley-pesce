// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.instagram.com/v1/users/self/media/recent?access_token=1902688513.09500a2.2e02639627734727ba0f482517de8be2&count=8   ')

    const contentType = actions.addContentType({
      typeName: 'instagram'
    })

    for (const item of data.data) {
      contentType.addNode({
        url: item.link,
        lowRes: item.images.low_resolution.url,
        stdRes: item.images.standard_resolution.url
      })
    }
  })
}