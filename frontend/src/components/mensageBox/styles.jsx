import React from 'react';
import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const SentMessage = styled.div`
  align-self: flex-end;
  background-color: #d1f7c4;
  color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  border-top-right-radius: 0;
  max-width: 60%;
  margin: 5px 0;
`;

export const ReceivedMessage = styled.div`
  align-self: flex-start;
  background-color: #f1f0f0;
  color: #333;
  padding: 10px 15px;
  border-radius: 10px;
  border-top-left-radius: 0;
  max-width: 60%;
  margin: 5px 0;
`;