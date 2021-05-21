let cheerio = require('cheerio')
module.exports = async (req, response, axios) => {
  // 爬取排行榜
  let baseUrl = 'https://music.163.com' + req.originalUrl
  let res = await axios.get(baseUrl)
  let $ = cheerio.load(res.data)

  let dom = $('#song-list-pre-data')
  const resData = {
    songInfo: [],
  }
  dom.each((index, item) => {
    const infoList = JSON.parse($(item).text())
    for (let i = 0; i < 20; i++) {
      const obj = {
        title: infoList[i].album.name,
        artiset: '',
        picUrl: infoList[i].album.picUrl,
        id: infoList[i].id,
        url: '/song?id=' + infoList[i].id,
      }
      let artists = ''
      if (infoList[i] && infoList[i].artists) {
        infoList[i].artists.forEach((item, i) => {
          i !== 0 && (artists += '/' + item.name)
        })
      }
      obj.artiset = artists
      resData.songInfo.push(obj)
    }
  })
  response.send(resData)
}
