// import React, { useEffect, useState } from "react";
// import { Nav, Header_, NomeEmpresa, Logo, Username, LeftContainer } from "./styles"; // Adicione Username aos imports
// import reactImage from "../../assets/react_1183621.png";
// import userImage from "../../assets/user.png"

// const Header = ({ showUsername = false }) => {
//   const [username, setUsername] = useState("");

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   return (
//     <Header_>
//       <Nav>
//         <Logo>
//           <img className="img" src={reactImage} alt="react image" />
//           <NomeEmpresa>REACT</NomeEmpresa>
//         </Logo>
//         <LeftContainer>
//             {showUsername && username && (
//             <Username>{username}</Username>
//             )}
//              {showUsername && username && (
//             <img className="img" src={userImage} alt="user image" />
//             )}
//         </LeftContainer>
//       </Nav>
//     </Header_>
//   );
// };

// export { Header };

import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../headerLog/index'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export {Header}