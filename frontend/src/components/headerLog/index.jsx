import React from 'react';
import { Container, Content } from './styled';
import { 
  FaTimes,  
  FaEnvelope,  
  FaChartBar,
  FaPowerOff
} from 'react-icons/fa';
import { BiSolidCabinet } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import SidebarItem from '../sideBarItem/index';
import { useUser } from '../contexts/userContext'; 
import { io } from 'socket.io-client';

const socket = io("http://localhost:3000");

const Sidebar = ({ active }) => {
  const navigate = useNavigate();
  const { logoutUser  } = useUser(); 
  const closeSidebar = () => {
    active(false);
  };

  const handleLogout = () => {
    socket.disconnect(); 

    logoutUser (null);

    navigate('/');

    window.location.reload();
    closeSidebar();
  };

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem onCLick={() => navigate('/home')} Icon={FaChartBar} Text="DashBoard" />
        <SidebarItem onCLick={() => navigate('/produtos')} Icon={BiSolidCabinet} Text="Produtos" />
        <SidebarItem onCLick={() => navigate('/chat')} Icon={FaEnvelope} Text="Mensagens" />
        <SidebarItem onCLick={handleLogout} Icon={FaPowerOff} Text="Sair" />
      </Content>
    </Container>
  );
};

export default Sidebar;
