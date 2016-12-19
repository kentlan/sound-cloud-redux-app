import React, {Component, PropTypes} from 'react'
import {searchTracks} from '../resource'
import SearchResults from './search-results'
import _ from 'lodash'

class Search extends Component {
  static propTypes = {
    actions: PropTypes.object,
    tracksList: PropTypes.array
  }

  state = {
    searchQuery: '',
    error: '',
    showResults: false,
    titles: []
  }

  handleSearch = _.debounce((query) => {
    const {refreshSearchResults} = this.props.actions
    if (query.trim().length === 0) {
      return refreshSearchResults([])
    }
    return searchTracks(query)
    .then(response => {
      refreshSearchResults(response)
      response.length && this.setState({showResults: true})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }, 800)

  handlerInput = event => {
    this.setState({
      searchQuery: event.target.value
    })
    this.handleSearch(event.target.value)
  }

  render() {
    const {searchQuery, showResults} = this.state

    return (
      <div>
        <input onChange={this.handlerInput} value={searchQuery}/>
        <SearchResults show={showResults} tracksList={this.props.tracksList}/>
      </div>
    )
  }
}

export default Search
