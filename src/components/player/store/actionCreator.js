import { PLAYER_STATE } from './constants'
import { fromJS } from 'immutable'

export const updatePlayerState = (data) => {
  return {
    type: PLAYER_STATE,
    data: fromJS(data),
  }
}
