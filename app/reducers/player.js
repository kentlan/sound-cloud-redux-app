const initialState = {
  repeat: false,
  state: 'stop',
  currentTrack: {
    id: null,
    playListIndex: null
  }
}

const player = (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_TRACK':
      return {...state, currentTrack: action.track, state: 'play'}
    case 'PAUSE_TRACK':
      return {...state, state: 'pause'}
    case 'UNPAUSE_TRACK':
      return {...state, state: 'play'}
    default:
      return state
  }
}

export default player
