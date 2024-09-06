import React from "react";

import { Button_,Btn_container } from "./styles";
const Button = ({children}) => {
    return(
        <Btn_container>
            <Button_>{children}</Button_>
        </Btn_container>
    );
}

export {Button}