import React, {Component, PropTypes} from 'react'
import {scPlayer, startAudioStream} from '../player'

class Player extends Component {
  state = {
    currentTime: 0
  }

  static propTypes = {
    flipPlayer: PropTypes.func,
    player: PropTypes.object,
    addedTracks: PropTypes.array,
    show: PropTypes.bool,
    actions: PropTypes.object
  }

  hanldeFlip = () => {
    this.props.flipPlayer()
  }

  pauseTrack = () => {
    const {player, actions: {playerActions}} = this.props
    if (scPlayer && player.state === 'play') {
      scPlayer.pause()
      playerActions.pauseTrack()
    }
  }

  playTrack = () => {
    console.log('IDI na huy')
  }

  unpauseTrack = () => {
    const {player, actions: {playerActions}} = this.props
    if (scPlayer && player.state === 'pause') {
      scPlayer.play()
      playerActions.unpauseTrack()
    }
  }

  handlePlayPause = () => {
    const {state} = this.props.player
    switch (state) {
      case 'play':
        this.pauseTrack()
        break
      case 'pause':
        this.unpauseTrack()
        break
      default:
        this.playTrack()
    }
  }

  renderArtwork = () => {
    const {addedTracks, player} = this.props
    if (player.currentTrack.id) {
      return (
        addedTracks[player.currentTrack.index].artworkUrl ||
        './style/img/no-art.jpg'
      )
    }
    return './style/img/missing.png'
  }

  render() {
    const {show, player} = this.props
    return (
      <div className="playerWrapper" style={{display: show ? 'block' : 'none'}}>
        <div className="albumCover">
          <img src={this.renderArtwork()}/>
          </div>
        <div className="playerLayout">
          <h2 onClick={this.hanldeFlip}>
            {`${player.currentTrack.artist} - ${player.currentTrack.title}`}
          </h2>
          <div>
            {this.props.player.currentTrack.id}
            time
            {this.state.currentTime}
          </div>
          <button onClick={this.handlePlayPause}>
          </button>
        </div>
      </div>
    )
  }
}

export default Player
