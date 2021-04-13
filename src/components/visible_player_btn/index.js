import React, { useEffect } from 'react'
import { PlayerBtn } from './style'
import { connect } from 'react-redux'
import { updatePlayerState } from '../../components/player/store/actionCreator'
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons'
import { changeCurrentSong } from '../../application/playlist/store/actionCreator'
import { isEmpty } from '../../utils/index'
import { Link } from 'react-router-dom'

function VisiblePlayerBtn(props) {
  const { currentSong, playerState, updatePlayerState } = props
  // 功能
  // 1. 控制播放暂停
  // 2. 图片旋转
  // 3. 查看歌单

  const RenderBtn = () => {
    if (playerState) {
      return <PauseCircleOutlined onClick={fnClickPlayer} />
    } else {
      return <PlayCircleOutlined onClick={fnClickPlayer} />
    }
  }

  const fnClickPlayer = () => {
    console.log(currentSong.toJS())
    updatePlayerState(!playerState)
  }

  // useEffect(() => {
  //   console.log(currentSong.toJS(), 123)
  // }, [])

  const RenderPlayerBtn = () => {
    if (isEmpty(currentSong.toJS())) {
      return <></>
    } else {
      return (
        <PlayerBtn picUrl={currentSong.toJS().picUrl}>
          <Link className="to-player" to={currentSong.toJS().url}>
            <div className="player-img"></div>
            <div className="title">{currentSong.toJS().title}</div>
          </Link>
          <RenderBtn />
        </PlayerBtn>
      )
    }
  }

  return <RenderPlayerBtn />
}

const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(['playState', 'currentSong']),
    currentPlayList: state.getIn(['playState', 'currentPlayList']),
    playerState: state.getIn(['playerControl', 'playerState']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong(item) {
      dispatch(changeCurrentSong(item))
    },
    updatePlayerState(item) {
      dispatch(updatePlayerState(item))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisiblePlayerBtn)
