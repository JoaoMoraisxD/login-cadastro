import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0 auto;
`

export const Container_cadastro = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: #1f2437;
`
export const Wrap_cadastro = styled.div`
    width: 390px;
    background-color: #2b3147f2;
    overflow: hidden;
    padding: 20px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0,0, 0.2);
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
`

export const Cadastro_form = styled.form`
    width: 100%;
`

export const Form_title = styled.span`
    display: block;
    font-size: 30px;
    color: azure;
    line-height: 1.2;
    text-align: center;
    padding: 15px;

    .img{
        width: 90px;
        padding: 10px;
    }
`

export const Text_center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Txt1 = styled.p`
    font-size: 14px;
    color: #adadad;
    line-height: 1.5;
    padding-right: 5px;
`

export const Txt2 = styled.a`
    font-size: 14px;
    color: #025951;
    line-height: 1.5;
    text-decoration: none;

    &:hover {
        color: #02433d;
    }
`
