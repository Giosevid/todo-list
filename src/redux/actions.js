import { ADD_TODO, DELETE_TODO } from "./constants"

export const addTodoAction = todo => (dispatch, getState) => {
  dispatch({
    type: ADD_TODO,
    payload: todo
  })
}

export const delteTodoAction = todoId => (dispatch, getState) => {
  dispatch({
    type: DELETE_TODO,
    payload: todoId
  })
}