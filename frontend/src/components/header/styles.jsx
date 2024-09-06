// import styled from "styled-components";

// export const Header_ = styled.header`
//     margin: 0;
//     padding: 0;
//     border: 0;
//     width: 100%;
//     box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.596); 
    
// `;

// export const Nav = styled.nav`
//     width: 100%;
//     height: 55px;
//     background-color: black;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.596); 
// `;

// export const Logo = styled.div`
//     height: 45px;
//     margin: 10px;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     .img {
//         height: 45px;
//     }
// `;

// export const NomeEmpresa = styled.p`
//     color: white;
//     font-weight: bold;
//     font-size: 16px;
//     margin-left: 4px;
// `;
// export const Username = styled.h1`
//     margin: 30px;
//     color: #fff; 
// `;

// export const LeftContainer = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     gap: 10px;
//     margin-right: 40px;
//     .img {
//         height: 45px;
//     }
// `

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;