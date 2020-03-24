// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const Instagram = require('./instagram');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const userConfig = {
  username: process.env.USR,
  password: process.env.PASS,
  appId: process.env.APP_ID,
  appSecret: process.env.APP_SECRET,
  redirectURI: process.env.REDIRECT_URI
}

module.exports = function (api) {
  api.loadSource(async actions => {
    const haleyInsta = new Instagram(userConfig);
    const { data } = await haleyInsta.init();

    const contentType = actions.addContentType({
      typeName: 'instagram'
    })

    for (const item of data) {
      contentType.addNode({
        id: item.id,
        url: item.media_url
      })
    }
  })
}