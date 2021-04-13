const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const axios = require('axios')
app.use(express.static(path.join(__dirname, 'public')))

// CORS
app.use((req, res, next) => {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.set({
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
      'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Range': 'bytes 0-1243200/1243300',
    })
  }
  req.method === 'OPTIONS' ? res.status(204).end() : next()
})

// 尝试爬取qq音乐
// 004Cosxp2ZLOlH
// 002GwAma2DGN2x
// axios
//   .get(
//     'https://u.y.qq.com/cgi-bin/musics.fcg?-=getplaysongvkey010746123959877618&g_tk=1275057331&sign=zzaq45rvksaxi8ec717d1164c8061c030012c9ed0e6884&loginUin=399702236&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0&data=%7B%22req_0%22%3A%7B%22module%22%3A%22vkey.GetVkeyServer%22%2C%22method%22%3A%22CgiGetVkey%22%2C%22param%22%3A%7B%22guid%22%3A%22537279276%22%2C%22songmid%22%3A%5B%22004bvr5r45DXAq%22%5D%2C%22songtype%22%3A%5B0%5D%2C%22uin%22%3A%22399702236%22%2C%22loginflag%22%3A1%2C%22platform%22%3A%2220%22%7D%7D%2C%22comm%22%3A%7B%22uin%22%3A399702236%2C%22format%22%3A%22json%22%2C%22ct%22%3A24%2C%22cv%22%3A0%7D%7D'
//   )
//   .then((res) => {
//     console.log(res.data)
//   })

// body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

fs.readdirSync(path.join(__dirname, 'module')).forEach((file) => {
  const route = '/' + file.replace(/\.js$/i, '').replace(/_/g, '/')
  const controller = require(path.join(__dirname, 'module', file))
  app.use(route, (req, res) => {
    controller(req, res, axios)
  })
})

app.listen(8081, () => console.log('this port is listening'))
