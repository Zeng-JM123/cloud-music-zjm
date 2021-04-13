import React, { useEffect, useRef } from 'react'
import service from '../../api/request'
import { connect } from 'react-redux'
import { updatePlayerState } from './store/actionCreator'
import { baseURL } from '../../api/request'
import { isEmpty } from '../../utils/index'

// 组件功能
// 通过react-redux控制
// 1. 负责播放以及暂停
// 2. 加载音频
function Player(props) {
  const audioRef = useRef()
  const { playerState, updatePlayerState, currentSong } = props

  useEffect(() => {
    if (playerState) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [playerState])

  useEffect(() => {
    !isEmpty(currentSong.toJS()) && setAudioSrc(currentSong.toJS())
  }, [currentSong.toJS().id])

  const getSong = async (data) => {
    if (data.url) {
      await service.get('/play' + data.url + '&title=' + data.title)
    }
  }

  const setAudioSrc = async (songInfo) => {
    let audioSrc = `${baseURL}/song/${songInfo.title}.mp3`
    await getSong(songInfo)
    audioRef.current &&
      (audioRef.current.src = audioSrc) &&
      (audioRef.current.autoplay = true)

    // QQ音乐
    // audioRef.current &&
    //   (audioRef.current.src =
    //     'http://ws.stream.qqmusic.qq.com/C400003pHTmt1BBWWu.m4a?guid=537279276&vkey=E0837A622E978E999A536FD0A3DE08DFD0FF437AFF35B3121C45D0479968B3082B35304077B1D079C34ED2C605B0AD1ED1CA6CD30A6A6A81&uin=399702236&fromtag=66')
  }

  return <audio ref={audioRef} className="player" preload="auto"></audio>
}

const mapStateToProps = (state) => ({
  playerState: state.getIn(['playerControl', 'playerState']),
  currentSong: state.getIn(['playState', 'currentSong']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayerState(item) {
      dispatch(updatePlayerState(item))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
