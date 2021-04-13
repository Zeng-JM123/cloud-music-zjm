import React from 'react'
import { NavWrapper } from './style'
import { LeftOutlined, SearchOutlined, MoreOutlined } from '@ant-design/icons'

export default function Nav(props) {
  const fnHancleBack = () => {
    // 如果是播放页面，直接返回列表页
    // 如果是列表页，则直接返回首页
    window.history.back()
  }

  // 只有在播放页面有title
  const Title = () => {
    if (props.title) {
      return <div className="title">{props.title}</div>
    } else {
      return <div className="title"></div>
    }
  }

  return (
    <NavWrapper>
      <LeftOutlined className="icon left" onClick={fnHancleBack} />
      <Title />
      {/* <SearchOutlined className="icon" /> */}
      <MoreOutlined className="icon right" />
    </NavWrapper>
  )
}
