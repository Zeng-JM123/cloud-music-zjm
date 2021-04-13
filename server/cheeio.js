let cheerio = require('cheerio')
let fs = require('fs')
let axios = require('axios')
//存放获取到的歌曲信息
let songs = []
const host = 'http://localhost:8081'

//爬取网易云音乐热歌榜单内容  https://music.163.com/#/discover/toplist?id=3778678
//下面榜单数据id可能会更换、以官网为准
let discover = [
  { title: '飙升榜', id: 19723756 },
  { title: '新歌榜', id: 3779629 },
  { title: '原创榜', id: 2884035 },
  { title: '热歌榜', id: 2900343697 },
]

async function mainF(query, response) {
  const resData = {
    songs: [],
    songInfo: [],
    titlePic: '',
  }
  //爬取热歌榜
  //需要使用查看网页框架中的链接  去掉#符号
  let baseUrl = 'https://music.163.com/discover/toplist?id=' + query.id
  //设置请求头
  //let Header={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.25 Safari/537.36 Core/1.70.3741.400 QQBrowser/10.5.3863.400"}
  let res = await axios.get(baseUrl)
  let $ = cheerio.load(res.data)

  // 获取排行帮上的音乐
  let dom = $('.f-hide>li>a')
  dom.each((index, item) => {
    let obj = {
      title: $(item).text(),
      url: $(item).attr('href'),
      id: $(item).attr('href').replace(/[^\d]/g, ''), //使用正则去掉非数字
    }
    songs.push(obj)
  })

  query.getTime && getUpdateTime($, resData)
  getSongInfo($, resData, songs)

  // 请求下载音乐
  // await getSongs(songs, query.title, resData)
  response.send(resData)
}

const getSongInfo = ($, resData, songs) => {
  let dom = $('#song-list-pre-data')
  const playList = []
  dom.each((index, item) => {
    const infoList = JSON.parse($(item).text())
    for (let i = 0; i < 20; i++) {
      const obj = {
        title: infoList[i].album.name,
        artiset: '',
        picUrl: infoList[i].album.picUrl,
        id: songs[i].id,
        url: songs[i].url,
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
}

const getUpdateTime = ($, resData) => {
  let dom = $('.user>.sep')
  dom.each((index, item) => {
    resData.timeMsg = $(item).text()
  })
}

//根据获取到的歌曲id去请求歌曲资源  然后下载到本地
async function getSongs(data, title, resData) {
  let num = 0
  // http://music.163.com/song/media/outer/url?id=   在线播放音乐的链接
  let getSongsUrl = 'http://music.163.com/song/media/outer/url?id='
  console.log('一共有：' + data.length + '首歌曲')
  //方便调试 只爬10首
  for (let i = 0; i < 10; i++) {
    await axios.get(getSongsUrl + data[i].id, { responseType: 'stream' }).then(
      (success) => {
        // 创建文件夹 如果没有的话
        if (!fs.existsSync(`./public/song`)) {
          fs.mkdirSync(`./public/song`)
        }
        //创建写入流
        let songPath = `/public/song/` + data[i].title + '.mp3'
        let ws = fs.createWriteStream('.' + songPath)
        if (!resData.songs.includes(songPath)) {
          resData.songs.push(host + songPath)
        }
        //使用管道流生成文件
        success.data.pipe(ws)
        //读取流关闭时执行下面操作
        success.data.on('close', () => {
          num++
          console.log(
            '写入成功' + num + '首,歌曲名为：' + data[i].title + '.mp3'
          )
          ws.close()
        })
      },
      (error) => {
        console.log('错误,歌曲名为：' + data[i].title + '.mp3')
      }
    )
  }
}
//调用主函数
// mainF(discover);

module.exports = mainF
