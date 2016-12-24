import React, {Component, PropTypes} from 'react'
import {searchTracks} from '../resource'
import SearchResults from './search-results'
import _ from 'lodash'

class Search extends Component {
  static propTypes = {
    actions: PropTypes.object,
    tracksList: PropTypes.array,
    addedTracks: PropTypes.array
  }

  state = {
    searchQuery: '',
    error: '',
    showResults: false
  }

  clearSearch = () => {
    this.setState({showResults: false})
    return this.props.actions.refreshSearchResults([])
  }

  showSearchResults = () => {
    this.setState({showResults: true})
  }

  hideSearchResults = () => {
    this.setState({showResults: false})
  }

  handleSearch = _.debounce((query) => {
    if (query.trim().length === 0) {
      return this.clearSearch()
    }
    return searchTracks(query)
    .then(response => {
      this.props.actions.refreshSearchResults(response)
      response.length && this.setState({showResults: true})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }, 800)

  handleInputChange = event => {
    this.setState({
      searchQuery: event.target.value
    })
    this.handleSearch(event.target.value)
  }

  handleInputFocus = () => {
    (!this.state.showResults && this.state.searchQuery && this.showSearchResults())
  }

  render() {
    const {searchQuery, showResults} = this.state
    return (
      <div className="searchContainer"
           ref={(ref) => (this.searchContainerNode = ref)}>
        <input className="searchInput"
               placeholder="Search..."
               onChange={this.handleInputChange}
               onFocus = {this.handleInputFocus}
               value={searchQuery}/>
        {showResults &&
          <SearchResults show={showResults}
                         searchContainerNode={this.searchContainerNode}
                         tracksList={this.props.tracksList}
                         addedTracks={this.props.addedTracks}
                         actions={this.props.actions}
                         hideSearchResults={this.hideSearchResults}/>
        }
      </div>
    )
  }
}

export default Search
