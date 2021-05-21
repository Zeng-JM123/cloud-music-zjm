import React from 'react'
import { SheetItemWrap } from './style'
import { Link } from 'react-router-dom'

export default function SheetItem(props) {
  return (
    <SheetItemWrap
      className="sheet-item"
      picUrl={props.sheetInfo.src}
      onClick={() => props.updateSheet(props.sheetInfo)}
    >
      <Link className="item-link" to={'/playlist?id=' + props.sheetInfo.id}>
        <div className="sheet-item__img"></div>
        <p className="sheet-item__detail">{props.sheetInfo.title}</p>
      </Link>
    </SheetItemWrap>
  )
}
