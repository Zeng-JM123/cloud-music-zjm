import styled from 'styled-components'

export const MusicInfo = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .bg-pic {
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(15px);
    background: url(${(props) => props.picUrl}) no-repeat;
    background-size: 100% 100%;
    background-position: 60%;
  }
  .info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    &__title {
      color: #fff;
      font-size: 38px;
      font-family: '楷体';
      font-weight: 600;
    }
    &__detail {
      color: #fff;
      font-size: 14px;
      margin-top: 10px;
      font-weight: 600;
      font-family: '楷体';
    }
  }
`

export const SheetInfo = styled.div`
  position: absolute;
  z-index: 200;
  display: flex;
  width: 100%;
  padding: 0 20px;
  margin-top: 10px;
  .info-pic {
    min-width: 120px;
    height: 120px;
    background: url(${(props) => props.picUrl}) no-repeat;
    background-size: 100% 100%;
    border-radius: 15px;
  }
  .sheet-info {
    color: #fff;
    margin-left: 20px;
    line-height: 22px;
  }
`

export const List = styled.ul`
  margin-top: 5px;
  background-color: #fff;
  .list-item {
    display: flex;
    align-items: center;
    color: #000;
    height: 55px;
    margin-top: 5px;
    &__rank {
      width: 40px;
      color: #999;
      text-align: center;
      font-size: 17px;
    }
    &__detail {
      flex: 1;
      padding: 6px 0;
      &__title {
        font-size: 17px;
      }
      &__artiset {
        font-size: 12px;
        margin-top: 5px;
        color: #888;
      }
    }
    &__mv {
      width: 80px;
      text-align: center;
      color: #888;
      cursor: pointer;
    }
  }
`

export const PlayButtonWrapper = styled.div`
  margin-top: 10px;
  cursor: pointer;
  a {
    display: block;
    align-items: center;
    height: 40px;
    display: flex;
    color: #000;
  }
  .btn-icon {
    margin-left: 10px;
    .icon {
      font-size: 22px;
    }
  }
  .detail {
    font-weight: 600;
    margin-left: 10px;
  }
  .num {
    margin-left: 5px;
  }
`
