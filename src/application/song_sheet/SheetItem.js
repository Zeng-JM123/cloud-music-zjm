import React from 'react'
import { SheetItemWrap } from './style'
import { Link } from 'react-router-dom'

export default function SheetItem(props) {
  const setCurrentSheetItem = (item) => {
    window.sessionStorage.setItem('CURRENT_SHEET_ITEM', JSON.stringify(item))
  }

  return (
    <Link to={'/playlist?id=' + props.sheetInfo.id}>
      <SheetItemWrap
        className="sheet-item"
        picUrl={props.sheetInfo.src}
        onClick={() => setCurrentSheetItem(props.sheetInfo)}
      >
        <div className="sheet-item__img"></div>
        <p className="sheet-item__detail">{props.sheetInfo.title}</p>
      </SheetItemWrap>
    </Link>
  )
}
