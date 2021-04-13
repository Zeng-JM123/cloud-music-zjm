import * as actionTypes from './constants'
import { fromJS } from 'immutable'
const playerState = sessionStorage.getItem(actionTypes.PLAYER_STATE)
  ? JSON.parse(sessionStorage.getItem(actionTypes.PLAYER_STATE))
  : false

const defaultState = fromJS({
  playerState,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.PLAYER_STATE:
      window.sessionStorage.setItem('PLAYER_STATE', JSON.stringify(action.data))
      return state.set('playerState', action.data)
    default:
      return state
  }
}
