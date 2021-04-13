let cheerio = require('cheerio')
let { getReqQuery } = require('../utils/index')
module.exports = async (req, response, axios) => {
  const resData = {
    songInfo: [],
  }
  let baseUrl = 'https://music.163.com' + req.originalUrl
  let res = await axios.get(baseUrl)
  let $ = cheerio.load(res.data)
  let dom = $('.f-hide>li>a')
  dom.each((index, item) => {
    const obj = {
      title: $(item).text(),
      id: getReqQuery($(item).attr('href')).id,
      artiset: '',
      url: $(item).attr('href'),
      picUrl: '',
    }
    resData.songInfo.push(obj)
  })
  response.send(resData)
}
