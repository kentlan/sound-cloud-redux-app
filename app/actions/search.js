const REFRESH_SEARCH_RESULTS = 'REFRESH_SEARCH_RESULTS'

const refreshSearchResults = (result) => ({
  type: REFRESH_SEARCH_RESULTS,
  payload: result
})

export default refreshSearchResults
