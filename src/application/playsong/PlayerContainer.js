import { connect } from 'react-redux'
import { changeCurrentSong } from '../playlist/store/actionCreator'
import { updatePlayerState } from '../../components/player/store/actionCreator'
import SongLayout from './index'

const mapStateToProps = (state) => ({
  currentSong: state.getIn(['playState', 'currentSong']),
  currentPlayList: state.getIn(['playState', 'currentPlayList']),
  playerState: state.getIn(['playerControl', 'playerState']),
})

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrentSong(item) {
      dispatch(changeCurrentSong(item))
    },
    updatePlayerState(item) {
      dispatch(updatePlayerState(item))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongLayout)
