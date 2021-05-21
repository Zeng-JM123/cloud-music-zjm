import { combineReducers } from 'redux-immutable'
import { reducer as playerStateReducer } from '../components/player/store/index'
import { reducer as currentSongReducer } from '../application/playlist/store/index'
import { reducer as sheetStateReducer } from '../application/rank_list/rank_store'

export default combineReducers({
  playState: currentSongReducer,
  playerControl: playerStateReducer,
  sheet: sheetStateReducer,
})
