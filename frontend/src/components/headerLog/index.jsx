import React from 'react'
import { Container, Content } from './styled'
import { 
  FaTimes,  
  FaEnvelope,  
  FaChartBar,
  FaPowerOff,
  FaHome 
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import SidebarItem from '../sideBarItem/index'

const Sidebar = ({ active }) => {
  const navigate = useNavigate();

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem onCLick={() => navigate('/home')} Icon={FaChartBar} Text="DashBoard" />
        <SidebarItem onCLick={() => navigate('/chat')} Icon={FaEnvelope} Text="Messagens" />
        <SidebarItem onCLick={() => navigate('/')} Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar