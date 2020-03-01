// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

async refreshToken => {
  const { response } = await axios.get('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&&access_token=IGQVJWZA09qdkJMNW5pRnlKaDEwZAkRzRDFoQ0ItUWVhM1dnNjZAMb0tHd1dRbkx0Sk9ZALWtCY2lnYVZAzT1VHaGxyUUxzaThpVjcteWhDOGdSbzVYcjMwd0JqYUxvc2thVTdmMTE1X0RR')
}

// refreshToken()

module.exports = function (api) {
  api.loadSource(async actions => {
    const { data } = await axios.get('https://graph.instagram.com/me/media?fields=media_url&access_token=IGQVJWZA09qdkJMNW5pRnlKaDEwZAkRzRDFoQ0ItUWVhM1dnNjZAMb0tHd1dRbkx0Sk9ZALWtCY2lnYVZAzT1VHaGxyUUxzaThpVjcteWhDOGdSbzVYcjMwd0JqYUxvc2thVTdmMTE1X0RR')

    const contentType = actions.addContentType({
      typeName: 'instagram'
    })

    for (const item of data.data) {
      contentType.addNode({
        id: item.id,
        url: item.media_url
      })
    }
  })
}