import React from 'react'
import { StyledHeader, StyledImageContainer, StyledHeaderContainer } from './styles'

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledImageContainer>
          <img src="https://www.iconpacks.net/icons/2/free-event-icon-2319-thumb.png" alt="logo" />
        </StyledImageContainer>
        <p>EVENT PLANNER</p>
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

export default Header