const INITIAL_STATE = {
  active: ""
}

const article = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_ACTIVE_ARTICLE':
      return {
        ...state,
        active: action.payload
      }
    case 'SET_EMPTY':
      return {
        ...state,
        active: ""
      }
    default:
      return state
  }
}

export default article;