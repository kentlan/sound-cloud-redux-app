import {REMOVE_TRACK, PLAY_TRACK} from './action-types'

export const removeTrack = index => ({
  type: REMOVE_TRACK,
  index
})

export const playTrack = track => ({
  type: PLAY_TRACK,
  track
})
