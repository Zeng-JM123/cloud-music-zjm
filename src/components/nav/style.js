import styled from 'styled-components'

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  position: absolute;
  z-index: 20000;
  width: 100%;
  top: 5px;
  .icon {
    color: #fff;
    font-size: 20px;
  }
  .left {
    width: 50px;
    text-align: center;
  }
  .title {
    color: #fff;
    flex: 1;
    text-align: center;
  }
  .right {
    width: 50px;
    text-align: center;
  }
`
