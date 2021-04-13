import styled from 'styled-components'

export const SheetItemWrap = styled.li`
  height: 100%;
  display: inline-block;
  margin: 10px 0;
  width: 33.3%;
  padding: 0 3px;
  .sheet-item__img {
    padding-bottom: 100%;
    border-radius: 10px;
    background: url(${(props) => props.picUrl}) no-repeat;
    background-size: 100% 100%;
  }
  .sheet-item__detail {
    height: 36px;
    min-height: 30px;
    line-height: 1.2;
    font-size: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    padding: 6px 2px 0 6px;
    color: #000;
  }
`

export const SheetListWrapper = styled.div`
  .list-line {
    margin-bottom: 6px;
  }
`
