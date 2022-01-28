import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
    padding-top: 20px;
`

export const Content = styled.div`
    grid-area: "content";
    width: 940px;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    margin: 0 auto;
    grid-gap: 10px;
`

export const Products = styled.div`
    width: 100%;
`

export const Info = styled.div`
    width: 100%;
    & hr{
        border-color: #000000;
        background-color: #000000;
        margin-bottom: 5px;
    }
`


export const ContinueBtn = styled(Link)`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #000000;
    color: #ffffff;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 5px;
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

export const PaymentButton = styled.button`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #000000;
    color: #ffffff;
    border-style: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
    margin-top: 5px;
`