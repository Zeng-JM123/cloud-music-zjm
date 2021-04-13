const getReqQuery = (data) => {
  const str = data.split('?')[1]
  const obj = {}
  const arr = str.split('&')
  arr.forEach((item) => {
    let key = item.split('=')[0]
    let value = item.split('=')[1]
    obj[key] = value
  })
  return obj
}

module.exports.getReqQuery = getReqQuery
