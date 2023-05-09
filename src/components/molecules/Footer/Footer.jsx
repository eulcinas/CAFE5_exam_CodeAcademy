import React from 'react'
import { StyledFooter } from './styles'

const Footer = () => {
  return (
    <StyledFooter>
      &copy; All right reserved, Eimantas Ulčinas | {new Date().getFullYear()}
    </StyledFooter>
  )
}

export default Footer