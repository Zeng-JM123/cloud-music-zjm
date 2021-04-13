import styled from 'styled-components'

export const PlayerBtn = styled.div`
  position: fixed;
  bottom: 0;
  height: 40px;
  display: flex;
  width: 100%;
  background-color: #f2f4be;
  align-items: center;
  padding: 0 20px;
  .to-player {
    flex: 1;
    display: flex;
    align-items: center;
    color: #000;
  }
  .player-img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-image: url(${(props) => props.picUrl});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  .title {
    font-weight: 600;
    margin-left: 10px;
    flex: 1;
    white-space: nowrap;
  }
  .anticon {
    font-size: 20px;
    width: 50px;
  }
`
