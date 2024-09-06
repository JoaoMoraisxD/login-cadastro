import React from "react";
import { ClienteContainer, Container, InputContainer, InternalContainer, MessageContainer, SideContainer } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index"
const Chat = () => {
    return (<>
        <Header/>
        <Container>
            <SideContainer>
                
            </SideContainer>
            <MessageContainer>
                <InternalContainer>
                </InternalContainer>
                <InputContainer>
                    <ChatInput OnClick={''}/>
                </InputContainer>
            </MessageContainer>
        </Container> 
    </>);
};

export { Chat };