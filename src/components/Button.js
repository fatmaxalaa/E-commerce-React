import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainRed)" : "var(--mainWhite)"};
  border-radius: 0.5rem;
  color: ${(props) => (props.cart ? "var(--mainRed)" : "var(--mainWhite)")};
  padding: 0.2rem 0.7rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainWhite)" : "var(--mainWhite)"};
    color: var(--mainRed);
  }
  :focus {
    outline: none;
  }
`; 