import React from 'react'
import { MusicInfo, SheetInfo } from './style'
import MusicList from './MusicList'
import Nav from '../../components/nav/index'
import PlayButton from './PlayButton'
import VisiblePlayerBtn from '../../components/visible_player_btn/index'
import usePlayList from './usePlayList'
import { Spin } from 'antd'

export default function PlayList(props) {
  const { playList, fnClickPlayAll, isLoading } = usePlayList(props)
  const { currentSheet } = props

  return (
    <div>
      <Nav></Nav>
      <MusicInfo picUrl={currentSheet.toJS().src}>
        <div className="bg-pic"></div>
        <SheetInfo picUrl={currentSheet.toJS().src}>
          <div className="info-pic"></div>
          <div className="sheet-info">"{currentSheet.toJS().title}"</div>
        </SheetInfo>
      </MusicInfo>
      <Spin tip="Loading…" spinning={isLoading}>
        <PlayButton
          onClick={fnClickPlayAll}
          url={playList && playList[0] && playList[0].url}
        />
        <MusicList
          playList={playList}
          onClick={props.changeCurrentSong}
        ></MusicList>
        <VisiblePlayerBtn />
      </Spin>
    </div>
  )
}
