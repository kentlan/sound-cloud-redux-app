const initialState = []

const search = (state = initialState, action) => {
  switch (action.type) {
    case 'REFRESH_SEARCH_RESULTS':
      return action.results
    default:
      return state
  }
}

export default search
