import styled from 'styled-components';
import {Link} from 'react-router-dom';

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
    grid-template-areas: "products info";
    margin: 0 auto;
    grid-gap: 10px;

    @media (max-width: 940px){
        width: 100%;
        padding: 0 10px;
    }

    @media (max-width: 640px){
        grid-template-columns: 100%;
        grid-template-areas: "info"
                             "products";
    }
`

export const Products = styled.div`
    grid-area: products;
    width: 100%;
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
    font-size: 16px;
    &:hover{
        opacity: 0.9;
    }
`