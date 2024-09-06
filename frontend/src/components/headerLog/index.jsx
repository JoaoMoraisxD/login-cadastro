import React from 'react'
import { Container, Content } from './styled'
import { 
  FaTimes,  
  FaEnvelope,  
  FaChartBar,
  FaPowerOff 
} from 'react-icons/fa'

import SidebarItem from '../sideBarItem/index'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaChartBar} Text="DashBoard" />
        <SidebarItem Icon={FaEnvelope} Text="Messagens" />
        <SidebarItem Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar