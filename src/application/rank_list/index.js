import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import RankItem from './RankItem'
import { RankItemUl } from './style'
import service from '../../api/request'
import { updateSheet } from './rank_store'

function RankList(props) {
  const [topList, setTopList] = useState([])
  const BGCOLOR = ['#fff4f3', '#FFF5B2', '#AFffaC']
  const { updateSheet } = props

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
        return (
          <RankItem
            {...item}
            key={item.id}
            updateSheet={updateSheet}
          ></RankItem>
        )
      })}
    </RankItemUl>
  )
}

const mapStateToProps = (state) => {
  return {
    currentSheet: state.getIn(['sheet', 'currentSheet']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateSheet(item) {
      dispatch(updateSheet(item))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankList)
