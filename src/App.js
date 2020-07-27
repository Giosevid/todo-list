import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import styled from 'styled-components';


export default function App() {
  return (
    <Container>
      <div>
        <header>
          <Title>Todo List</Title>
        </header>
        <AddTodoForm/>
        <TodoList />
      </div>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  background-color: gainsboro;
  height: 100vh;
`

const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  color: blue;
`
