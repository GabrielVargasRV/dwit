import styled from 'styled-components'

export const Container = styled.div`
    width: 350px;
    height: 210px;
    display: grid;
    grid-template-rows: 40px auto;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 10px;

    @media (max-width: 360px){
        width: 310px;
    }
`

export const CloseBtn = styled.button`
    width: 40px;
    height: 40px;
    font-size: 24px;
    border-style: none;
    border-radius: 50%;
    color: #c1c1c1;
    background-color: #ececec;
    cursor: pointer;
    transition: all 0.5s;
    /* border: 1px solid #c1c1c1; */
    &:hover{
        color: red;
    }
`

export const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Center = styled.div`
    width:100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    & i{
        font-size: 44px;
        color: #69B63D;
    }
`


export const Strong = styled.strong`
    text-decoration: none;
    font-weight: bold;
    /* cursor: pointer; */
    color: #000000;
`