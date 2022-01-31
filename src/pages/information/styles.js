import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    padding-top: 20px;
`

export const Content = styled.div`
    grid-area: content;
    width: 940px;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-areas: "form info";
    grid-gap: 10px;
    margin: 0 auto;

    @media (max-width: 940px){
        width: 100%;
        padding: 0 10px;
    }
    @media (max-width: 640px){
        grid-template-columns: 100%;
        grid-template-areas: "info"
                             "form";
    }
`

export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    width: 100%;
    & input{
        width: 100%;
        height:40px;
        border-radius: 3px;
        border-style: none;
        border: 1px solid #c1c1c1;
        margin-bottom: 10px;
        padding: 3px 5px;
    }
`

export const Info = styled.div`
    grid-area: info;
    width: 100%;
    & hr{
        border-color: #000000;
        background-color: #000000;
        margin-bottom: 5px;
    }
`

export const ContinueBtn = styled.button`
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #101010;
    color: #ffffff;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
    border: 3px solid #000000;
`

export const GoBackBtn = styled(Link)`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #ffffff;
    color: #000000;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
    border: 2px solid #000000;
`
