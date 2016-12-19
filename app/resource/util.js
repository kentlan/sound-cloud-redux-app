import {STOLEN_CLIENT_ID, BASE_URL, TRACKS_URL} from './constants'

const paramsArrayToString = params => (
  params
  ? _.reduce(params, (result, value, key) => `${result}&${key}=${value}`, '')
  .split(' ').join('%20')
  : null
)

const constructUrl = (subUrl, params) => (
  `${BASE_URL}${subUrl}?client_id=${STOLEN_CLIENT_ID}${paramsArrayToString(params)}`
)

export const getTracksURL = (searchQuery, limit, offset) => {
  const url = constructUrl(TRACKS_URL, {q: searchQuery, limit, offset})
  return `${url}&linked_partitioning=1`
}
