import { CHANGE_CURRENT_SONG, CURRENT_PLAY_LIST } from './constants'
import { fromJS } from 'immutable'

export const changeCurrentSong = (data) => {
  return {
    type: CHANGE_CURRENT_SONG,
    data: fromJS(data),
  }
}

export const setCurrentList = (data) => {
  return {
    type: CURRENT_PLAY_LIST,
    data: fromJS(data),
  }
}
