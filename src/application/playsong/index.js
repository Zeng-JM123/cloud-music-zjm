import React, { useEffect, useRef, useState } from 'react'
import { RotateWrapper, SongBg, PlayerControl } from './style'
import RotateComp from './rotateComp/index'
import Nav from '../../components/nav/index'
import service from '../../api/request'
import { findNextItem, findPreviouItem } from '../../utils/index'

import {
  PlayCircleOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
  RetweetOutlined,
  MenuUnfoldOutlined,
  PauseOutlined,
} from '@ant-design/icons'

export default function SongLayout(props) {
  const {
    currentSong,
    currentPlayList,
    changeCurrentSong,
    playerState,
    updatePlayerState,
  } = props

  // 到这个页面时，通过ip请求MP3资源
  // 然后设置到src当中
  // 返回图片
  const getSong = async (data) => {
    if (data.url) {
      const res = await service.get('/play' + data.url + '&title=' + data.title)
      changeCurrentSong({
        ...data,
        picUrl: res.data.picUrl,
      })
    }
  }

  useEffect(() => {
    getSong(currentSong.toJS())
  }, [currentSong.id])

  const fnClickPlayer = () => {
    updatePlayerState(!playerState)
  }

  const RenderIsPlayBtn = () => {
    if (!playerState) {
      return <PauseOutlined className="icon play" onClick={fnClickPlayer} />
    } else {
      return (
        <PlayCircleOutlined className="icon play" onClick={fnClickPlayer} />
      )
    }
  }

  // 控制播放下一首歌
  const fnToNextSong = () => {
    fnControlPlayer(findNextItem)
  }

  const fnTopreviousSong = () => {
    fnControlPlayer(findPreviouItem)
  }

  const fnControlPlayer = (func) => {
    const target = func(currentPlayList.toJS(), currentSong.toJS())
    changeCurrentSong(target)
    getSong(target)
  }

  return (
    <>
      <Nav title={currentSong.toJS().title}></Nav>
      <RotateWrapper>
        <RotateComp isPlay={playerState} picUrl={currentSong.toJS().picUrl} />
        <PlayerControl className="play-control">
          <div className="process"></div>
          <div className="control-btn">
            <RetweetOutlined className="icon" />
            <StepBackwardOutlined className="icon" onClick={fnTopreviousSong} />
            <RenderIsPlayBtn></RenderIsPlayBtn>
            <StepForwardOutlined className="icon" onClick={fnToNextSong} />
            <MenuUnfoldOutlined className="icon" />
          </div>
        </PlayerControl>
      </RotateWrapper>
      <SongBg picUrl={currentSong.toJS().picUrl}></SongBg>
    </>
  )
}
