const fs = require('fs')
let cheerio = require('cheerio')
module.exports = async (req, response, axios) => {
  let getSongUrl =
    'http://music.163.com/song/media/outer/url?id=' + req.query.id
  const res = await axios.get(getSongUrl, { responseType: 'stream' })
  // 创建文件夹 如果没有的话
  if (!fs.existsSync(`./public/song`)) {
    fs.mkdirSync(`./public/song`)
  }
  //创建写入流
  let songPath = `/public/song/` + req.query.title + '.mp3'
  let ws = fs.createWriteStream('.' + songPath)
  //使用管道流生成文件
  res.data.pipe(ws)
  res.data.on('close', () => {
    console.log('写入成功' + '歌曲名为：' + req.query.title + '.mp3')
    ws.close()
  })
  let picUrl = ''
  let baseUrl = 'https://music.163.com/song?id=' + req.query.id
  let s = await axios.get(baseUrl)
  let $ = cheerio.load(s.data)
  let dom = $(
    '.g-bd4>.g-mn4>.g-mn4c>.g-wrap6>.m-lycifo>.f-cb>.cvrwrap>.u-cover>img'
  )
  dom.each((index, item) => {
    picUrl = $(item).attr('src')
  })

  response.status(200).send({ picUrl: picUrl })
}
