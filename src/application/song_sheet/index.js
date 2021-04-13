import React, { useState, useEffect } from 'react'
import SheetItem from './SheetItem'
import { SheetListWrapper } from './style'
import service from '../../api/request'

export default function SongSheetList() {
  // 获取资源

  const [sheetList, SetSheetList] = useState([])

  const getSheetList = async () => {
    const res = await service.get('/recommend/sheet')
    console.log(res)
    SetSheetList(res.data.slice(0, 6))
  }

  useEffect(async () => {
    getSheetList()
  }, [])

  return (
    <SheetListWrapper>
      <div className="list-line">
        {sheetList.map((item) => {
          return <SheetItem sheetInfo={item} key={item.id}></SheetItem>
        })}
      </div>
    </SheetListWrapper>
  )
}
