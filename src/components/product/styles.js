import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Heart = styled.i`
    display: block;
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => props.isLiked ? '#F70707' : '#FFFFFF'};
`

export const Container = styled.div`
    width: 100%;
    height: 300px;
    display: grid;
    grid-template-rows: 75% 25%;
    grid-template-columns: 100%;
    margin-top: 20px;
    text-decoration: none;
    /* border: 1px solid #c1c1c1; */
    border-radius: 5px;
    transition: all 0.2s;

    &:hover ${Heart}{
        display: block;
    }

    &:hover{
        position: relative;
        transform: scale(1.12);
        box-shadow: 0px 0px 80px -20px rgba(130,130,130,0.75);
        /* box-shadow: 0px 0px 9px 0px rgba(32,32,32,0.66); */
        z-index: 5;
    }
    @media (max-width: 720px){
        height: 400px;

        &:hover{
            transform: scale(1);
        }
    }
`

export const Image = styled(Link)`
    width: 100%;
    height: 100%;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    border-radius: 5px 5px 0px 0px;
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid #000000;
    /* box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75); */

`

export const InfoTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled(Link)`
    font-size:18px;
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

export const Price = styled.p`
    color: #c1c1c1;
`
