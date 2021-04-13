import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding-top: 10px;
  .icon-menu {
    width: 50px;
    text-align: center;
    font-size: 20px;
  }
  .search__body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #fff;
    border-radius: 30px;
    &--mid {
      .icon-search {
        font-size: 20px;
      }
      .detail {
        margin-left: 5px;
        color: #d8d8d8;
      }
    }
  }
  .icon-avatar {
    width: 50px;
    text-align: center;
    font-size: 20px;
  }
`

export const CarouselWrapper = styled.div`
  background-color: #fff;
  margin: 15px 15px 0;
  height: 160px;
  border-radius: 10px;
  border: 1px solid black;
`

export const CardList = styled.ul``

export const SongSheetListWrapper = styled.div`
  margin-top: 15px;
  padding: 15px 20px;
  background-color: #fff;
  border-top: 1px solid #f3f3f4;
  .recommend-item__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__title {
      font-weight: 600;
    }
    &__button {
      font-size: 14px;
    }
  }
`

export const RankListWrapper = styled.div`

`

export const WhiteTheme = styled.div`
  background-color: #fff;
`

export const Footer = styled.ul``
