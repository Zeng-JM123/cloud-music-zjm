import React, { lazy, Suspense } from 'react'
import HomeLayout from '../layouts/HomeLayout'
import BlankLayout from '../layouts/BlankLayout'
// import { Redirect } from 'react-router-dom'

const SuspenseComponent = (Component) => (props) => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const playListComponent = lazy(() =>
  import('../application/playlist/PlayListContainer.js')
)
const PlayerContainer = lazy(() =>
  import('../application/playsong/PlayerContainer')
)

const TestComponent = lazy(() => import('../application/test/index'))

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        exact: true,
        component: HomeLayout,
      },
      {
        path: '/playlist',
        component: SuspenseComponent(playListComponent),
        routes: [
          {
            path: '/playlist?id=',
            component: SuspenseComponent(playListComponent),
          },
        ],
      },
      {
        path: '/song',
        component: SuspenseComponent(PlayerContainer),
        routes: [
          {
            path: '/song/:id',
            component: SuspenseComponent(PlayerContainer),
          },
        ],
      },
      {
        path: '/discover',
        component: SuspenseComponent(playListComponent),
        routes: [
          {
            path: '/playlist?id=',
            component: SuspenseComponent(playListComponent),
          },
        ],
      },
      {
        path: '/test',
        component: SuspenseComponent(TestComponent),
      },
    ],
  },
]
