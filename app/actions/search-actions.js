import {REFRESH_SEARCH_RESULTS} from './action-types'
export const refreshSearchResults = (results) => ({
  type: REFRESH_SEARCH_RESULTS,
  results
})
