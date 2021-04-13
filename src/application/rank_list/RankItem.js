import React from 'react'
import { RankItemLi } from './style'
import { Link } from 'react-router-dom'

export default function RankItem(props) {
  const RederItem = () => {
    return (
      props.songInfo &&
      props.songInfo.map((item, i) => {
        return (
          <Link to={item.href} className="rank-item__right__info" key={item.id}>
            <span className="rank-item__right__info__rank">{i + 1}. </span>
            <span className="rank-item__right__info__title">{item.title}</span>
          </Link>
        )
      })
    )
  }
  return (
    <RankItemLi picUrl={props.picUrl} bgColor={props.bgColor}>
      <Link to={'/playlist'}>
        <div className="rank-item__left">
          <div className="rank-item__left__title">{props.title}</div>
          <div className="rank-item__left__img"></div>
        </div>
      </Link>
      <div className="rank-item__right">
        <RederItem></RederItem>
      </div>
    </RankItemLi>
  )
}
