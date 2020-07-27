import React, { useState } from 'react';
import { Input } from '../style/Input';
import { Button } from '../style/Button';
import { connect } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { addTodoAction } from '../../redux/actions';
import styled from 'styled-components';

const AddTodoForm = ({addTodoAction}) => {
  const [content, setContent] = useState('')

  const handleChange = event => {
    setContent(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault();
    if(!content.trim()) {
      return
    }
    addTodoAction({id: uuid(), content});
    setContent("");
  }

  return (
    <Container>
      <form className="to-do-form" onSubmit={handleSubmit}>
        <Text>Add new todo:</Text>
        <Input onChange={handleChange} type="text" placeholder="Enter text" value={content} />
        <Button onClick={handleSubmit} type="submit">Add</Button>
      </form>
    </Container>
  )
}

export default connect(null, {addTodoAction} )(AddTodoForm);

const Container = styled.section`
  text-align: center;
`

const Text = styled.span`
  color: green;
  font-size: 45px;
`