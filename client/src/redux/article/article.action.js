export const setActive = title => ({
  type: 'SET_ACTIVE_ARTICLE',
  payload: title
})

export const setEmpty = () => ({
  type: 'SET_EMPTY',
  payload: ""
})