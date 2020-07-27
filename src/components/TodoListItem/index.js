import React from 'react'
import { connect } from 'react-redux'
import { delteTodoAction } from '../../redux/actions';
import styled from 'styled-components';
import { Button } from '../style/Button';

const TodoListItem = ({todo, delteTodoAction}) => {
  return (
    <Container>
      <WrapperContemt>
        <Text>{todo.content}</Text>
        <Button secondary onClick={() => delteTodoAction(todo.id)}>delete</Button>
      </WrapperContemt>
      <Divider />
    </Container>
  )
}

export default connect(null, {delteTodoAction})(TodoListItem)

const Container = styled.section`
  text-align: center;
  padding-top: 16px;
`

const WrapperContemt = styled.article`
  display: flex;
  justify-content: space-between;
`

const Divider = styled.div`
  margin-top: 16px;
  border-top: 3px solid #bbb;
`

const Text = styled.span`
  color: blue;
  font-size: 20px;
`