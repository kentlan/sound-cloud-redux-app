import React, {Component, PropTypes} from 'react'

class SearchResults extends Component {
  static propTypes = {
    show: PropTypes.bool,
    tracksList: PropTypes.array
  }

  renderTracksList = tracksList => (
    tracksList.map(track => (
      <div key={track.id}>
        <img src={track.artwork_url}/>
        {track.title}
      </div>)
    )
  )

  render() {
    const {tracksList, show} = this.props
    return (
      <div>
        {show
          ? this.renderTracksList(tracksList)
          : null
        }
      </div>
    )
  }
}

export default SearchResults
