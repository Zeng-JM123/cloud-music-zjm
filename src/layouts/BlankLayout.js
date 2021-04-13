import React from 'react'
import { renderRoutes } from 'react-router-config'
import Player from '../components/player/index'

const layout = ({ route }) => {
  return (
    <>
      {renderRoutes(route.routes)}
      <Player />
    </>
  )
}

export default layout
