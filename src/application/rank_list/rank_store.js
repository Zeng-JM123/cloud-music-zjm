import { fromJS } from 'immutable'
const CURRENT_SHEET_ITEM = 'CURRENT_SHEET_ITEM'

export const updateSheet = (data) => {
  return {
    type: CURRENT_SHEET_ITEM,
    data: fromJS(data),
  }
}

const currentSheet = sessionStorage.getItem(CURRENT_SHEET_ITEM)
  ? JSON.parse(sessionStorage.getItem(CURRENT_SHEET_ITEM))
  : {}

const defaultState = fromJS({
  currentSheet,
})

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CURRENT_SHEET_ITEM:
      window.sessionStorage.setItem(
        'CURRENT_SHEET_ITEM',
        JSON.stringify(action.data)
      )
      return state.set('currentSheet', action.data)
    default:
      return state
  }
}
