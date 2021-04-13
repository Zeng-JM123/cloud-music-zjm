import styled from 'styled-components'

export const CardItem = styled.li`
  width: 60px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .card-item__button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    &__tag {
      width: 100%;
      height: 100%;
    }
  }
  .card-item__detail {
    font-size: 12px;
    margin-top: 5px;
    color: #000;
  }
`

export const OptionsCard = styled.ul`
  display: flex;
  margin: 12px 12px 0;
`
