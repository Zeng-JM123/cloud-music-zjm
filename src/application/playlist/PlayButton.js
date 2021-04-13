import React from 'react'
import { PlayButtonWrapper } from './style'
import { Link } from 'react-router-dom'

export default function PlayButton(props) {
  const fnClickPlay = () => {
    props.onClick()
  }

  return (
    <PlayButtonWrapper className="play-button" onClick={fnClickPlay}>
      <Link to={props.url || '/song'}>
        <div className="btn-icon">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-bofang"></use>
          </svg>
        </div>
        <span className="detail">播放全部</span>
        <span className="num">(10)</span>
      </Link>
    </PlayButtonWrapper>
  )
}
