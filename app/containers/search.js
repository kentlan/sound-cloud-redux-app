import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Search from '../components/search'
import * as searchActions from '../actions/search-actions'

const SearchContainer = (props) => (
  <div>
    <Search {...props}></Search>
  </div>
)

const mapStateToProps = state => ({
  tracksList: state.search
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(searchActions, dispatch)
})

SearchContainer.propTypes = {
  actions: PropTypes.object,
  tracksList: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)
