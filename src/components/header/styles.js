import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width:100%;
    height:100%;
    display: grid;
    grid-template-rows: 70% 30%;
    grid-area: header;
`

export const Top = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000814;
    padding: 10px;
    color: #fff;
    
    @media (max-width: 720px){
        display: grid;
        grid-template-areas:"logo cart heart user"
                            "input input input input";
    }
`

export const Bottom = styled.div`
    width:100%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #202020;
    color: #fff;
    padding: 10px;

`

export const CategoryBtn = styled.button`
    border-style: none;
    width: 100px;
    height: 100%;
    color: #ffffff;
    background-color: #202020;
    cursor: pointer;
    color: ${(props) => props.onpath ? '#FFC300':'#ffffff'};
`

export const Logo = styled.h1`
    grid-area: logo;
    font-family: 'Licorice', cursive;
    color: #FFC300;
    cursor: pointer;
    font-size: 44px;
    text-decoration: none;
    text-shadow: 2px 2px #202020;

    &:hover{
    }
`

export const InputContainer = styled.div`
    grid-area: input;
    width: 40%;
    height: 40px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40px auto;
    /* padding: 5px; */
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    border-radius: ${(props) => props.searching ? '5px 5px 0px 0px' : '5px'};
    /* border:1px solid #ececec; */

    @media (max-width: 720px){
        width: 100%;
        margin-bottom: 10px;
    }
`

export const Input = styled.input`
    grid-area: "input";
    width: 100%;
    min-height: 100%;
    border-style: none;
    outline: none;
    padding: 5px;
    border-radius: ${(props) => props.searching ? '5px 5px 0px 0px' : '5px'};
`
export const Product = styled(Link)`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 5px;
    cursor: pointer;
    /* border-bottom: 1px solid #ececec; */
    text-decoration: none;
    &:hover{
        background-color: #ececec;
    }
    & div{
        width: 40px;
        height: 40px;
        background-image: ${(props) => `url(${props.bg})`};
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        border-radius: 3px;
    }

    & p{
        text-decoration: none;
        color: #000;
        margin-left: 10px;
    }
`

export const InputResults = styled.div`
    grid-area: "resutls";
    display: ${(props) => props.searching ? 'flex' : 'none'} ;
    height: ${(props) => `${props.h}px`};
    max-height: 153px;
    width: 100%;
    flex-direction: column;
    position: relative;
    background-color: #FFFFFF;
    border: 0px 0px 1px 1px solid #c1c1c1;
    border-radius: 0px 0px 5px 5px;
    border: 1px solid #ececec;
    overflow-y: scroll;

    &:last-child:{
        border-bottom: 1px solid #ffffff;
    }
`

export const Checkout = styled(Link)`
    width: 120px;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-style: none;
    border-radius: 3px 5px 5px 3px;
    background-color: #FFF;
    cursor: pointer;
    text-decoration: none;
    /* border: 1px solid #ffffff; */
    /* color: #FFFFFF; */
    & > p{
        width: 100%;
        text-decoration: none;
        /* padding-left: 5px; */
        font-weight: bold;
        color: #000000;
        text-align: center;
        font-size: 13px;
    }
`

export const Icon = styled.i`
    height:100%;
    min-width: 50px;
    color: #FFC300;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    background-color: transparent;
    border-radius: 0px 3px 3px 0px;
    text-decoration: none;
    cursor: pointer;
    text-shadow: 2px 2px #202020;
    & p{
        text-decoration: none;
        position: absolute;
        top: 30px;
        padding-left:5px;
        /* margin: 10px auto; */
        color: #fff;
        font-size: 12px;
        text-shadow: 0px 0px #202020;
    }
`


export const CartIcon = styled(Icon)`
    grid-area: cart;
`

export const HeartIcon = styled(Icon)`
    grid-area: heart;
`

export const UserIcon = styled(Icon)`
    grid-area: user;
`
