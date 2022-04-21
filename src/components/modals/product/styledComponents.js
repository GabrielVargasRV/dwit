import styled from 'styled-components';

export const Heart = styled.i`
    display: block;
    cursor: pointer;
    font-size: 24px;
    transition: all 0.5s;
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    /* border: 1px solid #fff; */
    color: ${(props) => props.isLiked ? '#F70707' : '#000'};
`

export const Photo = styled.div`
    grid-area: photo;
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    background-image: ${(props) => `url(${props.bg})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 1px solid #c1c1c1;
    border-radius: 5px;
    transition: all 0.5s;
    padding: 10px;
    box-shadow: 0px -66px 32px -21px rgba(0,0,0,0.69) inset;
    /* display: block; */
    &:hover{
    }
    &:hover ${Heart}{
    }
`


export const Content = styled.div`
    padding: 10px;
    width: 100%;
    height: calc(100% - 70px);
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 10px;
`