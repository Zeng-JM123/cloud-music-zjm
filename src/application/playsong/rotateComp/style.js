import styled from 'styled-components'

export const RotateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .rotate-outer {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .pic {
      width: 170px;
      height: 170px;
      border: 1px solid black;
      border-radius: 50%;
      background: url(${(props) => props.picUrl}) no-repeat;
      background-size: 100% 100%;
      @keyframes circling {
        from {
          transform: rotate(${(props) => props.currentDeg + 'deg'});
        }
        to {
          transform: rotate(360deg);
        }
      }
      animation: circling 20s linear infinite;
      animation-play-state: ${(props) =>
        !props.isPlay ? 'running' : 'paused'};
    }
  }
  .rotate-outer::before {
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    width: 250px;
    height: 250px;
    background: url('https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/4602256867/5855/63fb/325b/d7e4e3a244701ee85fecb5d4f6b5bd57.png?imageView=&quality=75&thumbnail=200y200')
      no-repeat;
    background-size: contain;
  }
`
