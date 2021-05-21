import { connect } from 'react-redux'
import { changeCurrentSong, setCurrentList } from './store/actionCreator'
import PlayList from './index'

const mapStateToProps = (state) => {
  return {
    currentSong: state.getIn(['playState', 'currentSong']),
    currentPlayList: state.getIn(['playState', 'currentPlayList']),
    currentSheet: state.getIn(['sheet', 'currentSheet']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong(item) {
      dispatch(changeCurrentSong(item))
    },
    setCurrentList(item) {
      dispatch(setCurrentList(item))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayList)
