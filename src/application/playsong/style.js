import styled from 'styled-components'

export const RotateWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  .rotate-wrapper {
    flex: 1;
    width: 100%;
    position: relative;
    z-index: 20;
  }
  .play-control {
    height: 150px;
  }
`

export const SongBg = styled.div`
  background-image: url(${(props) => props.picUrl});
  opacity: 1;
  transform: scale(1.5);
  transform-origin: center center;
  filter: blur(30px);
  background-color: #161824;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`

export const PlayerControl = styled.div`
  .control-btn {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      position: relative;
      z-index: 200;
      font-size: 30px;
      color: #999;
    }
    .play {
      font-size: 45px;
    }
  }
`
