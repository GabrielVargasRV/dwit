import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 120px);
`

export const Content = styled.div`
    grid-area: "content";
    width: 940px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    & p{
        padding-left: 30px;
        margin-top: 10px;
    }
`

export const ShoppingCart = styled.i`
    color: #c1c1c1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 188px;
    & h3{
        color: #ffffff;
        position: fixed;
        font-size: 38px;
        /* top: 120px; */
        margin-bottom: 40px;
        margin-left: 20px;
    }
`

export const GoHome = styled.button`
    width: 180px;
    height: 40px;
    border-style: none;
    border-radius: 5px;
    background-color: #000000;
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    margin-left: 30px;
    margin-top: 20px;
`
