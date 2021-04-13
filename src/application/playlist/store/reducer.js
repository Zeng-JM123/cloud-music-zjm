import * as actionTypes from './constants'
import { fromJS } from 'immutable'
const currentPlayList = sessionStorage.getItem(actionTypes.CURRENT_PLAY_LIST)
  ? JSON.parse(sessionStorage.getItem(actionTypes.CURRENT_PLAY_LIST))
  : []
const currentSong = sessionStorage.getItem(actionTypes.CHANGE_CURRENT_SONG)
  ? JSON.parse(sessionStorage.getItem(actionTypes.CHANGE_CURRENT_SONG))
  : {}

const defaultState = fromJS({
  currentPlayList,
  currentSong,
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      window.sessionStorage.setItem(
        'CHANGE_CURRENT_SONG',
        JSON.stringify(action.data)
      )
      return state.set('currentSong', action.data)
    case actionTypes.CURRENT_PLAY_LIST:
      window.sessionStorage.setItem(
        'CURRENT_PLAY_LIST',
        JSON.stringify(action.data)
      )
      return state.set('currentPlayList', action.data)
    default:
      return state
  }
}
