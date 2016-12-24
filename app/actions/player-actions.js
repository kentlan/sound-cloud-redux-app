import {PAUSE_TRACK, UNPAUSE_TRACK} from './action-types'

export const pauseTrack = () => ({
  type: PAUSE_TRACK
})

export const unpauseTrack = () => ({
  type: UNPAUSE_TRACK
})
