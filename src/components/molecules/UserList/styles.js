import styled from 'styled-components';

export const StyledUserListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledUserCard = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;

  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StyledUserNumber = styled.div`
  width: 3%;
  display: flex;
  justify-content: flex-start;
  margin-left: 10px;
`;

export const StyledUserName = styled.div`
  width: 35%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  text-align: left;
  font-weight: 600;
`;

export const StyledUserEmail = styled.div`
  width: 42%;
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
  text-align: left;
`;

export const StyledUserAge = styled.div`
  width: 5%;
  display: none;

  @media screen and (min-width: 600px) {
    display: flex;
  }
`;

export const StyledUserCardButtons = styled.div`
  width: 15%;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin: 5px;
`;
