let cheerio = require("cheerio");
const imgs = [];
module.exports = async (req, res, axios) => {
  // 爬取网易云主页的轮播图
  const baseUrl = 'https://music.163.com/discover';
  await getCommendBan(baseUrl, axios);
  res.send(imgs);
}

async function getCommendBan(baseUrl, axios){
  const res = await axios.get(baseUrl);
  let $ = cheerio.load(res.data);
  let dom = $('#index-banner>.wrap>.ban>.ban-img>a>img');
  dom.each((index, item) => {
    const src = $(item).attr('src');
    !imgs.includes(src) && imgs.push($(item).attr('src'));
  })
}