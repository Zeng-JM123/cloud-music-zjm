import React, { useEffect, useState } from 'react'
import { MusicInfo, SheetInfo } from './style'
import service from '../../api/request'
import MusicList from './MusicList'
import Nav from '../../components/nav/index'
import { isEmpty } from '../../utils/index'
import PlayButton from './PlayButton'
import VisiblePlayerBtn from '../../components/visible_player_btn/index'

export default function PlayList(props) {
  const [playList, setPlayList] = useState([])
  const [timeMsg, setTimeMsg] = useState('')
  const [currentSheet, SetCurrentSheet] = useState({})
  const { setCurrentList, changeCurrentSong } = props

  const getPlayList = async () => {
    const reqPath =
      window.sessionStorage.getItem('CURRENT_SHEET_ITEM') &&
      JSON.parse(window.sessionStorage.getItem('CURRENT_SHEET_ITEM')).path
    reqPath &&
      service.get(reqPath).then((res) => {
        // 热歌榜定义了songInfo字段以及timeMsg
        setTimeMsg(res.data.timeMsg)
        res.data.songInfo && setPlayList(res.data.songInfo)

        window.sessionStorage.setItem(
          'PLAY_LIST',
          JSON.stringify(res.data.songInfo)
        )
        window.sessionStorage.setItem('TIME_MSG', res.data.timeMsg)
      })
  }

  const setSheet = () => {
    let cache = window.sessionStorage.getItem('CURRENT_SHEET_ITEM')
    cache && SetCurrentSheet(JSON.parse(cache))
  }

  useEffect(() => {
    setSheet()
    getPlayList()
  }, [])

  // 设置当前播放列表，以及当前播放音乐
  const fnClickPlayAll = () => {
    setCurrentList(playList)
    changeCurrentSong(playList[0])
    // 跳转到播放页面
  }

  return (
    <div>
      <Nav></Nav>
      <MusicInfo picUrl={currentSheet.src}>
        <div className="bg-pic"></div>
        <SheetInfo picUrl={currentSheet.src}>
          <div className="info-pic"></div>
          <div className="sheet-info">"{currentSheet.title}"</div>
        </SheetInfo>

        {/* 排行榜的 */}
        {/* <div className="info-wrapper">
          <h1 className="info-wrapper__title">热歌榜</h1>
          <span className="info-wrapper__detail">{timeMsg}</span>
        </div> */}
      </MusicInfo>
      <PlayButton
        onClick={fnClickPlayAll}
        url={playList && playList[0] && playList[0].url}
      />
      <MusicList
        playList={playList}
        onClick={props.changeCurrentSong}
      ></MusicList>
      <VisiblePlayerBtn />
    </div>
  )
}
