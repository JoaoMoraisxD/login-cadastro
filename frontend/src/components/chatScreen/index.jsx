import React from "react";
import { ClienteContainer, Container, InternalContainer, MessageContainer, SideContainer } from "./styles";
import { Header } from "../header/index";
import { ChatInput } from "../chatInput/index"
const Chat = () => {
    return (<>
        <Header/>
        <Container>
            <SideContainer>
                
            </SideContainer>
            <MessageContainer>
                <ClienteContainer>
                    teste
                </ClienteContainer>
                <InternalContainer>
                    teste
                </InternalContainer>
                <ChatInput OnClick={''}/>
            </MessageContainer>
        </Container> 
    </>);
};

export { Chat };