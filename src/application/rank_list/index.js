import React, { useState, useEffect } from 'react'
import RankItem from './RankItem'
import { RankItemUl } from './style'
import service from '../../api/request'

export default function RankList() {
  const [topList, setTopList] = useState([])
  const BGCOLOR = ['#fff4f3', '#FFF5B2', '#AFffaC']

  useEffect(() => {
    getRankList()
  }, [])

  const getRankList = async () => {
    const res = await service('/rank/list')
    for (let i = 0; i < res.data.length; i++) {
      res.data[i].bgColor = BGCOLOR[i]
    }
    setTopList(res.data)
  }

  return (
    <RankItemUl>
      {topList.map((item) => {
        return <RankItem {...item} key={item.id}></RankItem>
      })}
    </RankItemUl>
  )
}
