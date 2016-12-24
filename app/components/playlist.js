import React, {Component, PropTypes} from 'react'
import PlaylistItem from './playlist-item'

class Playlist extends Component {

  static propTypes = {
    addedTracks: PropTypes.array,
    tracksList: PropTypes.array,
    actions: PropTypes.object,
    show: PropTypes.bool,
    flipPlayer: PropTypes.func
  }

  renderTrackList = tracks => (
    tracks.map((trackInfo, index) => (
      <PlaylistItem key={index}
                    title={trackInfo.title}
                    id={trackInfo.id}
                    index={index}
                    duration={trackInfo.duration}
                    artist={trackInfo.artist}
                    removeTrack={this.props.actions.playlistActions.removeTrack}
                    playTrack={this.props.actions.playlistActions.playTrack}/>
    ))
  )

  flipPlayer = () => {
    this.props.flipPlayer()
  }

  render() {
    return (
      <div className="playlistWrapper" style={{display: this.props.show ? 'block' : 'none'}}>
        <h2 onClick={this.flipPlayer}>Playlist</h2>
        <ul className="playlist">
          {this.renderTrackList(this.props.addedTracks)}
        </ul>
      </div>)
  }
}

export default Playlist
