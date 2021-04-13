import React, { useEffect, useState } from 'react'
import { RotateWrapper } from './style'

export default function RotateComp(props) {
  const [currentDeg, setCurrentDeg] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date().getTime())

  useEffect(() => {
    let interval = new Date().getTime() - currentTime
    setCurrentTime(new Date().getTime())
    let second = Math.ceil(interval / 1000)
    // 一秒走18deg
    setCurrentDeg((currentDeg) => {
      return Math.ceil((currentDeg + second * 18) % 360)
    })
  }, [props.isPlay])

  // useEffect(() => {
  //   let timer = setInterval(() => {
  //     if (props.isPlay) {
  //       setCurrentDeg((currentDeg) => {
  //         if (currentDeg + 1 >= 360) {
  //           setCurrentDeg(0)
  //         } else {
  //           setCurrentDeg(currentDeg + 1)
  //         }
  //       })
  //     }
  //   }, 55)
  //   return () => {
  //     clearInterval(timer)
  //   }
  // })

  return (
    <RotateWrapper
      className="rotate-wrapper"
      currentDeg={currentDeg}
      picUrl={props.picUrl}
      isPlay={props.isPlay}
    >
      <div className="rotate-outer">
        <div className="pic"></div>
        {/* <img src="/assets/gs-1.jpg" className="pic" /> */}
      </div>
    </RotateWrapper>
  )
}
