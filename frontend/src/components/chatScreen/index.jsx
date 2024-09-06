import React from "react";
import { BoxUser, ClienteContainer, Container, InputContainer, InternalContainer, MessageContainer, SideContainer } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index"
const Chat = () => {
    return (<>
        <Header/>
        <Container>
            <SideContainer>
                <BoxUser>
                    
                </BoxUser>
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