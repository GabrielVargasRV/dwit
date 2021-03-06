import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 10px;
    background-color:#ffffff;
    /* border-radius: 5px; */
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid #c1c1c1;

    @media (max-width: 440px){
        height: 150px;
        grid-template-columns: 150px auto;
    }
`

export const Photo = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    border: 1px solid #ececec;

`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 5px;
`

export const Top = styled.div``

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    @media (max-width: 440px){
        font-size: 16px;
    }
`

export const Size = styled.p`
`

export const Price = styled.p`
`

export const RemoveBtn = styled.button`
    width: 120px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FF3C3C;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
    font-weight: bold;
    color: #ffffff;
    border: 1px solid #f20000;
    &:hover{
        opacity: 0.8;
    }

    @media (max-width: 440px){
        width: 80px;
        height: 30px;
    }
`
