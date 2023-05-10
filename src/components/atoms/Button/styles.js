import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;

  border-width: 1px;
  border-style: none;
  border-color: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  background-color: var(--dark-blue);
  color: var(--perl);

  :hover {
    background-color: transparent;
    border: 1px solid var(--dark-blue);
    color: var(--dark);
    padding: 8px;
  }

  @media screen and (min-width: 400px) {
    padding: 8px;
  }

  @media screen and (min-width: 620px) {
    padding: 10px;
  }
`;
