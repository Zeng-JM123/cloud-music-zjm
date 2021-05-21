import { useState, useEffect } from 'react'
import service from '../../api/request'

export default function usePlayList(props) {
  const [playList, setPlayList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { setCurrentList, changeCurrentSong, currentSheet } = props
  const getPlayList = async () => {
    const reqPath = currentSheet.toJS().path
    reqPath &&
      service.get(reqPath).then((res) => {
        setIsLoading(false)
        res.data.songInfo && setPlayList(res.data.songInfo)
        window.sessionStorage.setItem(
          'PLAY_LIST',
          JSON.stringify(res.data.songInfo)
        )
      })
  }

  useEffect(() => {
    getPlayList()
  }, [])

  // 设置当前播放列表，以及当前播放音乐
  const fnClickPlayAll = () => {
    setCurrentList(playList)
    changeCurrentSong(playList[0])
    // 跳转到播放页面
  }

  return {
    playList,
    fnClickPlayAll,
    isLoading,
  }
}
