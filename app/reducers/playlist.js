const initialState = []

const playlist = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TRACK':
      return [...state, action.track]
    case 'REMOVE_TRACK': {
      const newState = [...state]
      newState.splice(action.index, 1)
      return newState
    }
    default:
      return state
  }
}

export default playlist
