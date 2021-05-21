import React, { useState, useEffect } from 'react'
import SheetItem from './SheetItem'
import { SheetListWrapper } from './style'
import service from '../../api/request'
import { connect } from 'react-redux'
import { updateSheet } from '../rank_list/rank_store'

function SongSheetList(props) {
  // 获取资源
  const { updateSheet } = props
  const [sheetList, SetSheetList] = useState([])

  const getSheetList = async () => {
    const res = await service.get('/recommend/sheet')
    SetSheetList(res.data.slice(0, 6))
  }

  useEffect(async () => {
    getSheetList()
  }, [])

  return (
    <SheetListWrapper>
      <div className="list-line">
        {sheetList.map((item) => {
          return (
            <SheetItem
              sheetInfo={item}
              key={item.id}
              updateSheet={updateSheet}
            ></SheetItem>
          )
        })}
      </div>
    </SheetListWrapper>
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

export default connect(mapStateToProps, mapDispatchToProps)(SongSheetList)
