import styled from 'styled-components';

export const Input = styled.input`
  background-color: rgb(27,112,137);
  border: 0;
  width: 200px;
  height: 50px;
  padding: 0 20px;
  margin: 20px;
  font-size: 18px;
  border-radius: 10px;
  color: white;
  &::placeholder {
    color: rgb(255,255,255,0.5)
  };
  &:focus {
    outline: none;
  }
`