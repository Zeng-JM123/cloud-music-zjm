import styled from 'styled-components'

export const RankItemUl = styled.ul`
  margin-top: -10px;
`

export const RankItemLi = styled.li`
  color: #000;
  margin: 10px 20px;
  border-radius: 8px;
  display: flex;
  padding: 20px;
  background-color: ${(props) => props.bgColor};
  /* #FFF4F3 */
  /* #aFFFBA */
  .rank-item__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70px;
    &__title {
      font-weight: 600;
      font-size: 20px;
      color: #000;
    }
    &__img {
      width: 70px;
      height: 70px;
      border-radius: 10px;
      margin-top: 10px;
      background-image: url(${(props) => props.picUrl});
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .rank-item__right {
    padding: 10px 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 30px;
    flex: 1;
    &__info {
      font-size: 14px;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: normal;
      &__rank {
        color: #000;
      }
      &__title {
        overflow: hidden;
        color: #000;
      }
      &__artiset {
        color: #999;
      }
    }
  }
`
