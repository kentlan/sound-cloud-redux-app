import React, {Component, PropTypes} from 'react'
import {startAudioStream} from '../player'
import {parseDuration} from '../utils'

class PlaylistItem extends Component {
  static propTypes = {
    id: PropTypes.number,
    removeTrack: PropTypes.func,
    playTrack: PropTypes.func,
    index: PropTypes.number,
    title: PropTypes.string,
    artist: PropTypes.string,
    artworkUrl: PropTypes.string,
    duration: PropTypes.number
  }

  removeItem = () => {
    this.props.removeTrack(this.props.index)
  }

  playTrack = () => {
    const {id, index, artist, title, duration, artworkUrl} = this.props
    startAudioStream(id).then(() => {
      this.props.playTrack({id, index, artist, title, duration, artworkUrl})
    })
  }

  render() {
    return (
      <li>
        <span>{`${this.props.artist} - ${this.props.title}`}</span>
        <div className="buttonContainer">
          <span>{parseDuration(this.props.duration)}</span>
          <button className="btn play" onClick={this.playTrack}></button>
          <button className="btn remove" onClick={this.removeItem}></button>
        </div>
      </li>
    )
  }
}

export default PlaylistItem
