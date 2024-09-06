import styled from "styled-components";

export const Wrap_input = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
`;

export const Input_ = styled.input`
  font-size: 15px;
  color: #fff;
  line-height: 1.2;
  border: none;
  display: block;
  width: 100%;
  height: 45px;
  background-color: transparent;
  padding: 0 5px;

  &:focus {
    outline: none;
  }

  &:focus + span::after,
  &.has-val + span::after {
    top: -15px; 
    color: #034159; 
  }

  &:focus + span::before,
  &.has-val + span::before {
    width: 100%; 
  }
`;

export const Focus_input = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  pointer-events: none;
  top: 0;
  left: 0;
  color: #adadad;

  &::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.4s;
    background: linear-gradient(
      150deg,
      #034159,
      #025951,
      #02735e,
      #038c3e,
      #0cf25d
    );
  }

  &::after {
    font-size: 15px;
    color: #999999;
    line-height: 1.2;
    content: attr(data-placeholder);
    display: block;
    width: 100%;
    position: absolute;
    top: 16px; 
    left: 0px;
    padding-left: 5px;
    transition: top 0.4s, color 0.4s;
  }
`;

export const ErrorText = styled.p`
    color: #FF0000;
    font-size:12px;
    display: flex;
    
    align-items: center;
    margin-top: -25px;
`;
