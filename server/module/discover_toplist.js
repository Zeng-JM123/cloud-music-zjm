let mainF = require('../cheeio')
const imgs = []
module.exports = async (req, res, axios) => {
  // 爬取热歌榜
  const query = {
    title: 'hot',
    id: 2900343697,
    getTime: true,
  }
  console.log(123123)
  // 1. 下载歌曲，保存下来到一个文件夹中，返回一个数组，包含mp3资源绝对路径
  // 2. 获取描述信息以及图片
  await mainF(query, res)
}
