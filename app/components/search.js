import React, {Component} from 'react'
import Soundcloud from '../resource/sound-cloud'
import _ from 'lodash'

const sc = new Soundcloud()

class Search extends Component {
  state = {
    searchQuery: '',
    error: '',
    showResults: false
  }

  handleSearch = _.debounce(searchQuery => {
    sc.search(searchQuery)
    .then(response => {
      response.length && this.setState({showResults: true})
    })
    .catch(error => {
      this.setState({error: error.message})
    })
  }, 500)

  inputHandler = event => {
    this.setState({searchQuery: event.target.value},
      () => this.handleSearch(this.state.searchQuery))
  }

  render() {
    const {searchQuery} = this.state
    return <input onChange={this.inputHandler} value={searchQuery}/>
  }
}

export default Search
