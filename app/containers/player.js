import React, {PropTypes, Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Playlist from '../components/playlist'
import Player from '../components/player'
import * as playlistActions from '../actions/playlist-actions'
import * as playerActions from '../actions/player-actions'

class PlayerContainer extends Component {
  state = {
    viewPlayer: false
  }

  flipPlayer = () => {
    this.setState({viewPlayer: !this.state.viewPlayer})
  }

  render() {
    const props = {...this.props, flipPlayer: this.flipPlayer}
    const {viewPlayer} = this.state
    return (
      <div>
        <Player {...props} show={viewPlayer}></Player>
        <Playlist {...props} show={!viewPlayer}></Playlist>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  addedTracks: state.playlist,
  tracksList: state.search,
  player: state.player
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    playlistActions: bindActionCreators(playlistActions, dispatch),
    playerActions: bindActionCreators(playerActions, dispatch)
  }
})

PlayerContainer.propTypes = {
  actions: PropTypes.object,
  addedTracks: PropTypes.array,
  tracksList: PropTypes.array,
  player: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)
