import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Icon, Text, onCLick }) => {
  return (
    <Container onClick={onCLick}> 
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem