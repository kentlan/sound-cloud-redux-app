import React, {Component, PropTypes} from 'react'
import SearchItem from './search-item'

class SearchResults extends Component {
  static propTypes = {
    show: PropTypes.bool,
    tracksList: PropTypes.array,
    addedTracks: PropTypes.array,
    actions: PropTypes.object,
    hideSearchResults: PropTypes.func,
    searchContainerNode: PropTypes.object
  }

  addTrackToPlaylist = (track) => {
    this.props.actions.addTrack(track)
  }

  renderTracksList = tracksList => (
    tracksList.map(track => <SearchItem track={track}
                                        key={track.id}
                                        addTrack={this.props.actions.addTrack}/>)
  )

  outsideClickhanlder = event => {
    const appNode = document.body.firstElementChild
    let parentNode = event.target.parentElement || appNode
    while (parentNode !== appNode) {
      if (parentNode === this.props.searchContainerNode) {
        return
      }
      parentNode = parentNode.parentElement
    }
    this.props.hideSearchResults()
  }

  componentWillMount() {
    document.addEventListener('click', this.outsideClickhanlder)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.outsideClickhanlder)
  }

  render() {
    const {tracksList, show} = this.props
    return (
      <div className="searchResults">
        {show
          ? this.renderTracksList(tracksList)
          : null
        }
      </div>
    )
  }
}

export default SearchResults
