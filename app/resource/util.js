import {STOLEN_CLIENT_ID, BASE_URL, TRACKS_URL} from './constants'

const paramsArrayToString = params => (
  params.length
  ? `&${_.join(params.map(param => (
      _.map(param, (value, key) => `${key}=${value.toString().toLowerCase().split(' ').join('%20')}`)
    )), '&')}`
  : null
)

const constructUrl = (subUrl, params) => (
  `${BASE_URL}${subUrl}?client_id=${STOLEN_CLIENT_ID}${paramsArrayToString(params)}`
)

export const getTracksURL = (searchQuery, limit, offset) => {
  const params = [
    {q: searchQuery},
    {limit},
    {offset}
  ]
  const url = constructUrl(TRACKS_URL, params)
  return `${url}&linked_partitioning=1`
}
