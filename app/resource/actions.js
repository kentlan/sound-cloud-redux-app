import 'whatwg-fetch'
import {getTracksURL} from './util'

export async function searchTracks(query) {
  const response = await fetch(getTracksURL(query, 50, 0))
  const json = await response.json()
  return json.collection
}
