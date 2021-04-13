let cheerio = require('cheerio')

module.exports = async (req, response, axios) => {
  // 爬取歌单列表
  const query = {
    title: 'sheet_list',
  }
  const resData = []
  let baseUrl = 'https://music.163.com/discover'
  let res = await axios.get(baseUrl)
  let $ = cheerio.load(res.data)
  let dom = $('.m-cvrlst>li>div>img')
  dom.each((index, item) => {
    const obj = {
      src: $(item).attr('src'),
      title: '',
      id: null,
      path: '',
    }
    resData.push(obj)
  })
  dom = $('.m-cvrlst>li>div>a')
  dom.each((index, item) => {
    resData[index].title = $(item).attr('title')
    resData[index].id = $(item).attr('data-res-id')
    resData[index].path = '/playlist?id=' + $(item).attr('data-res-id')
  })
  response.send(resData)
}
