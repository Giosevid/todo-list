import React from 'react';
import TodoLisItem from '../TodoListItem';
import { connect } from 'react-redux';

const TodoList = ({todos}) => {
  return (
    <div>
      {todos.map(todo => <TodoLisItem key={todo.id} todo={todo} />)}
    </div>
  )
}

const mapStateToProps = ({todos}) => ({
  todos: todos
})

export default connect(mapStateToProps, null)(TodoList)
