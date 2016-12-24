import {REFRESH_SEARCH_RESULTS, ADD_TRACK} from './action-types'

export const refreshSearchResults = (results) => ({
  type: REFRESH_SEARCH_RESULTS,
  results
})

export const addTrack = track => ({
  type: ADD_TRACK,
  track: {
    id: track.id,
    title: track.title,
    artist: track.user.username,
    duration: track.duration,
    artworkUrl: track.artwork_url
  }
})
