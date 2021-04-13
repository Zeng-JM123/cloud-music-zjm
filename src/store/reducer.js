import { combineReducers } from 'redux-immutable'
import { reducer as playerStateReducer } from '../components/player/store/index'
import { reducer as currentSongReducer } from '../application/playlist/store/index'

export default combineReducers({
  playState: currentSongReducer,
  playerControl: playerStateReducer,
})
