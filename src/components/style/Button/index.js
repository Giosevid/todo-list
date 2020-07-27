import styled from 'styled-components';

export const Button = styled.button`
  height: ${(props) => (props.secondary ? '30px' : '50px')};
  width: 80px;
  border-radius: 5px;
  border: 0;
  background-color: ${(props) => (props.secondary ? 'red' : 'rgb(202, 150,24)')};
  cursor: pointer;
  font-weight: bolder;
  color: white;
  &:focus {
    outline: none;
  };
`