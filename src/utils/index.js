export const isEmpty = (data) => {
  const type = typeof data
  if (type === 'string') {
    return data !== '' && data !== 'undefined' && data !== 'null'
  }
  if (type === 'object') {
    if (Array.isArray(data)) {
      return data.length === 0
    } else {
      return JSON.stringify(data) === '{}'
    }
  }
}

// 根据id去找到数组的下一位
export const findNextItem = (arr, item) => {
  let key
  for (let i = 0; i < arr.length; i++) {
    if (item.id === arr[i].id) {
      key = i
    }
  }
  if (key < arr.length - 1) {
    return arr[key + 1]
  } else {
    return arr[0]
  }
}

export const findPreviouItem = (arr, item) => {
  let key
  for (let i = 0; i < arr.length; i++) {
    if (item.id === arr[i].id) {
      key = i
    }
  }
  if (key === 0) {
    return arr[arr.length - 1]
  } else {
    return arr[key - 1]
  }
}
