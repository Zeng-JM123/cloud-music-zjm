import React from 'react'
import { List } from './style'
import { Link } from 'react-router-dom'
import { PlayCircleOutlined } from '@ant-design/icons'

export default function MusicList(props) {
  const setCurrntSong = (item) => {
    window.sessionStorage.setItem('CURRENT_PLAYER', JSON.stringify(item))
    props.onClick(item)
  }
  return (
    <List>
      {props.playList.map((item, i) => {
        return (
          <Link key={item.id + i} to={'/song/' + item.id}>
            <li className="list-item" onClick={() => setCurrntSong(item)}>
              <div className="list-item__rank">{i + 1}</div>
              <div className="list-item__detail">
                <p className="list-item__detail__title">{item.title}</p>
                <p className="list-item__detail__artiset">{item.artiset}</p>
              </div>
              <div className="list-item__mv">
                <PlayCircleOutlined />
              </div>
            </li>
          </Link>
        )
      })}
    </List>
  )
}
