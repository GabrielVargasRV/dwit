import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 200px auto;
    grid-gap: 10px;
    background-color:#f9f9f9;
    border-radius: 5px;
    margin-bottom: 15px;
    padding: 5px;
    /* border: 1px solid #c1c1c1; */
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
`

export const Info = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #f9f9f9;
    padding: 5px;
`

export const Top = styled.div``

export const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
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
`
