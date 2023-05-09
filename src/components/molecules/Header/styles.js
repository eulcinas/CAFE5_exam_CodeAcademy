import styled from 'styled-components';

export const StyledHeader = styled.header`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 0px 20px;
  background-color: var(--dark-blue);

  p {
    cursor: pointer;
    font-size: 1, 25rem;
    font-weight: 600;
    color: var(--perl);
  }

  @media screen and (min-width: 600px) {
    height: 10vh;

    p {
      font-size: 1.5rem;
    }
  }
`;

export const StyledHeaderContainer = styled.div`
  max-width: 62.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const StyledImageContainer = styled.div`
  cursor: pointer;
  img {
    width: 3.5rem;
    padding: 5px;
  }

  @media screen and (min-width: 600px) {
    img {
      width: 3.8rem;
    }
  }
`;
