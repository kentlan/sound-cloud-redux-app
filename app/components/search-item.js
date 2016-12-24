import React, {Component, PropTypes} from 'react'

class SearchItem extends Component {
  static propTypes = {
    track: PropTypes.object,
    addTrack: PropTypes.func,
    actions: PropTypes.object
  }

  state = {
    thumbLoaded: false
  }

  addTrackToPlaylist = track => {
    this.props.addTrack(track)
  }

  handleImageLoad = () => {
    this.setState({thumbLoaded: true})
  }


  render() {
    const {track} = this.props
    const {thumbLoaded} = this.state
    return (
      <div className="searchItem" key={track.id}>
        <div className="track">
          <img src={track.artwork_url}
               style={{opacity: thumbLoaded ? 1 : 0}}
               onLoad={this.handleImageLoad}/>
             <div className="info">{track.title}
            <div onClick={() => this.addTrackToPlaylist(track)}
              className="add">+</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchItem
