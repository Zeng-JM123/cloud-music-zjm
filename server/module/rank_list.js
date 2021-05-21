const cheerio = require('cheerio')
const { getReqQuery } = require('../utils/index')
module.exports = async (req, response, axios) => {
  let baseUrl = 'https://music.163.com/discover'
  let res = await axios.get(baseUrl)
  let $ = cheerio.load(res.data)
  const resData = []

  // 获取图片链接
  let dom = $('.top>.cver>img')
  dom.each((index, item) => {
    const obj = {
      picUrl: $(item).attr('data-src'),
      title: '',
      songInfo: [],
      href: '',
      path: '',
      src: $(item).attr('data-src'),
    }
    resData.push(obj)
  })

  // 获取榜名
  dom = $('.top>.cver>a')
  dom.each((index, item) => {
    resData[index].title = $(item).attr('title')
    resData[index].href = $(item).attr('href')
    resData[index].id = getReqQuery($(item).attr('href')).id
    resData[index].path = $(item).attr('href')
  })

  // 获取歌曲列表
  dom = $('#top-flag>.blk>dd>ol')
  dom.each((index, item) => {
    let newDom = $(item).find('li > a')
    newDom.each((k, s) => {
      const obj = {
        href: $(s).attr('href'),
        title: $(s).text(),
        id: getReqQuery($(s).attr('href')).id,
      }
      resData[index].songInfo.push(obj)
    })
    resData[index].songInfo = resData[index].songInfo.slice(0, 3)
  })

  response.send(resData)
}
