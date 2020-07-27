import { ADD_TODO, DELETE_TODO } from "./constants";
import {todos} from './states';

export default function todoReducer(state = todos, action) {
  let newsTodos
  switch (action.type) {
    case ADD_TODO:
      newsTodos = [...state];
      newsTodos.push(action.payload)
      return newsTodos;
    case DELETE_TODO:
      newsTodos = [...state];
      newsTodos = newsTodos.filter(todo => todo.id !== action.payload)
      return newsTodos;
    default:
      return state;
  }
}